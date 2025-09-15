# 📘 Setup and Project Structure --- `vartova-e2e-ui-tests_local`

This repository contains end-to-end (E2E) UI tests for **Vartova**,
written with **Playwright** + **TypeScript**.

This guide covers:\
- Installation and environment setup\
- Project structure and folder responsibilities\
- Project artifacts: fixtures, pages, utilities, constants, results,
reports

------------------------------------------------------------------------

## ⚙️ 1. Installation & Environment Setup

### 1.1. Prerequisites

-   **Node.js** v16+\
-   **npm** or **yarn**\
-   Access to Vartova dev environment (URL, credentials, configs)

### 1.2. Clone and install dependencies

``` bash
git clone https://github.com/dpinchuk/vartova-e2e-ui-tests_local.git
cd vartova-e2e-ui-tests_local
npm install
```

### 1.3. Install Playwright browsers

``` bash
npx playwright install
```

### 1.4. Run tests

``` bash
npx playwright test
```

### 1.5. Run in UI/debug mode

``` bash
npx playwright test --ui
```

------------------------------------------------------------------------

## 📂 2. Project Structure

    vartova-e2e-ui-tests_local/
    │
    ├── fixtures/       # Shared fixtures (setup, auth, configs)
    ├── pages/          # Page Object Models
    ├── tests/          # E2E test scenarios
    ├── utils/          # Utility functions & helpers
    ├── data/           # Test data (JSON/TS)
    ├── constants/      # Constants (URLs, selectors, roles, statuses)
    ├── tools/          # CLI scripts & generators
    ├── results/        # Execution results (logs, videos, JSON)
    ├── reports/        # Test reports (HTML, Allure, JUnit)
    ├── playwright.config.ts  # Playwright configuration
    ├── tsconfig.json   # TypeScript config
    └── package.json    # Dependencies & npm scripts

------------------------------------------------------------------------

## 🧩 3. Project Artifacts

### 3.1. **Fixtures (`fixtures/`)**

-   Setup tasks before tests\
-   Authentication (login/logout)\
-   Test data initialization\
-   Shared hooks (e.g. `beforeEach`)

### 3.2. **Pages (`pages/`)**

Implements the **Page Object Model (POM)**:\
- Each page = dedicated class\
- Encapsulates locators & actions\
- Reusable methods for test scenarios

Example:

``` ts
class LoginPage {
  readonly page;
  constructor(page) { this.page = page; }
  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('#submit');
  }
}
```

### 3.3. **Tests (`tests/`)**

-   Contains E2E scenarios\
-   Uses `pages/` and `fixtures/`\
-   Typically grouped by feature/module (auth, dashboard, profile)

### 3.4. **Utils (`utils/`)**

-   Parsers, data generators, randomizers\
-   Helpers for logging, formatting, API requests

### 3.5. **Data & Constants (`data/`, `constants/`)**

-   `data/` --- test input data (JSON, mock files)\
-   `constants/` --- URLs, roles, selectors, statuses

### 3.6. **Tools (`tools/`)**

-   CLI scripts\
-   Data generators\
-   Format converters

### 3.7. **Results (`results/`)**

-   Logs of executions\
-   Screenshots and videos for failed tests\
-   JSON reports (useful for CI pipelines)

### 3.8. **Reports (`reports/`)**

-   HTML reports (built-in Playwright)\
-   Allure reports (if configured)\
-   JUnit/XML for CI integrations

Example with Allure:

``` bash
npx playwright test --reporter=line,allure-playwright
allure generate ./allure-results --clean -o ./allure-report
allure open ./allure-report
```

------------------------------------------------------------------------

## 🚦 4. CI/CD Integration

-   Supports GitHub Actions, GitLab CI, or Jenkins\
-   Generates reports on every pipeline run\
-   Stores test artifacts (screenshots, videos) for debugging failures

------------------------------------------------------------------------

## ✅ 5. Conclusion

The project follows **best practices** for test automation:\
- **POM** for maintainability\
- **Fixtures & utils** for reusability\
- **Data & constants separation**\
- **Results & reports** for analysis
