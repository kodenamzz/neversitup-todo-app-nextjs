This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Neversitup Todo app Nextjs Project

A Next.js Todo App for efficient task management with seamless adding, editing, and deleting of tasks.

## Project Structure

├── app
│   ├── login
│   │   └── page.tsx
│   ├── register
│   │   └── page.tsx
│   ├── table
│   │   └── page.tsx
│   ├── todo
│   |   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── page.tsx
│   └── layout.tsx
├── components
│   ├── cards
│   │   ├── TodoCard.tsx
│   │   └── TodoCardShow.tsx
│   ├── forms
│   │   ├── CreateTodo.tsx
│   │   ├── EditTodo.tsx
│   │   └── UserAuthForm.tsx
│   ├── shared
│   │   ├── ConfirmDialog.tsx
│   │   ├── Metric.tsx
│   │   └── NoResult.tsx
│   └── ui
│       ├── alert-dialog.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── sonner.tsx
│       └── table.tsx
├── context
│   └── ShowTodoProvider.tsx
├── lib
│   ├── actions
│   │   ├── auth.action.ts
│   │   ├── get-token.ts
│   │   └── todo.action.ts
│   └── utils.ts
├── public
│   ├── light-illustration.png
│   ├── next.svg
│   └── vercel.svg
├── types
|   └── index.d.ts
├── .env.example
├── .eslintrc.json
├── .gitignore
├── components.json
├── middleware.ts
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json



## Getting Started

1. Clone the repository:

```bash
   $ git clone https://github.com/kodenamzz/neversitup-todo-app-nextj.git
   cd neversitup-todo-app-nextjs
```

2. Install dependencies:

```bash
$ npm install
```

3. set up .env.local (copy from .env.example)
```bash
API_ENDPOINT= //neversitup api endpoint
```

4. run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
