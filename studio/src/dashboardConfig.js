export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62cd404a3375685835210c24",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ybpqdt1d",
                  apiId: "2810646a-d8ad-4d76-a621-506d7452b778",
                },
                {
                  buildHookId: "62cd404b1347e46ae002dc69",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-reb2p3qb",
                  apiId: "c8884fc8-4ad9-489e-a349-0f2a753152cc",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/NgTuanLoc/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-reb2p3qb.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
