import type { Collection } from 'tinacms'

const Home: Collection = {
  label: 'Home',
  name: 'home',
  path: 'src/data/home',
  format: 'json',
  ui: {
    allowedActions: {
      create: false,
      delete: false,
      createNestedFolder: false
    }
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      isTitle: true,
      required: true
    },
    {
      type: 'string',
      name: 'description',
      label: 'Description'
    },
    {
      type: 'object',
      name: 'sections',
      label: 'Sections',
      list: true,
      fields: [
        {
          type: 'string',
          name: 'type',
          label: 'Type',
          options: ['features', 'hero', 'contact']
        },
        {
          type: 'object',
          name: 'features',
          label: 'Features',
          fields: [
            {
              type: 'object',
              name: 'cards',
              label: 'Cards',
              list: true,
              fields: [
                {
                  type: 'string',
                  name: 'title',
                  label: 'Title'
                },
                {
                  type: 'string',
                  name: 'description',
                  label: 'Description'
                },
                {
                  type: 'image',
                  name: 'image',
                  label: 'Image'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

export default Home
