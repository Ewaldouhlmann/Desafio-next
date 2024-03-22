export default {
    name: 'Job',
    title: 'Job',
    type: 'document',
    fields: [
        {
            name: "position",
            title: "Position",
            type: "string",
        }, {
            name: "Type",
            title: "Type",
            type: "string",
            options: {
                list: ['Flexivel', 'Remoto', 'Presencial']
            }
        }, {
            name: "Area",
            title: "Area",
            type: "string",
            options: {
                list: ['Desenvolvimento', 'Design', 'Marketing', 'Vendas']
            }
        }, {
            name: "Description",
            title: "Description",
            type: "text",
        }, {
            name: "Remuneration",
            title: "Remuneration",
            type: "number",
        }, {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "position",
                maxLength: 96,
            }
        }
    ]
}