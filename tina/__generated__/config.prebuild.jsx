// tina/config.ts
import { defineConfig } from "tinacms";

// tina/collections/home.ts
var Home = {
  label: "Home",
  name: "home",
  path: "src/data/home",
  format: "json",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
      createNestedFolder: false
    }
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true
    },
    {
      type: "string",
      name: "description",
      label: "Description"
    },
    {
      type: "object",
      list: true,
      name: "sections",
      label: "Page Sections",
      ui: {
        visualSelector: true
      },
      templates: [
        {
          name: "Hero",
          label: "Hero",
          fields: [
            {
              type: "string",
              label: "Headline",
              name: "headline"
            },
            {
              type: "string",
              label: "Sub Headline",
              name: "subHeadline",
              ui: {
                component: "textarea"
              }
            },
            {
              type: "image",
              label: "Image",
              name: "image"
            }
          ]
        },
        {
          name: "Marquee",
          label: "Marquee",
          fields: [
            {
              type: "object",
              label: "Marquee Items",
              name: "items",
              list: true,
              ui: {
                itemProps: (item) => {
                  return { label: item?.title };
                }
              },
              fields: [
                {
                  type: "string",
                  label: "Title",
                  name: "title"
                }
              ]
            }
          ]
        },
        {
          label: "Feature",
          name: "Feature",
          fields: [
            {
              type: "object",
              label: "Feature Items",
              name: "items",
              list: true,
              ui: {
                itemProps: (item) => {
                  return { label: item?.title };
                }
              },
              fields: [
                {
                  type: "string",
                  label: "Title",
                  name: "title"
                },
                {
                  type: "string",
                  label: "Text",
                  name: "text"
                },
                {
                  type: "image",
                  label: "Feature Image",
                  name: "fimage"
                }
              ]
            }
          ]
        },
        {
          label: "Services",
          name: "Services",
          fields: [
            {
              type: "string",
              label: "Title",
              name: "title"
            },
            {
              type: "string",
              label: "Sub Title",
              name: "subTitle"
            },
            {
              type: "image",
              label: "Image",
              name: "image"
            },
            {
              type: "object",
              label: "Services Items",
              name: "items",
              list: true,
              ui: {
                itemProps: (item) => {
                  return { label: item?.title };
                }
              },
              fields: [
                {
                  type: "string",
                  label: "Title",
                  name: "title"
                },
                {
                  type: "string",
                  label: "Description",
                  name: "description"
                },
                {
                  type: "image",
                  label: "Service Image",
                  name: "serviceImage"
                }
              ]
            }
          ]
        },
        {
          label: "Call To Action",
          name: "CallToAction",
          fields: [
            {
              type: "string",
              label: "Headline",
              name: "headline"
            },
            {
              type: "object",
              label: "Action Link",
              name: "actionLink",
              fields: [
                {
                  type: "string",
                  label: "Link Text",
                  name: "text"
                },
                {
                  type: "string",
                  label: "Link URL",
                  name: "href"
                }
              ]
            }
          ]
        },
        {
          label: "Testimonials",
          name: "Testimonials",
          fields: [
            {
              type: "string",
              label: "Title",
              name: "title"
            },
            {
              type: "image",
              label: "Image",
              name: "image"
            },
            {
              type: "object",
              label: "Customers",
              name: "customers",
              list: true,
              ui: {
                itemProps: (item) => {
                  return { label: item?.name };
                }
              },
              fields: [
                {
                  type: "string",
                  label: "Name",
                  name: "name"
                },
                {
                  type: "string",
                  label: "job Title",
                  name: "job"
                },
                {
                  type: "image",
                  label: "Avatar",
                  name: "avatar"
                },
                {
                  type: "string",
                  label: "Testimonial",
                  name: "testimonial",
                  ui: {
                    component: "textarea"
                  }
                }
              ]
            }
          ]
        },
        {
          label: "Projects",
          name: "Projects",
          fields: [
            {
              type: "string",
              label: "Title",
              name: "title"
            }
          ]
        },
        {
          label: "Posts",
          name: "Posts",
          fields: [
            {
              type: "string",
              label: "Title",
              name: "title"
            }
          ]
        }
      ]
    }
  ]
};
var home_default = Home;

