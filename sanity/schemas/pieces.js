import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'pieces',
    title: 'Pieces',
    type: 'document',
    fields: [
        {


            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'ShortDescription',
            title: 'Short Description',
            type: 'text',
            validation: (Rule) => Rule.required()
        },

        {
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: (Rule) => Rule.required()
        },
       
      
       {
        name: "type",
        title: "Type",
        type: "reference",
        validation: (Rule) => Rule.required(),
        to: [{type: "category"}],

       }
    





    ]
}
)
