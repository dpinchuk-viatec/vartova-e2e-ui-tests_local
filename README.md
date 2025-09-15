# vartova-e2e-ui-tests_local

This repository contains end-to-end (E2E) UI tests for *Vartova*, written using **Playwright** + **TypeScript**.

---

## 🧰 Tech Stack

- **Playwright** — for browser automation and UI testing across Chromium, Firefox, and WebKit.  
- **TypeScript** — adds strong typing, better code quality, and maintainability.  
- Folder structure includes:
  - `tests/` — test files  
  - `pages/` — page object models  
  - `fixtures/`, `utils/`, `data/`, etc. — helper utilities  

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+ recommended)  
- npm or yarn  
- Access to the Vartova dev environment (URL, credentials, etc.)  

### Install dependencies

```bash
git clone https://github.com/dpinchuk/vartova-e2e-ui-tests_local.git
cd vartova-e2e-ui-tests_local
npm install
npx playwright install
