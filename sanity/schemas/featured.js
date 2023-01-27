import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'featured categorie name',
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
        name: "pieces",
        title: "Pieces",
        type: "array",
        of: [{type: "reference", to: {type: "piece"}}],
        validation: (Rule) => Rule.required()

    }
  ],
})
