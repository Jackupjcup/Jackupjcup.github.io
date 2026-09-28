# Runda Liu — 学术主页

用浏览器直接打开 `index.html`，无需安装依赖。所有网站文件位于当前 `github_web` 文件夹。

布局参考 [Academic Pages](https://academicpages.github.io/)：顶部横向导航、左侧圆形头像和个人信息、右侧正文与纵向研究列表。此版本为独立 HTML / CSS / JavaScript 实现，没有安装或运行原仓库的 Jekyll 模板。

旧版期刊排版、纸张纹理、倾斜照片、旋转动效、装饰图和布局选择已移除。仅保留配色：暖白 `#f3efe4`、朱红 `#b6343e`、靛蓝 `#242b58`、紫色 `#694471`、墨黑 `#202125`。

## 编辑内容

修改 `content.js` 的键值，保存并刷新浏览器即可。无需修改 HTML。使用英文引号和逗号；换行写成 `\n`。

| 配置键 | 作用 |
| --- | --- |
| `site` | 浏览器标题、描述、语言 |
| `navigation` | 顶部导航文字 |
| `profile` | 姓名、头像、方向、本科 XDU / 研究生 NUS |
| `links` | GitHub、邮箱、CV 文件路径 |
| `labels` | 链接和展开详情的文字 |
| `education.title` / `education.items` | 教育区标题，以及学校、校徽、时间、专业、GPA、校内经历下的奖项 |
| `research.items` | 研究项目及详情 |
| `experience.items` | 实习经历 |
| `awards.items` | 奖项 |
| `skills.items` | 技能 |
| `footer` | 页脚文字和参考链接 |

`items` 数组可增删条目；研究条目 `id` 使用唯一英文标识。所有编辑文字均以纯文本插入。

教育区显示学校全名、校徽、时间和专业。本科为 XDU，2022.09–2026.06，Electronic and Information Engineering，GPA 3.8/4.0；硕士为 NUS，2026.08–至今，M.Sc. in Electrical Engineering。数学竞赛奖和奖学金归入本科条目的 `awards` 数组；原 CV 中 NUS 苏州研究院的 Outstanding Student 仍保留在单独 Recognition 区。

项目标题严格对应 GitHub repo 名称，标题点击后打开对应仓库；`research.items` 中 `title` 和 `url` 分别控制仓库名称和链接，不对名称改写。HMI 项目已加入列表首位并展示完整演示 GIF。其他研究、实习和技能来自原 CV；CV 下载仍指向 `CV_26_7_7.docx`，可以换成此目录中的 PDF。

## 项目图片 / GIF / 视频

每个项目都有 `media` 键值配置，素材建议放在 `assets/projects/`：

```js
"media": {
  "type": "image",
  "src": "assets/projects/example.gif",
  "alt": "描述图片或视频的内容",
  "position": "50% 50%",
  "poster": ""
}
```

- 图片和 GIF 使用 `type: "image"`；MP4 / WebM 使用 `type: "video"`，显示原生播放控件。
- `src` 留空或不配置 `media` 时只显示项目文字，不显示占位框，也不保留空白列；填写素材路径后才显示媒体区域。已配置素材但加载失败时保留该项目的预览占位。视频请填写实际媒体文件地址，而非 YouTube 网页链接。
- 所有展示位固定为 **16:9**，通过 `object-fit: cover` 裁切显示，不拉伸或修改原文件。
- `position` 控制裁切焦点，例如 `50% 20%` 更偏向顶部；视频的 `poster` 可选填封面图片路径。
- 桌面端媒体在文字左侧；手机端媒体在文字上方，仍保持横向比例。

手机使用顶部个人资料、下方正文的单栏布局。页面不依赖在线字体或第三方脚本。

## 在线发布

- 网站：https://jackupjcup.github.io/
- 仓库：https://github.com/Jackupjcup/Jackupjcup.github.io
- GitHub Pages 从 `main` 分支根目录发布，`.nojekyll` 保持纯静态文件部署。

修改后在此目录执行 `git add`、`git commit`、`git push`，GitHub Pages 会自动重新发布。
