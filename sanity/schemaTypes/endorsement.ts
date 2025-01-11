import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'endorsement',
    title: 'Endorsement',
    type: 'document',
    fields: [
        defineField({
            name: 'quote',
            title: 'Quote',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'person',
            title: 'Person',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'position',
            title: 'Position Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'company',
            title: 'Company Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'year',
            title: 'Year',
            type: 'string',
            validation: (rule) => rule.required().min(4).max(4),
        }),
    ],

    preview: {
        select: {
            title: 'person',
            position: 'position',
            company: 'company',
        },
        prepare(selection) {
            const { company, position } = selection
            return { ...selection, subtitle: `${position}, ${company}` }
        },
    },
})
