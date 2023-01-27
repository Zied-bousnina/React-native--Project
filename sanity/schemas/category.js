import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Design Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category name',
      type: 'string',
      validation: (Rule) => Rule.required(),

    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required()
      
    }, 
    {
      name: "pieces",
      title: "Pieces",
      type: "array",
      of: [{type: "reference", to: {type: "piece"}}],
      validation: (Rule) => Rule.required()

  }
  ],
})
