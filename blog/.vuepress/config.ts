import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { gungnirTheme, i18n } from "vuepress-theme-gungnir";
import { navbar, sidebar } from "./configs";


const isProd = process.env.NODE_ENV === "production";

export default defineUserConfig({
  // title: "Davis",
  // description: "Một lập trình viên luôn cố gắng mỗi ngày",
  base: "/",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/img/logo/logocp.png`  //đường dẫn ảnh
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo/logocp.png`
      }
    ],
    ["meta", { name: "application-name", content: "CreatiPath" }],
    // ["meta", { property: "og:image", content: "https://github.com/dangtranhuu/images/blob/main/angurvad/main.png?raw=true" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "CreatiPath" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/img/logo/logocp.png` }
    ],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }],
    // thanh navbar
    // ["script", { src: "./js/nav.js" }],
    ["script", { src: "https://raw.githubusercontent.com/dangtranhuu/DATN-CSS/main/nav.js" }],
    // ["script", {
    //   content: `var slideMask = document.querySelector('.sidebar-mask');
    // var headerNav = document.querySelector('.navbar');
    // var spanElement = document.createElement("span");
    // spanElement.className = 'opNav';
    // spanElement.textContent = "|||";
    // headerNav.appendChild(spanElement);
    // spanElement.onclick = function () {
    //   var openNav = document.querySelector('.sidebar-open');
    //   if (openNav)
    //     closeNavBar();
    //   openNavBar();
    // };
    // slideMask.onclick = function () {
    //   var openNav = document.querySelector('.sidebar-open');
    //   if (openNav)
    //     closeNavBar();
    // };
    // function openNavBar() {
    //   var noslidbar = document.querySelector('.no-sidebar');
    //   noslidbar.classList.add('sidebar-open');
    // }
    // function closeNavBar() {
    //   var noslidbar = document.querySelector('.no-sidebar');
    //   noslidbar.classList.remove('sidebar-open');
    // }` }]
  ],

  locales: {
    "/": {
      lang: "vi-VN",
      title: "CreatiPath",
      description: "Hành tình đến với sáng tạo"
    },
    "/en/": {
      lang: "en-US",
      title: "CreatiPath",
      description: "Hành trình đến với sáng tạo"
    }
  },

  bundler: viteBundler(),

  theme: gungnirTheme({
    repo: "CreatiPath/CreatiPath.github.io",
    docsDir: "blog",
    docsBranch: "main",
    navbarTitle: "CreatiPath",
    hitokoto: "https://v1.hitokoto.vn?c=i", // enable hitokoto (一言) or not?
    searchText: " ",
    // personal information
    personalInfo: {
      name: "CreatiPath",
      avatar: "/img/logo/800b2a20a7ca089451db.jpg",
      // description: "いつか、私がヒトじゃなくなっても",
      description: "Hành Trình Đến Với Sáng Tạo",
      sns: {
        github: "CreatiPath",
        linkedin: "CreatiPath",
        facebook: "CreatiPath",
        twitter: "CreatiPath",
        email: "creatipath@gmail.com",
        // rss: "/rss.xml"
      }
    },

    // header images on home page
    homeHeaderImages: [
      // {
      //   path: "/img/home-bg/1.png",
      //   mask: "rgba(40, 57, 101, .4)"
      // },
      {
        path: "/img/home-bg/12.png",
        mask: "rgba(68, 74, 83, .1)"
      },
      {
        path: "/img/home-bg/13.png",
        mask: "rgba(68, 74, 83, .1)"
      },
      {
        path: "/img/home-bg/14.png",
        mask: "rgba(68, 74, 83, .1)"
      },
    ],

    // other pages
    pages: {
      tags: {
        title: "Các từ khóa",
        subtitle: "Những từ khóa tìm kiếm ý tưởng và tài nguyên thiết kế",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)"
        }
      },
      // links: {
      //   title: "Công nghệ",
      //   subtitle:
      //     "Các công nghệ mình sẽ hướng dẫn",
      //   bgImage: {
      //     path: "/img/pages/links.jpg",
      //     mask: "rgba(64, 118, 190, 0.5)"
      //   }
      // }
    },

    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale is English, we don't need to set all of the locale fields
       */
      "/": {
        // navbar
        navbar: navbar.vi,
        // sidebar
        sidebar: sidebar.vi
      },

      /**
       * Chinese locale config
       */
      "/en/": {
        // navbar
        navbar: navbar.en,
        // sidebar
        sidebar: sidebar.en,
        // i18n
        ...i18n.en
      }
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      katex: true,
      giscus: {
        lang: "vi",
        darkTheme: "https://blog.zxh.io/styles/giscus-dark.css",
        repo: "dangth12/blog-giscus-comments",
        repoId: "R_kgDOJpeyjQ",
        category: "Announcements",
        categoryId: "DIC_kwDOJpeyjc4CW2KO",
        lazyLoad: true
      },
      mdPlus: {
        all: true
      },
      ga: "G-HCQSX53XFG",
      ba: "75381d210789d3eaf855fa16246860cc",
      rss: {
        siteURL: "https://blog.zxh.io",
        copyright: "Renovamen 2018-2022"
      }
    },
    footer: `
      &copy; <a href="https://github.com/creatipath" target="_blank">CreatiPath Team</a> 2024
      <br>
      Powered by <a href="https://www.facebook.com/creatipath/" target="_blank">CreatiPath
    `
  }),

  markdown: {
    headers: {
      level: [2, 3, 4, 5]
    },
    code: {
      lineNumbers: false
    }
  },
});