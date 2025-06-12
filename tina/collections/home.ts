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
      name: 'homeButtons',
      label: 'Home Buttons',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.text || 'Button' }
        }
      },
      fields: [
        {
          type: 'string',
          name: 'text',
          label: 'Button Text',
          required: true
        },
        {
          type: 'string',
          name: 'href',
          label: 'Button Link',
          required: true
        }
      ]
    }
  ]
}

export default Home
