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
                  buildHookId: '617a86c82f6c360a69edda1a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-95au8v9d',
                  apiId: '19cd825f-16ca-4e0c-8e41-52dc56b705ea'
                },
                {
                  buildHookId: '617a86c8b86c7f0d887aa724',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-z7vkbudi',
                  apiId: 'a2c32ac1-00f8-48ec-803b-f3893f5d2c1e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Edd-brother/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-z7vkbudi.netlify.app', category: 'apps'}
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
