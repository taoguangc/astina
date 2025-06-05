import type { Collection } from 'tinacms'
import Hero from '../sections/hero'
import Marquee from '../sections/marquee'
import Features from '../sections/features'
import Services from '../sections/services'
import Teams from '../sections/teams'
import CallToAction from '../sections/calltoaction'
import Testimonials from '../sections/testimonials'
import Booking from '../sections/booking'
import Projects from '../sections/projects'
import Posts from '../sections/posts'

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
      list: true,
      name: 'sections',
      label: 'Page Sections',
      ui: {
        visualSelector: true
      },
      templates: [Hero, Marquee, Features, Services, Teams, CallToAction, Testimonials, Booking, Projects, Posts]
    }
  ]
}

export default Home
