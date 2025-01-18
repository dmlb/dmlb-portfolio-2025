import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pronouns',
      title: 'Pronouns',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'title',
      title: 'Professional Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortBio',
      title: 'Bio One-liner',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'currently',
      title: 'Currently',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'hideResume',
      title: 'Hide Resume Link',
      type: 'boolean',
      initialValue: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'resumePdfUrl',
      title: 'Resume PDF URL',
      type: 'url',
      validation: rule => rule.uri({
        scheme: ['https']
      })
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coreValues',
      title: 'Core Values',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url',
      validation: rule => rule.uri({
        scheme: ['https']
      })
    }),
    defineField({
      name: 'github',
      title: 'GitHub',
      type: 'url',
      validation: rule => rule.uri({
        scheme: ['https']
      })
    }),
    defineField({
      name: 'codepen',
      title: 'CodePen',
      type: 'url',
      validation: rule => rule.uri({
        scheme: ['https']
      })
    }),
  ],
  preview: {
    select: {
      title: 'name',
      pronouns: 'pronouns',
      media: 'image',
    },
    prepare(selection) {
      const {pronouns} = selection
      return {
        ...selection,
        subtitle: pronouns
      }
    }
  },
})
