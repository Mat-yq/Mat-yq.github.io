# Demo Portfolio Template

这是一个静态作品集模板。当前版本已经将姓名、联系方式、学校、公司、项目、论文、奖项和经历等内容替换为占位符或虚构信息，适合先公开部署，再按需补充经过脱敏的内容。

## Pages

| Page | File | Content |
|---|---|---|
| Home | `index.html` | 首屏简介、按钮和统计数字占位 |
| Work | `work.html` | 四个虚构项目卡片 |
| Skills | `skills.html` | 能力分类和工具标签占位 |
| About | `about.html` | 简介、教育、研究、奖项和联系方式占位 |

## Content Editing

主要文案集中在 `assets/js/i18n.js`。页面 HTML 中也保留了同样的 fallback 文案，用于 JavaScript 加载前显示。

如果要继续保护隐私，建议只填写公开安全版本：

- 使用通用称谓，例如“示例公司 A”“某消费电子团队”
- 使用模糊时间，例如“20XX.01 - 20XX.06”
- 避免具体项目代号、论文题名、导师姓名、奖项名称和联系方式
- 简历 PDF、头像和项目图片不要上传可识别个人身份的版本，除非确认可以公开

## Structure

```text
.
├── index.html
├── work.html
├── skills.html
├── about.html
├── README.md
└── assets/
    ├── css/style.css
    └── js/
        ├── i18n.js
        └── main.js
```

## Notes

这个模板没有外部依赖。直接打开 `index.html` 即可预览，部署到 GitHub Pages 也不需要构建步骤。
