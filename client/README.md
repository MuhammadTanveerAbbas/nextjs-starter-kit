# Ultimate Next.js Starter

A zero-to-production Next.js setup with industry-proven folder structure, essential libraries, and streamlined commands. Get up and running fast with animations, state management, SEO, data fetching, utilities, and more—no bloat, only what you need.

---

## 🚀 Features

- **Official Next.js** app scaffold
- **Folder Structure** optimized for scale and maintainability
- **Animation** with Framer Motion
- **Icons** via Lucide React
- **Global State** with Zustand
- **Headless UI** components
- **SEO & Sitemap** automation
- **Data Fetching** powered by SWR
- **Tailwind CSS** utilities for dynamic classes
- **No unnecessary dependencies**—just the essentials

---

## 📋 Prerequisites

- Node.js ≥ 18
- npm or Yarn
- Git (optional)

---

## ⚙️ Getting Started

```bash
# 1. Create the Next.js app
npx create-next-app@latest client

# 2. Move into your project
cd client

# 3. Install core libraries
npm install framer-motion lucide-react zustand @headlessui/react next-sitemap swr clsx tailwind-merge
# └─ or using Yarn:
# yarn add framer-motion lucide-react zustand @headlessui/react next-sitemap swr clsx tailwind-merge
```

---

## 📂 Folder Structure to setup after install

```
client/
├── public/
│   ├── assets/
│   │   ├── fonts/
│   │   └── images/
│   └── favicon.ico      ← delete default; add your own
├── src/
│   ├── app/
│   │   ├── head.tsx     ← metadata & SEO defaults
│   │   ├── layout.tsx   ← global layout & providers
│   │   ├── page.tsx     ← home page
│   │   └── globals.css  ← Tailwind base imports
│   ├── components/      ← UI components (Buttons, Modals…)
│   ├── hooks/           ← custom React hooks
│   ├── lib/             ← API clients, config, utilities
│   ├── styles/          ← global & component-level CSS/Tailwind
│   └── utils/           ← pure helper functions
├── next.config.js       ← Next.js configuration
├── tailwind.config.js   ← Tailwind CSS configuration
├── tsconfig.json        ← TypeScript settings
└── next-sitemap.js      ← sitemap generation config
```

---

## 📦 Library Overview & Installation

| Library                       | Purpose                                  | Install Command                   | Docs                                                                                                                                                       |
| ----------------------------- | ---------------------------------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Framer Motion**             | Animations & gestures                    | `npm install framer-motion`       | [https://www.framer.com/motion](https://www.framer.com/motion)                                                                                             |
| **Lucide React**              | Scalable, customizable SVG icons         | `npm install lucide-react`        | [https://lucide.dev](https://lucide.dev)                                                                                                                   |
| **Zustand**                   | Lightweight global state management      | `npm install zustand`             | [https://github.com/pmndrs/zustand](https://github.com/pmndrs/zustand)                                                                                     |
| **Headless UI**               | Unstyled, accessible UI components       | `npm install @headlessui/react`   | [https://headlessui.com](https://headlessui.com)                                                                                                           |
| **next-sitemap**              | Automatic sitemap & SEO optimizations    | `npm install next-sitemap`        | [https://github.com/iamvishnusankar/next-sitemap](https://github.com/iamvishnusankar/next-sitemap)                                                         |
| **SWR**                       | React Hooks for data fetching & caching  | `npm install swr`                 | [https://swr.vercel.app](https://swr.vercel.app)                                                                                                           |
| **clsx** + **tailwind-merge** | Conditional Tailwind class names & merge | `npm install clsx tailwind-merge` | [https://github.com/lukeed/clsx](https://github.com/lukeed/clsx)<br>[https://github.com/cssinjs/tailwind-merge](https://github.com/cssinjs/tailwind-merge) |

---

## 🔧 Configuration Snippets

### Tailwind CSS Setup

```bash
npx tailwindcss init -p
```

```js
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

### next-sitemap

```js
// next-sitemap.js
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com",
  generateRobotsTxt: true,
};
```

Add to `package.json`:

```json
"scripts": {
  "postbuild": "next-sitemap"
}
```

---

## 🎯 Usage Examples

- **Animate a component**

  ```tsx
  import { motion } from "framer-motion";

  export function FadeIn({ children }) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {children}
      </motion.div>
    );
  }
  ```

- **Global state with Zustand**

  ```ts
  import create from "zustand";

  interface AppState {
    count: number;
    increment: () => void;
  }

  export const useStore = create<AppState>((set) => ({
    count: 0,
    increment: () => set((s) => ({ count: s.count + 1 })),
  }));
  ```

- **Data fetching with SWR**

  ```ts
  import useSWR from "swr";

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  export function useUser(id: string) {
    return useSWR(`/api/users/${id}`, fetcher);
  }
  ```

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit changes: `git commit -m "feat: add my feature"`
4. Push branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📄 License

MIT © Muhammad Tanveer Abbas
