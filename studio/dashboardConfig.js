export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60429c5aaf6d9c00a377416a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-dzd851nv',
                  apiId: 'be36a1d3-603d-4bc2-aca6-efcf3a1dc50d'
                },
                {
                  buildHookId: '60429c5be74c0000d9c53de3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-nvxhdent',
                  apiId: 'ea32ae79-bfbc-4be3-8f52-79beda2f9dc5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/S-Delowar/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-nvxhdent.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
