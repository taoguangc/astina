import type { Template } from 'tinacms'

const Marquee: Template = {
  name: 'Marquee',
  label: 'Marquee',
  fields: [
    {
      type: 'object',
      label: 'Marquee Items',
      name: 'items',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.title }
        }
      },
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title'
        }
      ]
    }
  ]
}

export default Marquee