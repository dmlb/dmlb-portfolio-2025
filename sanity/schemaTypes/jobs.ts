import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'jobs',
    title: 'Jobs',
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
            name: 'company',
            title: 'Company Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'companyUrl',
            title: 'Company Link',
            type: 'url',
            validation: (rule) => rule.uri({
                scheme: ['https']
            }),
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
