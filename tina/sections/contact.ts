import type { Template } from 'tinacms'

const Contact: Template = {
  label: 'Contact',
  name: 'Contact',
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title'
    },
    {
      type: 'string',
      label: 'Description',
      name: 'description'
    },
    {
      type: 'image',
      label: 'Image',
      name: 'image'
    },
    {
      type: 'string',
      label: 'Name',
      name: 'name'
    },
    {
      type: 'string',
      label: 'Email',
      name: 'email'
    },
    {
      type: 'string',
      label: 'Phone Number',
      name: 'phone'
    },
    {
      type: 'datetime',
      label: 'Date Appointment',
      name: 'date'
    },
    {
      type: 'string',
      label: 'Message',
      name: 'message',
      ui: {
        component: 'textarea'
      }
    },
    {
      type: 'object',
      label: 'content',
      name: 'content',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.title }
        },
        max: 4
      },
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title'
        },
        {
          type: 'rich-text',
          label: 'Text',
          name: 'text'
        }
      ]
    }
  ]
}

export default Contact
