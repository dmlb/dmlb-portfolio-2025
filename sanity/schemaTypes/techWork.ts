import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'techWork',
    title: 'Technical Work',
    type: 'document',
    fields: [
        defineField({
            name: 'position',
            title: 'Position Name',
            type: 'string',
            validation: (rule) => rule.required(),
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
            name: 'teckStack',
            title: 'Tech Stack',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'techStack' } }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'company',
            title: 'Company Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'companyUrl',
            title: 'Company Link',
            type: 'url',
            validation: (rule) => rule.required().uri({
                scheme: ['https']
            }),
        }),
        defineField({
            name: 'methodology',
            title: 'Methodology',
            type: 'string',
            initialValue: 'Agile Development',
            validation: (rule) => rule.required(),
        }), defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            options: {
                list: [
                    { title: 'Remote', value: 'remote' },
                    { title: 'Hybrid Remote', value: 'hybrid' },
                    { title: 'On Site', value: 'onsite' },
                ]
            },
            validation: (rule) => rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'position',
            startYear: 'startYear',
            endYear: 'endYear',
            company: 'company',
        },
        prepare(selection) {
            const { startYear, endYear, company } = selection
            const endVal = endYear ? endYear : 'Current'
            return {
                ...selection,
                subtitle: `${startYear} - ${endVal} | ${company}`,
            }
        }
    },
})
