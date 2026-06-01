# Smart CAGR Calculator

[English](README.md) | [简体中文](README.zh-CN.md)

A free, multilingual compound annual growth rate calculator. Enter any three
values and the calculator solves for the fourth:

- Initial value
- Final value
- Time period
- CAGR

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)

## Live Product

- Website: [cagrcalculator.app](https://cagrcalculator.app/)
- Chrome extension: [Smart CAGR Calculator on the Chrome Web Store](https://chromewebstore.google.com/detail/smart-cagr-calculator/cpbbkfbjhcaompikhekjjfopcecomkao)
- Extension source: [chen1360245/chrome-cagr](https://github.com/chen1360245/chrome-cagr)

## Features

- Solve for CAGR, final value, initial value, or time period
- Automatically detect which value should be calculated
- Visualize yearly growth with charts and tables
- Compare results with common market benchmarks
- Share calculation results
- Learn with formula explanations, examples, and FAQs
- Use the interface in English, Simplified Chinese, Spanish, German, Japanese,
  Arabic, French, Brazilian Portuguese, or Korean
- Browse localized privacy and terms pages

## Getting Started

### Requirements

- Node.js 18+
- npm or pnpm

### Install

```bash
git clone https://github.com/chen1360245/cagr.git
cd cagr
pnpm install
```

### Optional Environment Variables

Create `.env.local` if you want to enable analytics in a deployment:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Run Locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npx tsc --noEmit
pnpm lint
pnpm build
```

## Project Structure

```text
app/          Next.js routes, localized pages, and legal pages
components/   Calculator, charts, educational sections, and UI components
hooks/        React hooks for calculator behavior
i18n/         Internationalization configuration
lib/          Calculation engine, schemas, analytics, and utilities
messages/     Localized interface copy
public/       Static assets
```

Additional research and maintainer notes are indexed in
[`docs/README.md`](docs/README.md).

## Formula Reference

```text
CAGR = (FV / PV)^(1 / n) - 1
FV   = PV * (1 + r)^n
PV   = FV / (1 + r)^n
n    = log(FV / PV) / log(1 + r)
```

## Contributing

Issues and pull requests are welcome. For bug reports or feature ideas, open a
[GitHub issue](https://github.com/chen1360245/cagr/issues).

Before opening a pull request, run:

```bash
npx tsc --noEmit
pnpm lint
pnpm build
```

## License

This project is released under the [MIT License](LICENSE).
