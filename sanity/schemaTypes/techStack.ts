import { defineField, defineType } from 'sanity'
import { preview } from 'sanity-plugin-icon-picker';

export default defineType({
    name: 'techStack',
    title: 'Tech Stack (tags)',
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
            title: "Icon",
            name: "icon",
            type: "iconPicker",
            options: {
                providers: ["si"]
            }
        }),
    ],
    preview: {
        select: {
            title: "title",
            provider: "icon.provider",
            name: "icon.name",
        },
        prepare(selection) {
            return {
                ...selection,
                media: preview(selection),
            };
        },
    }
})