// tina/collections/pages.ts
var Pages = {
  label: "Pages",
  name: "pages",
  path: "src/content/pages",
  // format: 'mdx',
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true
    },
    {
      type: "image",
      name: "mainImage",
      label: "Main Image"
    },
    {
      type: "object",
      name: "seo",
      label: "SEO Settings",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Meta Title",
          description: "This is the meta Title that will appear in search engines"
        },
        {
          type: "string",
          name: "description",
          label: "Meta Description",
          description: "This is the meta description that will appear in search engines"
        },
        {
          type: "object",
          name: "image",
          label: "Image",
          fields: [
            {
              type: "image",
              name: "src",
              label: "Src"
            },
            {
              type: "string",
              name: "alt",
              label: "Image Alt"
            }
          ]
        }
      ]
    },
    {
      type: "object",
      list: true,
      name: "sections",
      label: "Sections",
      ui: {
        visualSelector: true
      },
      templates: [
        {
          name: "hero",
          label: "Hero",
          fields: [
            {
              type: "string",
              label: "Headline",
              name: "headline"
            },
            {
              type: "string",
              label: "Sub Headline",
              name: "subHeadline"
            },
            {
              type: "string",
              label: "Text",
              name: "text",
              ui: {
                component: "textarea"
              }
            }
          ]
        },
        {
          label: "Feature",
          name: "feature",
          fields: [
            {
              type: "object",
              label: "Feature Items",
              name: "items",
              list: true,
              fields: [
                {
                  type: "string",
                  label: "Title",
                  name: "title"
                },
                {
                  type: "string",
                  label: "Text",
                  name: "text"
                },
                {
                  type: "image",
                  label: "Feature Image",
                  name: "fimage"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true
    }
  ]
};
var pages_default = Pages;

// tina/collections/posts.ts
var Blog = {
  label: "Blog Posts",
  name: "blog",
  path: "src/content/blog",
  format: "md",
  // ui: {
  //     router: ({ document }) => {
  //         return `/blog/${document._sys.breadcrumbs.join('/')}`;
  //     }
  // },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true
    },
    {
      type: "string",
      name: "excerpt",
      label: "Excerpt"
    },
    {
      type: "datetime",
      name: "publishDate",
      label: "Publish Date",
      ui: {
        dateFormat: "MMMM DD YYYY",
        timeFormat: "hh:mm A"
      }
    },
    {
      type: "rich-text",
      label: "Body",
      name: "body",
      isBody: true
    }
  ]
};
var posts_default = Blog;

// tina/collections/projects.ts
var Projects = {
  label: "Projects",
  name: "projects",
  path: "src/content/projects",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true
    },
    {
      type: "string",
      name: "description",
      label: "Description"
    },
    {
      type: "datetime",
      name: "publishDate",
      label: "Publish Date",
      ui: {
        dateFormat: "MMMM DD YYYY",
        timeFormat: "hh:mm A"
      }
    },
    {
      type: "rich-text",
      label: "Body",
      name: "body",
      isBody: true
    }
  ]
};
var projects_default = Projects;

