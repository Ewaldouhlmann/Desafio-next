export default {
    name: 'game',
    title: 'Game',
    type: 'document',
    fields: [
        {
            name: 'GameTitle',
            title: 'Title of game',
            type: 'string',
        }, {
            name: "mainImage",
            title: "Main image",
            type: "image",
        }, {
            name: "GamePrice",
            title: "Price",
            type: "number",
        }, {
            name: 'aboutGame',
            title: 'aboutGame',
            type: 'string',
        }, {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "GameTitle",
                maxLength: 96,
            }
        },
    ]
}