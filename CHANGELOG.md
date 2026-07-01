# CHANGELOG

本文件记录项目的重大决策与架构变更，append-only。

---

## 2026-07-01

### 首页架构：教育内容必须服务端渲染

- **决策**：将 `app/[locale]/page.tsx` 改为 Server Component，教育内容直接服务端渲染；仅计算器交互部分保留在 `components/calculator/CalculatorClient.tsx` 客户端渲染。
- **原因**：Google 此前将客户端 bailout 的教育内容视为薄内容（thin content），影响索引质量。
- **风险**：计算器区域仍为客户端组件，但不影响 SEO。

### Schema 清理：移除废弃 HowTo

- **决策**：删除 `lib/schema/` 中已废弃的 HowTo schema，仅保留 WebApplication、FAQPage、BreadcrumbList。
- **原因**：HowTo schema 与当前计算器页面不匹配，存在被 Google 判定为误导性 structured data 的风险。

### Sitemap 与索引策略

- **决策**：sitemap 移除裸域名条目，仅保留带 locale 路径的 URL；`privacy/` 与 `terms/` 页面设置 `robots: { index: false, follow: true }`。
- **原因**：避免浪费索引配额，集中权重到首页及各语言版本。

### 多语言表述合规

- **决策**：删除所有 9 种语言翻译中"世界第一"等绝对化、无法验证的营销表述。
- **原因**：降低 AdSense 与监管合规风险，避免夸大宣传。

### OG 图片

- **决策**：新增 Open Graph 图片，覆盖首页分享预览。
- **原因**：提升社交媒体分享点击率与品牌一致性。

### Microsoft Clarity 更新与输入屏蔽

- **决策**：将 Microsoft Clarity 跟踪代码替换为新 project ID，并在初始化配置中显式启用 `maskAllText: true` 与 `maskAllInputs: true`。
- **原因**：避免会话录制意外捕获用户在计算器中输入的财务数字，满足隐私政策承诺并降低合规风险。
- **配套**：同步更新 9 语言隐私政策，在 Clarity 小节增加"屏蔽所有文本和表单输入"的说明。

### 项目级 AI 文档

- **决策**：创建项目级 `CLAUDE.md`，并建立 `AGENTS.md`（Codex CLI）与 `GEMINI.md`（Gemini CLI）软链，三端共用一份文档。
- **原因**：统一多 AI 工具对项目架构、提交规范、开发命令的理解，降低上下文失忆成本。

---
