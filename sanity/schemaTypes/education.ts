import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
        name: 'program',
        title: 'Program Name',
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
        name: 'institution',
        title: 'Institution Name',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'degree',
        title: 'Degree',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'major',
        title: 'Major',
        type: 'string',
      }),
      defineField({
        name: 'honours',
        title: 'Honours',
        type: 'boolean',
        initialValue: false,
      }),
  ],
  preview: {
    select: {
      title: 'program',
      year: 'year',
      institution: 'institution',
    },
    prepare(selection) {
      const { year, institution } = selection
      return {
        ...selection,
        subtitle: `${year} ${institution}`,
      }
    }
  },
})
