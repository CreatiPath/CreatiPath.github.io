import type { NavbarConfig } from "vuepress-theme-gungnir";

export const vi: NavbarConfig = [
  {
    text: "Trang chủ",
    link: "/",
    icon: "fa-fort-awesome"
  },
  {
    text: "Giới thiệu",
    link: "/about",
    icon: "fa-paw"  //"fa-paw"
  },

  {
    text: "Thiết kế",
    icon: "md-draw",
    children: [
      {
        text: "Thiết kế 2D",
        icon: "px-monitor",
        children: [
          {
            text: "Thiết kế 2D với Adobe Animate",
            link: "/animate/section1.html",
            icon: "co-adobe"
          },
          {
            text: "Thiết kế cơ bản với Photoshop",
            link: "/photoshop/section1.html",
            icon: "si-adobephotoshop"
          },
          {
            text: "Thiết kế nâng cao với Illustrator",
            link: "/illustrator/section1.html",
            icon: "si-adobeillustrator"
          },
          {
            text: "Thiết kế nâng cao với After Efects",
            link: "/after-effects/section1.html",
            icon: "si-adobeaftereffects"
          },
          {
            text: "Thiết kế nâng cao với Indesign",
            link: "/indesign/",
            icon: "si-adobeindesign"
          },
        ]
      },
      {
        text: "Thiết kế 3D",
        icon: "fc-command-line",
        children: [
          {
            text: "Thiết kế 3D với Blender",
            link: "/blender/section1.html",
            icon: "si-blender"
          },
        ]
      },
    ]
  },
  {
    text: "Phím tắt",
    icon: "md-keyboardoptionkey-outlined",
    children: [
      {
        text: "Phần mềm dành cho ấn phẩm",
        // link: "/docs/intro.md",
        // icon: "vi-file-type-cpp",
        children: [
          {
            text: "Phím tắt Photoshop",
            link: "/photoshop-short/section1.html",
            icon: "si-adobephotoshop"
          },
          {
            text: "Phím tắt Illustrator",
            link: "/illustrator-short/section1.html",
            icon: "si-adobeillustrator"
          },
          {
            text: "Phím tắt Indesign",
            link: "/indesign-short/section1.html",
            icon: "si-adobeindesign"
          },
        ]
      },
      {
        text: "Phần mềm dành cho Motion 2D",
        // link: "/docs/intro.md",
        // icon: "vi-file-type-cpp",
        children: [
          {
            text: "Phím tắt After Effects",
            link: "/aftereffects-short/section1.html",
            icon: "si-adobeaftereffects"
          },
          {
            text: "Phím tắt Animate",
            link: "/animate-short/section1.html",
            icon: "co-adobe"
          },
        ]
      },
      {
        text: "Phần mềm dành cho 3D",
        // link: "/docs/intro.md",
        icon: "vi-file-type-plsql-package-spec",
        children: [
          {
            text: "Phím tắt Blender",
            link: "/blender-short/section1.html",
            icon: "si-blender"
          },
          // {
          // 	text: "JavaScript ES6",
          // 	link: "/docs/intro.md",
          // 	icon: "vi-file-type-light-jsmap"
          // },
        ]
      },
    ]
  },
  // {
  // 	text: "Java",
  // 	icon: "fa-java",
  // 	children: [
  // 		{
  // 			text: "Java Servlet/Jsp",
  // 			link: "/docs/intro.md",
  // 			icon: "vi-file-type-jsp"
  // 		},
  // 		{
  // 			text: "Spring MVC",
  // 			link: "/docs/intro.md",
  // 			icon: "co-spring"
  // 		},
  // 		{
  // 			text: "SpringBoot",
  // 			link: "/docs/intro.md",
  // 			icon: "co-spring"
  // 		},
  // 	]
  // },
  {
    text: "Công cụ",
    icon: "la-tools-solid",
    children: [
      // {
      //   text: "MS Office",
      //   // link: "/docs/intro.md",
      //   icon: "vi-file-type-glitter",
      //   children: [
      //     {
      //       text: "MS Ofice 2016",
      //       link: "https://drive.google.com/file/d/1WaU74f2Bjl_hA3dTiulAQAOxe1SekfwD/view?usp=drive_link",
      //       icon: "vi-folder-type-windows"
      //     },
      //   ]
      // },
      {
        text: "Adobe",
        // link: "/docs/intro.md",
        icon: "vi-file-type-glitter",
        children: [
          {
            text: "Photoshop 2023",
            link: "https://drive.google.com/file/d/1aZqd2Mxjru8u5tj5hdhjDMIpfIHnUFFP/view?usp=share_link",
            icon: "si-adobephotoshop"
          },
          {
            text: "Illustrator 2023",
            link: "https://drive.google.com/file/d/1OgZ8TuYhH7IY-d6TfWEE0G0svOKDOIVk/view?usp=share_link",
            icon: "si-adobeillustrator"
          },
          {
            text: "Aftereffects 2023",
            link: "https://drive.google.com/file/d/1e5ZzCP5qLkJWG9_a7pdexaPDSUHqSjC7/view?usp=share_link",
            icon: "si-adobeaftereffects"
          },
          {
            text: "Premiere 2023",
            link: "https://drive.google.com/file/d/1NwcJDIDDAOgHz5DlDc22Og6H12Zsit-9/view?usp=drive_link",
            icon: "si-adobepremierepro"
          },
          {
            text: "Lightroom Classic 2023",
            link: "https://drive.google.com/file/d/1xpRDeSOg6JgTlX66XUAL8XR95-kYf-om/view?usp=sharing",
            icon: "si-adobelightroom"
          },
          {
            text: "Audition 2023",
            link: "https://drive.google.com/file/d/1zw7_seC8aiym6FS8X3H_ubqkkD0rVN_M/view?usp=sharing",
            icon: "si-adobeaudition"
          },
          {
            text: "Media Encoder 2023",
            link: "https://drive.google.com/uc?id=1yQBVkxIYwE4R2M5RrIY_mynhOa2VJfYT",
            icon: "co-adobe"
          },
        ]
      },
      {
        text: "Maxon",
        // link: "/docs/intro.md",
        icon: "vi-file-type-glitter",
        children: [
          {
            text: "Cinema 4D",
            link: "https://drive.google.com/drive/folders/1galvH0d0bsQnCwRXszZovzeWmFkdw0mA?usp=sharing",
            icon: "si-cinema4d"
          },
        ]
      },
      // {
      //   text: "TechSmith",
      //   // link: "/docs/intro.md",
      //   icon: "vi-file-type-glitter",
      //   children: [
      //     {
      //       text: "Camtasia",
      //       link: "https://drive.google.com/file/d/1VbcUkD0Uyu4zqR9FN_39GFWQX_vw1TqR/view?usp=share_link",
      //       icon: "bi-record-btn"
      //     },
      //   ]
      // },
    ]
  },
  // {
  //   text: "Tài nguyên",
  //   icon: "si-progress",
  //   children: [
  //     {
  //       text: "MS Office",
  //       // link: "/docs/intro.md",
  //       icon: "vi-file-type-glitter",
  //       children: [
  //         {
  //           text: "MS Ofice 2016",
  //           link: "https://drive.google.com/file/d/1WaU74f2Bjl_hA3dTiulAQAOxe1SekfwD/view?usp=drive_link",
  //           icon: "vi-folder-type-windows"
  //         },
  //       ]
  //     },
  //     {
  //       text: "Adobe",
  //       // link: "/docs/intro.md",
  //       icon: "vi-file-type-glitter",
  //       children: [
  //         {
  //           text: "Photoshop 2023",
  //           link: "https://drive.google.com/file/d/1aZqd2Mxjru8u5tj5hdhjDMIpfIHnUFFP/view?usp=share_link",
  //           icon: "si-adobephotoshop"
  //         },
  //         {
  //           text: "Illustrator 2023",
  //           link: "https://drive.google.com/file/d/1OgZ8TuYhH7IY-d6TfWEE0G0svOKDOIVk/view?usp=share_link",
  //           icon: "si-adobeillustrator"
  //         },
  //         {
  //           text: "Aftereffects 2023",
  //           link: "https://drive.google.com/file/d/1e5ZzCP5qLkJWG9_a7pdexaPDSUHqSjC7/view?usp=share_link",
  //           icon: "si-adobeaftereffects"
  //         },
  //         {
  //           text: "Premiere 2023",
  //           link: "https://drive.google.com/file/d/1NwcJDIDDAOgHz5DlDc22Og6H12Zsit-9/view?usp=drive_link",
  //           icon: "si-adobepremierepro"
  //         },
  //         {
  //           text: "Lightroom Classic 2023",
  //           link: "https://drive.google.com/file/d/1xpRDeSOg6JgTlX66XUAL8XR95-kYf-om/view?usp=sharing",
  //           icon: "si-adobelightroom"
  //         },
  //         {
  //           text: "Audition 2023",
  //           link: "https://drive.google.com/file/d/1zw7_seC8aiym6FS8X3H_ubqkkD0rVN_M/view?usp=sharing",
  //           icon: "si-adobeaudition"
  //         },
  //         {
  //           text: "Media Encoder 2023",
  //           link: "https://drive.google.com/uc?id=1yQBVkxIYwE4R2M5RrIY_mynhOa2VJfYT",
  //           icon: "co-adobe"
  //         },
  //       ]
  //     },
  //     {
  //       text: "TechSmith",
  //       // link: "/docs/intro.md",
  //       icon: "vi-file-type-glitter",
  //       children: [
  //         {
  //           text: "Camtasia",
  //           link: "https://drive.google.com/file/d/1VbcUkD0Uyu4zqR9FN_39GFWQX_vw1TqR/view?usp=share_link",
  //           icon: "bi-record-btn"
  //         },
  //       ]
  //     },
  //   ]
  // },
];