import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'professionalDevelopment',
  title: 'Professional Development',
  type: 'document',
  fields: [
    defineField({
        name: 'course',
        title: 'Course Name',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
    defineField({
        name: 'year',
        title: 'Year',
        type: 'string',
        validation: (rule) => rule.required().min(4).max(4),
    }),
    defineField({
      name: 'teckStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'techStack' } }],
    })
  ],
  preview: {
    select: {
      title: 'course',
      year: 'year',
    },
    prepare(selection) {
      const { year } = selection
      return {
        ...selection,
        subtitle: year,
      }
    }
  },
})
