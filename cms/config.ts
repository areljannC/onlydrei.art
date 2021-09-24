export default {
  backend: {
    name: 'github',
    repo: 'areljannC/onlydrei.art',
    branch: 'master',
  },
  media_folder: 'public/img',
  public_folder: 'img',
  collections: [
    {
      name: 'pages',
      label: 'Pages',
      files: [
        {
          label: 'Home',
          name: 'home',
          file: 'content/pages/home.yaml',
          fields: [
            {
              label: 'Title',
              name: 'title',
              widget: 'string',
            },
            {
              label: 'Description',
              name: 'description',
              widget: 'string',
            },
          ],
        },
        {
          label: 'About',
          name: 'about',
          file: 'content/pages/about.md',
          fields: [
            {
              label: 'Title',
              name: 'title',
              widget: 'string',
            },
            {
              label: 'Description',
              name: 'description',
              widget: 'string',
            },
          ],
        },
      ],
    },
  ],
};