# 大学物理期中复习：第 9–11 章

面向马文蔚等《物理学》第七版下册的振动、波动、光学复习页。根据 26 份课件（448 页）的主题、文字及抽查公式页面整理，以出版社公开目录核对章序。没有取得教材全文，也没有老师的专门考纲；星级是复习建议，题目为自编训练。

- 22 个知识模块，模型、适用条件、公式、解题步骤与易错点。
- 12 道选择题、14 道计算题，全部有详细解析。
- 8 幅按公式或光路几何生成的 SVG 图。
- 公式使用 KaTeX 预排版，字体与样式本地托管，无第三方运行时依赖。
- 搜索、选择题判分、折叠解析、浏览器本地学习进度及打印样式。

站点：https://Mr-yangtuo.github.io/physics-midterm-review/

## 本地开发

需要 Node.js 22 或更新的兼容运行时。

```sh
npm ci
npm run build
npm run check
python -m http.server 8765 --directory docs
```

GitHub Pages 发布目录为 `codex/physics-review` 分支的 `/docs`。修改源内容后重新运行构建并提交 `docs` 输出。

内容源：`content.mjs`、`chapter10.mjs`、`chapter11.mjs`。
构建：`build.mjs`。模型图：`diagrams.mjs`。
课件文件名与页数元数据：`sources.json`，原始 PPT 未公开。

KaTeX 及其字体保留原许可证，见 `docs/vendor/KATEX-LICENSE.txt`。
