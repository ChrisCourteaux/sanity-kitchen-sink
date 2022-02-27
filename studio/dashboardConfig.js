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
                  buildHookId: '621bd7c7d3eec8f843c84bcc',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-sh9pw69u',
                  apiId: '48dfdf84-87e6-4825-933f-e05e4193e511'
                },
                {
                  buildHookId: '621bd7c798b2126a392bf848',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-wd2z47j7',
                  apiId: 'dd1e8ad0-050f-4eeb-8f35-dfce17ece211'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ChrisCourteaux/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-wd2z47j7.netlify.app', category: 'apps'}
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
