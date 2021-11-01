export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '618013186961c59a3172c021',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-11yp4qi6',
                  apiId: '4752a79c-da85-4678-ac34-176d5d51c23a'
                },
                {
                  buildHookId: '61801318f3d23b4dde23a5fc',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-gy49ms3q',
                  apiId: '0fd17e37-6379-4d99-b25a-77fc377560d1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/GrumpyWolfpuppy/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-gy49ms3q.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
