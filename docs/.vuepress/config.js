module.exports = {
  title: "Breaking-Web", // 사이트 타이틀
  description: "웹 박살내기",
  base: "/web-study-repo/",
  head: [
    ["link", { rel: "stylesheet", href:"https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css" }],
    ["link", { rel: "stylesheet", href:"https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" }]
  ],
  themeConfig: {
    //displayAllHeaders: true,
    //logo: 'https://avatars1.githubusercontent.com/u/18749057?s=460&v=4', // 로고 이미지
    nav: [
      { text: "홈", link: "/" },
      { text: "개념", link: "/study/basic/getting-start/" },
      { text: "프론트엔드", link: "/study/frontend/css/" }
    ],
    sidebarDepth: 2,
    sidebar: {
      collapsable: false,
      "/study/basic/": [
        {
          title: "웹 페이지는 어떻게 동작할까?",
          collapsable: false,
          children: [
            "/study/basic/getting-start/"
          ]
        },
        {
          title: "웹 애플리케이션 배포하기",
          collapsable: false,
          children: [
            "/study/basic/deploy/"
          ]
        }
      ],
      "/study/frontend/": [
        {
          title: "CSS 학습하기",
          collapsable: false,
          children: [
            "/study/frontend/css/",
            "/study/frontend/css/precedence",
            "/study/frontend/css/layout",
            "/study/frontend/css/motion-in-css",
            "/study/frontend/css/pseudo",
            "/study/frontend/css/variable",
            "/study/frontend/css/media-query",
            "/study/frontend/css/pre-processer",
            "/study/frontend/css/tailwindcss"
          ],
        },
        {
          title: "JS 학습하기",
          collapsable: false,
          children: [
            "/study/frontend/js/",
            "/study/frontend/js/arrow-function",
            "/study/frontend/js/this",
            "/study/frontend/js/iife",
            "/study/frontend/js/asynchronized",
            "/study/frontend/js/context",
            "/study/frontend/js/closure",
          ]
        }
      ],
    },
  },
  markdown: {
    extractHeaders: ["h2", "h3", "h4"],
  },
};