// tina/collections/global.ts
var Global = {
  label: "Global",
  name: "global",
  path: "src/data/global",
  format: "json",
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false,
      createNestedFolder: false
    }
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle"
    },
    {
      type: "string",
      name: "description",
      label: "Description"
    },
    {
      type: "object",
      name: "image",
      label: "Image",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "string"
        },
        {
          name: "alt",
          label: "Image Alt Text",
          type: "string"
        }
      ]
    },
    {
      type: "object",
      name: "navLinks",
      label: "Navigation Links",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.text };
        }
      },
      fields: [
        {
          name: "text",
          label: "Link Text",
          type: "string"
        },
        {
          name: "href",
          label: "Link URL",
          type: "string"
        }
      ]
    },
    {
      type: "object",
      name: "footerNavLinks",
      label: "Footer Navigation Links",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.text };
        }
      },
      fields: [
        {
          name: "text",
          label: "Link Text",
          type: "string"
        },
        {
          name: "href",
          label: "Link URL",
          type: "string"
        }
      ]
    },
    {
      type: "object",
      name: "socialLinks",
      label: "Social Links",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.text };
        }
      },
      fields: [
        {
          name: "text",
          label: "Link Text",
          type: "string"
        },
        {
          name: "href",
          label: "Link URL",
          type: "string"
        }
      ]
    },
    {
      type: "object",
      name: "subscribe",
      label: "Subscribe",
      fields: [
        {
          name: "title",
          label: "Subscribe Title",
          type: "string"
        },
        {
          name: "text",
          label: "Subscribe Text",
          type: "string"
        },
        {
          name: "formUrl",
          label: "Form URL",
          type: "string"
        }
      ]
    },
    {
      type: "number",
      name: "postsPerPage",
      label: "Posts Per Page"
    },
    {
      type: "number",
      name: "projectsPerPage",
      label: "Projects Per Page"
    }
  ]
};
var global_default = Global;

// tina/collections/theme.ts
var Theme = {
  label: "Theme",
  name: "theme",
  path: "src/data/theme",
  format: "json",
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  fields: [
    {
      type: "object",
      name: "fonts",
      label: "Fonts",
      fields: [
        {
          type: "string",
          name: "sans",
          label: "Sans"
        },
        {
          type: "string",
          name: "serif",
          label: "Serif"
        }
      ]
    },
    {
      type: "object",
      name: "letterSpacing",
      label: "letterSpacing",
      fields: [
        {
          type: "string",
          name: "tight",
          label: "Tight"
        }
      ]
    },
    {
      type: "object",
      name: "colors",
      label: "Colors",
      fields: [
        {
          type: "string",
          name: "primary",
          label: "Primary Color",
          ui: {
            component: "color"
          }
        },
        {
          type: "string",
          name: "secondary",
          label: "Secondary Color",
          ui: {
            component: "color"
          }
        },
        {
          type: "string",
          name: "background",
          label: "Background Color",
          ui: {
            component: "color"
          }
        },
        {
          type: "string",
          name: "text",
          label: "Text Color",
          ui: {
            component: "color"
          }
        }
      ]
    },
    {
      type: "object",
      name: "spacing",
      label: "Spacing",
      fields: [
        {
          type: "string",
          name: "sm",
          label: "Small"
        },
        {
          type: "string",
          name: "md",
          label: "Medium"
        },
        {
          type: "string",
          name: "lg",
          label: "Large"
        },
        {
          type: "string",
          name: "xs",
          label: "Extra Small"
        }
      ]
    },
    {
      type: "object",
      name: "typography",
      label: "Typography",
      fields: [
        {
          type: "string",
          name: "fontFamily",
          label: "Font Family"
        },
        {
          type: "string",
          name: "fontSize",
          label: "Base Font Size"
        },
        {
          type: "string",
          name: "lineHeight",
          label: "Line Height"
        }
      ]
    }
  ]
};
var theme_default = Theme;

// tina/config.ts
var branch = process.env.HEAD || process.env.TINA_BRANCH || "main";
var clientId = process.env.TINA_CLIENT_ID;
var token = process.env.TINA_TOKEN;
var config_default = defineConfig({
  branch,
  clientId: clientId || "",
  token: token || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "/src/images",
      publicFolder: ""
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [home_default, pages_default, posts_default, projects_default, global_default, theme_default]
  }
});
export {
  config_default as default
};
