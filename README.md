# Discord Dominus

This is a Next.js project for a high-conversion sales page, built with Firebase Studio.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Deploy to Firebase

This project is configured for [Firebase App Hosting](https://firebase.google.com/docs/app-hosting).

To deploy your site, you will need the Firebase CLI. If you don't have it, install it with:

```bash
npm install -g firebase-tools
```

Then, from your project's root directory, deploy your application:

1.  **Login to Firebase:**
    ```bash
    firebase login
    ```

2.  **Initialize Firebase (if you haven't already):**
    If this is a new Firebase project, link it to your local directory.
    ```bash
    firebase init
    ```
    Select "App Hosting" and follow the prompts.

3.  **Deploy:**
    ```bash
    firebase deploy
    ```

This command will build your Next.js application and deploy it to Firebase App Hosting.
