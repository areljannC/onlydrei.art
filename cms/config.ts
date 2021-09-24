const config = {
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
      files: [
        {
          label: 'Home',
          name: 'home',
          file: 'content/pages/home.md',
          fields: [
            {
              label: 'Title',
              name: 'title',
              widget: 'string'
            },
            {
              label: 'Description',
              name: 'description',
              widget: 'string'
            }
          ]
        }
      ]
    }
  ]
};

export default config;
