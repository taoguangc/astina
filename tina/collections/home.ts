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
          name: '_template',
          label: 'Template',
          options: ['Hero', 'Features', 'Services', 'Teams', 'Testimonials', 'Booking']
        },
        {
          type: 'string',
          name: 'headline',
          label: 'Headline'
        },
        {
          type: 'string',
          name: 'subHeadline',
          label: 'Sub Headline'
        },
        {
          type: 'object',
          name: 'button',
          label: 'Button',
          list: true,
          fields: [
            {
              type: 'string',
              name: 'text',
              label: 'Text'
            },
            {
              type: 'string',
              name: 'href',
              label: 'Href'
            }
          ]
        },
        {
          type: 'string',
          name: 'image',
          label: 'Image'
        },
        {
          type: 'string',
          name: 'title',
          label: 'Title'
        },
        {
          type: 'string',
          name: 'text',
          label: 'Text',
          ui: {
            component: 'textarea'
          }
        },
        {
          type: 'string',
          name: 'linkTitle',
          label: 'Link Title'
        },
        {
          type: 'string',
          name: 'link',
          label: 'Link'
        },
        {
          type: 'object',
          name: 'cards',
          label: 'Cards',
          list: true,
          fields: [
            {
              type: 'string',
              name: 'icon',
              label: 'Icon'
            },
            {
              type: 'string',
              name: 'heading',
              label: 'Heading'
            },
            {
              type: 'string',
              name: 'content',
              label: 'Content',
              ui: {
                component: 'textarea'
              }
            }
          ]
        },
        {
          type: 'string',
          name: 'subTitle',
          label: 'Sub Title'
        },
        {
          type: 'object',
          name: 'items',
          label: 'Items',
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
              type: 'string',
              name: 'serviceImage',
              label: 'Service Image'
            }
          ]
        },
        {
          type: 'object',
          name: 'staff',
          label: 'Staff',
          list: true,
          fields: [
            {
              type: 'string',
              name: 'name',
              label: 'Name'
            },
            {
              type: 'string',
              name: 'job',
              label: 'Job'
            },
            {
              type: 'string',
              name: 'image',
              label: 'Image'
            },
            {
              type: 'string',
              name: 'link',
              label: 'Link'
            }
          ]
        },
        {
          type: 'object',
          name: 'customers',
          label: 'Customers',
          list: true,
          fields: [
            {
              type: 'string',
              name: 'name',
              label: 'Name'
            },
            {
              type: 'string',
              name: 'job',
              label: 'Job'
            },
            {
              type: 'string',
              name: 'avatar',
              label: 'Avatar'
            },
            {
              type: 'string',
              name: 'testimonial',
              label: 'Testimonial',
              ui: {
                component: 'textarea'
              }
            }
          ]
        },
        {
          type: 'string',
          name: 'buttonText',
          label: 'Button Text'
        },
        {
          type: 'string',
          name: 'buttonLink',
          label: 'Button Link'
        }
      ]
    }
  ]
}

export default Home
