export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e8895a5f591f0312e6f0783',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-rmfgdwco',
                  apiId: 'e77babc8-1b39-4cf8-8897-951aa0fc9106'
                },
                {
                  buildHookId: '5e8895a6bb65cd3ab7eb4327',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gyg7ctzi',
                  apiId: '3bfc5134-5f95-4b84-9d9b-3b49b4894dae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gkanishk/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gyg7ctzi.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
