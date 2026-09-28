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

四个项目标题严格对应 GitHub repo 名称，标题点击后打开对应仓库；`research.items` 中 `title` 和 `url` 分别控制仓库名称和链接，不对名称改写。其他研究、实习和技能来自原 CV；CV 下载仍指向 `CV_26_7_7.docx`，可以换成此目录中的 PDF。

手机使用顶部个人资料、下方正文的单栏布局。页面不依赖在线字体或第三方脚本。尚未部署到 GitHub。
