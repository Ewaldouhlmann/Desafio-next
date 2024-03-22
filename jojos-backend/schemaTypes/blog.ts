export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title of article',
            type: 'string',
        },
        {
            name: 'smallDescription',
            title: 'Small description',
            type: 'text',
        }, {
            name: "mainImage",
            title: "Main image",
            type: "image",
        }, {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        }, {
            name: "publishedBy",
            title: "Published by",
            type: "string",
        }, {
            name: "publishedAt",
            title: "Published at",
            type: "datetime",
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ]
        }


    ]
}