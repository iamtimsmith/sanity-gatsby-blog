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
                    "61ad8f84d8ecfa1bfd3e6a29",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-nusurvkd",
                  apiId: "b9086bbc-2696-47a7-9fe8-61cc969d08ec",
                },
                {
                  buildHookId: "61ad8f84e271072ff84c1477",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-px8awwjm",
                  apiId: "050d632a-3a7c-4d2a-aa45-bfd0042f1d96",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/iamtimsmith/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-px8awwjm.netlify.app",
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
