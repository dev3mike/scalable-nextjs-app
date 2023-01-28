
<div align="center"><strong>Next.js TypeScript Starter Template: Unbiased and Non-Opinionated</strong></div>
<div align="center">A Scalable and Developer-Friendly Foundation for Your Next Project</div>

## Features
- Next.js 13 + React 18
- TypeScript
- cross-env : To log server data in the browser while working in dev mode
- Prettier : Code formatting tool for ensuring consistency in style
- Husky : Script execution tool for use before committing
- ESLint : Locating and resolving issues in your code
- Commitlint : Ensuring adherence to conventions in commit messages
- Path Mapping : Using the `@` prefix to import components or other resources

## Scalable Architecture: The Concept of Decomposition
  Adhering to the concept of decomposition, in which the project is composed of independent features, packages, or components. To achieve this, we maintain a global **packages** folder in the root directory, where all standalone components are stored as separate packages.
  You can see one example component called **Footer**.

## Getting Started

To run the development server:

```bash
yarn dev
```

To format the code using Prettier:
```bash
yarn format
```

