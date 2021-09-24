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
          extension: 'md',
          file: 'content/pages/home.md',
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