import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'piece',
  title: 'piece',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of piece',
      type: 'string',
      validation: (Rule) => Rule.required(),

    },
    {
        name: 'ShortDescription',
        title: 'Short Description',
        type: 'text',
        validation: (Rule) => Rule.required()
    },
    {
        name:"price",
        title:"Price",
        type:"number",
        validation: (Rule) => Rule.required()
    }, 
    {
      name: "image",
      title: "Image of piece",
      type: "image",
      validation: (Rule) => Rule.required()
      
    },
    {
        name: "PDF",
        title: "PDF",
        type: "file",
        validation: (Rule) => Rule.required()
       },
      //  {
      //   name: "type",
      //   title: "Type",
      //   type: "reference",
      //   // validation: (Rule) => Rule.required(),
      //   to: [{type: "category"}],

      //  } 
  ],
})
