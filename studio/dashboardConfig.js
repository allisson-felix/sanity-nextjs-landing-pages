export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5ed51a8d87e8c7ad633a853a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-bjsm299k',
                  apiId: '88182870-bebf-4aa7-85e1-55a96e59681e'
                },
                {
                  buildHookId: '5ed51a8d8db2b81851dbdf30',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xjmu94x5',
                  apiId: '7058f14f-2b06-4134-aae7-da3797449d76'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/allisson-felix/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xjmu94x5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
