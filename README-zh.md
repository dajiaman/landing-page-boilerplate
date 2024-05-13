# [Landing page boilerplate]

这是一个通用的落地页模板，适合各种项目和营销活动。
`https://github.com/weijunext/landing-page-boilerplate` 修改而来

## 技术栈

Landing page boilerplate 基于以下技术栈构建：

- Next.js – 前端
- TailwindCSS – 样式
- Google Analytics
- Vercel - 托管

## 本地运行

克隆仓库后，您需要复制 `.env.example` 文件来创建一个 `.env` 文件，并填写所需字段。

然后，在命令行中运行应用程序，它将在 `http://localhost:3000` 上可用。

```bash
npm run dev
```

## 创建你的项目

修改以下文件：

- `.env` or `.env.example`
- `config/site.ts`, 填写你的网站信息
- `public`, 修改 logo 文件
- `public/robots.txt`

## 一键部署

使用 Vercel 或 Zeabur 部署：

[![使用 Vercel 部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/weijunext/landing-page-boilerplate&project-name=&repository-name=landing-page-boilerplate&demo-title=LandingPageBoilerplate&demo-description=Landing%20page%20boilerplate.&demo-url=https://landingpage.weijunext.com&demo-image=https://landingpage.weijunext.com/og.png)

[![Deploy on Zeabur](https://zeabur.com/button.svg)](https://zeabur.com/templates/D92G1L)
