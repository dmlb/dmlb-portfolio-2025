import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'techProject',
  title: 'Tech Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'projectLink',
      title: 'Project Link',
      type: 'url',
      validation: rule => rule.required().uri({
        scheme: ['https']
      })
    }),
    defineField({
      name: 'startYear',
      title: 'Start Year',
      type: 'string',
      validation: (rule) => rule.required().min(4).max(4),
    }),
    defineField({
      name: 'endYear',
      title: 'End Year',
      type: 'string',
      validation: (rule) => rule.min(4).max(4),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'techStack' } }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      topCategory: 'categories.0.title',
      startYear: 'startYear',
      endYear: 'endYear',
    },
    prepare(selection) {
      const { startYear, endYear, topCategory } = selection
      const endVal = endYear ? endYear : 'Current'
      const sameYear = startYear === endYear
      const yearRange = sameYear ? startYear : `${startYear} - ${endVal}`

      return {
        ...selection,
        subtitle:`${topCategory} | ${yearRange}`,
      }
    }
  },
})