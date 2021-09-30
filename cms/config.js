const config = {
  cms_manual_init: true,
  local_backend: true,
  backend: {
    name: 'github',
    repo: 'areljannC/onlydrei.art',
    branch: 'master'
  },
  media_folder: 'public/img',
  public_folder: 'img',
  collections: [
    {
      label: 'Pages',
      name: 'pages',
      editor: { preview: false },
      files: [
        {
          label: 'Home',
          name: 'home',
          file: 'content/pages/home.md',
          fields: [
            {
              label: 'Featured Pieces',
              name: 'featuredPieces',
              widget: 'list',
              max: 6,
              min: 1,
              fields: [
                {
                  label: 'Cover Image',
                  name: 'coverImage',
                  widget: 'image',
                  choose_url: false,
                  required: true
                },
                {
                  label: 'Name',
                  name: 'name',
                  widget: 'string',
                  required: true
                },
                {
                  label: 'Description',
                  name: 'description',
                  widget: 'string',
                  required: false
                },
                {
                  label: 'Slug (Page Route)',
                  name: 'slug',
                  widget: 'string',
                  default: '/art/',
                  required: true
                }
              ]
            }
          ]
        },
        {
          label: 'About',
          name: 'about',
          file: 'content/pages/about.md',
          fields: [
            {
              label: 'Headline',
              name: 'headline',
              widget: 'string',
              required: true
            },
            {
              label: 'Summary',
              name: 'summary',
              widget: 'markdown',
              required: true
            }
          ]
        }
      ]
    },
    {
      label: 'Art',
      name: 'art',
      editor: { preview: true },
      create: true,
      extension: 'md',
      folder: 'content/art',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
          required: true
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'text',
          required: false
        },
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
          choose_url: false,
          required: true,
        },
        {
          label: 'Date',
          name: 'date',
          widget: 'date',
          required: true,
          format: 'DD MM YYYY',
        },
        {
          label: 'Tags',
          name: 'tags',
          widget: 'list',
          allow_add: true,
          field: {
            label: 'Tag',
            name: 'tag',
            widget: 'string',
            required: true,
          }
        },
        {
          label: 'Slug (Page Route)',
          name: 'slug',
          widget: 'string',
          default: '/art/',
          required: true
        }
      ]
    },
    {
      label: 'Settings',
      name: 'settings',
      editor: { preview: false },
      files: [
        {
          label: 'Socials',
          name: 'socials',
          file: 'content/settings/socials.md',
          fields: [
            {
              label: 'Instagram',
              name: 'instagramLink',
              widget: 'string'
            },
            {
              label: 'TikTok',
              name: 'tiktokLink',
              widget: 'string'
            }
          ]
        }
      ]
    }
  ]
};

export default config;
