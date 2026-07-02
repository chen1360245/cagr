# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

`AGENTS.md`（Codex CLI）和 `GEMINI.md`（Gemini CLI）是本文件的软链，三端共用一份。

---

## 项目概述

Smart CAGR Calculator（[cagrcalculator.app](https://cagrcalculator.app/)）——一个免费的多语言在线复合年增长率计算器，也有 Chrome 扩展。当前阶段以 SEO 优化和 AdSense 合规为核心目标。

技术栈：Next.js 14 App Router + TypeScript + Tailwind CSS + next-intl + Recharts + Zustand + Vitest。

---

## 常用命令

```bash
pnpm dev              # 开发服务器 http://localhost:3000
pnpm build            # 生产构建（提交前必须通过）
pnpm lint             # ESLint
pnpm test             # 运行所有 Vitest 测试
pnpm test:watch       # 监听模式运行测试
pnpm test:coverage    # 测试覆盖率
npx tsc --noEmit      # TypeScript 类型检查
```

---

## 架构约定

### 目录结构

```
app/                  # Next.js 路由
  [locale]/           # 多语言路由
    page.tsx          # 首页（Server Component，渲染教育内容 + CalculatorClient）
    layout.tsx        # 根布局（metadata、schema、analytics）
    privacy/          # 隐私政策（noindex）
    terms/            # 服务条款（noindex）
  robots.ts
  sitemap.ts
components/
  calculator/         # 计算器交互组件
  educational/        # 教育内容组件
  ui/                 # 基础 UI 组件
hooks/                # React hooks（useSmartCalculator 等）
lib/
  calculator/         # 计算引擎 + 测试
  schema/             # Schema.org JSON-LD
  utils/              # 工具函数
messages/             # next-intl 翻译文件（9 种语言）
public/               # 静态资源
```

### 关键设计

- **首页 SSR**：`app/[locale]/page.tsx` 是 Server Component，教育内容直接服务端渲染；只有计算器交互部分在 `components/calculator/CalculatorClient.tsx` 这个 Client Component 里。
- **多语言**：`next-intl` 管理，locale 列表在 `i18n/config.ts`，翻译在 `messages/*.json`。
- **Schema**：`lib/schema/` 生成 WebApplication、FAQPage、BreadcrumbList JSON-LD，已移除废弃的 HowTo schema。
- **Legal 页面**：`privacy/` 和 `terms/` 已设置 `robots: { index: false, follow: true }`，不占用索引配额。
- **环境变量**：`NEXT_PUBLIC_GA_MEASUREMENT_ID` 用于 Google Analytics 4（可选）。

---

## 开发规范

- 遵循全局 `~/.claude/CLAUDE.md` 中的「代码设计原则」和「AI 编程心法约束」。
- 提交前必须 `pnpm build` 通过。
- 直接推 `main`，commit 后立即 `git push origin main`。
- 文件名 / 变量名 / commit 用英文；回复和注释用中文。

---

## Session 日志 & 工作日报

### 日志三层结构

| 层 | 位置 | 内容 | AI 默认加载？ |
|---|---|---|---|
| 工作日报 | `logs/YYYY-MM-DD.md` | 每天写三件事：做了什么 / 卡在哪 / 明天第一件事 | ❌ |
| 权威变更历史 | `CHANGELOG.md` | 重大决策 / 架构变更的完整记录，append-only | ❌ |
| AI 工作记忆 | 下方滚动表 | 最近 ~12 行浓缩摘要，每次 session 自动加载 | ✅ |

### 写入规则

- **每次 session 结束填一行**（5 分钟）。
- **有架构/重大决策时**：先 append 完整条目到 `CHANGELOG.md`，再在下表加一行浓缩摘要。
- **本表满 ~12 行**时删除最旧行，删前确认该行决策已进 `CHANGELOG.md` 或已折叠进本文件正文。

| 日期 | 做了什么 | 关键决策 | 卡在哪/风险 | 下一步 |
|---|---|---|---|---|
| 2026-07-02 | 完成全站关键词审计并执行 P0/P1/P2：修复截断、长尾 H2、FAQ 扩至 15 题、新增 Excel/投资两个教育区块、OG/Twitter 标题独立、sitemap 补 x-default；privacy-extension 加 noindex；配置 www→non-www 308 重定向 | P0 优先修截断；P1/P2 聚焦长尾词覆盖与内容深度；低价值项（meta keywords 扩展、schema name 缩短）剔除 | 9 语种新内容翻译质量依赖风格模仿；需观察 GSC 反馈 | 监控 GSC CTR/排名 2-4 周；重新提交 sitemap |
| 2026-07-01 | 重构首页 SSR；删 HowTo schema；修复 sitemap；删除"世界第一"表述；补 OG 图；更新 Clarity 代码并加 masking；更新 9 语言隐私政策；创建 CLAUDE.md + AGENTS/GEMINI 软链 | 教育内容必须服务端渲染；Clarity 必须显式配置输入屏蔽 | 计算器区域仍客户端 bailout（不影响 SEO） | 观察 GSC 索引变化，2 周后决定是否加 About/blog |

---

## 近期变更（AI 工作记忆 · 防失忆）

> 硬上限：~6 条。完整历史在 `CHANGELOG.md`（append-only，不默认加载）。

- **2026-07-02** 完成全站 9 语种关键词审计并执行 P0/P1/P2：修复 title/description 截断、H2 长尾化、FAQ 扩至 15 题、新增 CAGR in Excel / Investments 区块、OG/Twitter 标题独立、sitemap 补 x-default；privacy-extension 加 noindex；配置 www→non-www 308 重定向 → `CHANGELOG.md`
- **2026-07-01** 更新 Microsoft Clarity 跟踪代码为新 project ID，补回 `maskAllText` / `maskAllInputs`，并更新 9 语言隐私政策 → `CHANGELOG.md`
- **2026-07-01** 创建项目 `CLAUDE.md`，并添加 `AGENTS.md` / `GEMINI.md` 软链 → `CHANGELOG.md`
- **2026-07-01** 首页改为 Server Component，教育内容 SSR；移除废弃 HowTo schema；sitemap 移除裸域名；法律页加 noindex；删除多语言"世界第一"表述；新增 OG 图片 → `CHANGELOG.md`
