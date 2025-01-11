import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'filmCredits',
    title: 'Film Credits',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
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
            name: 'role',
            title: 'Role',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'duration',
            title: 'Duration',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'format',
            title: 'Format',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'genre',
            title: 'Genre',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'director',
            title: 'Director',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
        }),
        defineField({
            name: 'synopsis',
            title: 'Synopsis',
            type: 'string',
        }),
        defineField({
            name: 'festival',
            title: 'Festival',
            type: 'string',
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'url',
            validation: rule => rule.uri({
                scheme: ['https']
            })
        }),
        defineField({
            name: 'trailer',
            title: 'Trailer',
            type: 'url',
            validation: rule => rule.uri({
                scheme: ['https']
            })
        }),
    ],
    preview: {
        select: {
            title: 'title',
            year: 'year',
            director: 'director',
        },
        prepare(selection) {
            const { year, director } = selection
            return {
                ...selection,
                subtitle: `${year} ${director}`,
            }
        }
    },
})
