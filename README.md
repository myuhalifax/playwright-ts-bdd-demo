[![CI](https://github.com/myuhalifax/playwright-ts-bdd-demo/actions/workflows/ci.yml/badge.svg)](https://github.com/myuhalifax/playwright-ts-bdd-demo/actions/workflows/ci.yml)

# Playwright + TypeScript + Cucumber Demo

A minimal, runnable demo of the modern web test-automation stack:

- **Playwright** — multi-browser automation with built-in auto-waiting (no more `sleep`)
- **TypeScript** — typed step definitions and page objects
- **Cucumber (BDD)** — business-readable `Given / When / Then` scenarios in `features/`
- **Page Object Model** — all selectors and page interactions live in `src/pages/`
- **GitHub Actions** — every push runs the full suite headless in CI

## Project layout

```
features/
  login.feature          # Gherkin scenarios
src/
  pages/
    login.page.ts        # Page Object: selectors + actions + assertions
  steps/
    login.steps.ts       # Step definitions (thin: delegate to page objects)
  support/
    world.ts             # CustomWorld: browser/page/page-object lifecycle
    hooks.ts             # Before/After hooks
```

## Run it

```bash
npm install
npx playwright install chromium
npm test
```

To watch the browser locally:

```bash
HEADLESS=false npm test
```

## Why this exists

Reference implementation of the Playwright + TypeScript + BDD stack from my professional QA work — Gherkin features for readability, Page Objects for maintainability, CI for confidence.
