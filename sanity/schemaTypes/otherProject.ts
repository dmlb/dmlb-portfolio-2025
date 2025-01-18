import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'otherProject',
    title: 'Other Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
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
            name: 'discord',
            title: 'Discord',
            type: 'url',
            validation: (rule) => rule.uri({
                scheme: ['https']
            }),
        }),
        defineField({
            name: 'instagram',
            title: 'Instagram',
            type: 'url',
            validation: (rule) => rule.uri({
                scheme: ['https']
            }),
        }),
        defineField({
            name: 'linkedin',
            title: 'LinkedIn',
            type: 'url',
            validation: (rule) => rule.uri({
                scheme: ['https']
            }),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'blockContent',
        }),
    ],
    preview: {
        select: {
            title: 'title',
        }
    },
})
