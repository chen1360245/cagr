# 智能 CAGR 计算器

[English](README.md) | [简体中文](README.zh-CN.md)

一个免费、多语言的复合年增长率计算器。输入以下任意三个数值，即可自动计算第四个数值：

- 初始值
- 最终值
- 时间周期
- CAGR

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)

## 在线产品

- 网站：[cagrcalculator.app](https://cagrcalculator.app/)
- Chrome 插件：[Smart CAGR Calculator - Chrome Web Store](https://chromewebstore.google.com/detail/smart-cagr-calculator/cpbbkfbjhcaompikhekjjfopcecomkao)
- 插件源码：[chen1360245/chrome-cagr](https://github.com/chen1360245/chrome-cagr)

## 功能特性

- 计算 CAGR、最终值、初始值或时间周期
- 自动判断需要计算的参数
- 使用图表和表格展示逐年增长过程
- 与常见市场基准比较
- 分享计算结果
- 提供公式说明、案例和常见问题
- 支持英语、简体中文、西班牙语、德语、日语、阿拉伯语、法语、巴西葡萄牙语和韩语
- 提供多语言隐私政策与服务条款页面

## 快速开始

### 环境要求

- Node.js 18+
- npm 或 pnpm

### 安装

```bash
git clone https://github.com/chen1360245/cagr.git
cd cagr
pnpm install
```

### 可选环境变量

如需在部署环境中启用分析功能，请创建 `.env.local`：

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 本地运行

```bash
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000)。

## 验证命令

```bash
npm test
npx tsc --noEmit
pnpm lint
pnpm build
```

## 项目结构

```text
app/          Next.js 路由、多语言页面和法律页面
components/   计算器、图表、教育内容和 UI 组件
hooks/        计算器相关 React Hooks
i18n/         国际化配置
lib/          计算引擎、Schema、分析和工具函数
messages/     多语言界面文案
public/       静态资源
```

更多调研资料和维护文档见 [`docs/README.md`](docs/README.md)。

## 公式参考

```text
CAGR = (FV / PV)^(1 / n) - 1
FV   = PV * (1 + r)^n
PV   = FV / (1 + r)^n
n    = log(FV / PV) / log(1 + r)
```

## 免责声明

本项目仅用于教育和信息参考。计算结果是基于用户输入数据的估算值，不保证准确或完整，
也不应作为财务或投资决策依据。

## 参与贡献

欢迎提交 Issue 和 Pull Request。如需反馈问题或建议功能，请创建
[GitHub Issue](https://github.com/chen1360245/cagr/issues)。

提交 Pull Request 前，请运行：

```bash
npm test
npx tsc --noEmit
pnpm lint
pnpm build
```

## 许可证

本项目采用 [MIT License](LICENSE)。
