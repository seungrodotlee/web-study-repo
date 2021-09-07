module.exports = {
  title: 'Breaking-Web', // 사이트 타이틀
  description: '웹 박살내기',
  themeConfig: {
    //displayAllHeaders: true,
    //logo: 'https://avatars1.githubusercontent.com/u/18749057?s=460&v=4', // 로고 이미지
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebarDepth: 2,
    sidebar: {
      collapsable: false,
      "/study/": [
        {
          title: "CSS 학습하기",
          collapsable: false,
          children: [
            "/study/frontend/css/",
            "/study/frontend/css/precedence",
            "/study/frontend/css/layout"
          ]
        }
      ]
    }
  },
}