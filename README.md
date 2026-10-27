# 英语练习台 · English Practice Hub

个人英语口语练习网站：每日题包、错题本（错误频率/毕业状态）、场景笔记库、必背句、打卡热力图。

## 结构

- `index.html` — 单文件应用（无依赖，双击即可本地打开）
- `data.js` — 数据文件（题包 / 错题本 / 笔记 / 必背句），与 Claude 练习后同步更新

## 更新流程

1. 与 Claude 完成当日练习
2. Claude 更新 `data.js`（同时更新 `index.html` 中 `data.js?v=` 的版本号）
3. 推送到 main 分支，GitHub Pages 自动部署，手机刷新即最新

## 本地使用

直接双击 `index.html`，或：

```bash
cd site && python3 -m http.server 8000
```

打卡/自评/必背勾选数据存在浏览器 localStorage，换设备不互通。
