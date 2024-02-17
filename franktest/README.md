# Description

This is frank's HarveyNorman code challenge project, please see the detail introdution for the project after run the project.

## Getting Started

First, run the development server:

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

# Project Structure

## Overview

<!-- DIRSTRUCTURE_START_MARKER -->
<pre>
online-store-tech-test/
├─ franktest/ ..................................... project folder
│  ├─ README.md ................................... project README.md file
│  ├─ next-env.d.ts ............................... env file
│  ├─ next.config.js .............................. next.js configration file for CommonJS
│  ├─ next.config.mjs ............................. next.js configration file for ECMAScript 
│  ├─ package-lock.json ........................... package version lock file
│  ├─ package.json ................................ package manage file
│  ├─ tsconfig.json ............................... typescript config file
│  ├─ public/ ..................................... static file folder
│  └─ src/ ........................................ project src folder
│     └─ app/ ..................................... project app folder
│        ├─ favicon.ico ........................... favicon
│        ├─ globals.css ........................... global css file
│        ├─ layout.module.scss .................... project root router style file
│        ├─ layout.tsx ............................ project root router layout
│        ├─ page.module.scss ...................... project root page style file
│        ├─ page.tsx .............................. project root page file
│        ├─ constant/ ............................. constant folder
│        │  └─ fonts.ts ........................... font manage file
│        ├─ lib/ .................................. this folder contain util function, api, schema
│        │  ├─ api/ ............................... all api requrest put in here
│        │  │  ├─ getCartInfor.ts ................. get cart information
│        │  │  ├─ getProductList.ts ............... get all product list
│        │  │  ├─ getSingleProduct.ts ............. get single product infomation
│        │  │  ├─ mainDomain.ts ................... domain for api fetch
│        │  │  └─ updateCart.ts ................... update cart
│        │  └─ schema/ ............................ schema folder
│        │     └─ checkoutSchema.ts ............... check out page form schema
│        ├─ product/ .............................. the product page folder
│        │  ├─ layout.tsx ......................... the product layout
│        │  ├─ page.module.scss ................... the product page style
│        │  ├─ page.tsx ........................... the product page
│        │  ├─ cart/ .............................. the cart page folder
│        │  │  ├─ page.module.scss ................ the cart page style
│        │  │  └─ page.tsx ........................ the cart page
│        │  ├─ checkout/ .......................... the checkout page folder
│        │  │  ├─ page.module.scss ................ the checkout page folder
│        │  │  └─ page.tsx ........................ the checkout page
│        │  └─ confirmation/ ...................... the confirmation page folder
│        │     ├─ page.module.scss ................ the confirmation page style
│        │     └─ page.tsx ........................ the confirmation page 
│        └─ ui/ ................................... this folder contain all component 
│           ├─ cartCard/ .......................... cart card component folder
│           │  ├─ cartCard.module.scss ............ cart card component style
│           │  ├─ cartCard.tsx .................... cart card component file
│           │  ├─ cartList.module.scss ............ cart card list style
│           │  └─ cartList.tsx .................... cart card list file
│           ├─ checkoutForm/ ...................... checkout form component
│           │  ├─ checkoutForm.module.scss ........ checkout form component style
│           │  └─ checkoutForm.tsx ................ checkout form component file
│           ├─ components/ ........................ resuable components
│           │  ├─ button/ ......................... button folder
│           │  │  ├─ button.module.scss ........... button sytle
│           │  │  └─ button.tsx ................... button file
│           │  ├─ input/ .......................... input folder
│           │  │  ├─ input.module.scss ............ input style
│           │  │  └─ input.tsx .................... input file
│           │  └─ rating/ ......................... rating folder
│           │     ├─ rating.module.scss ........... rating style
│           │     └─ rating.tsx ................... rating file
│           ├─ header/ ............................ header component folder
│           │  ├─ header.module.scss .............. header component style
│           │  └─ header.tsx ...................... header component file
│           ├─ productCard/ ....................... product card component
│           │  ├─ productCard.module.scss ......... product card component style
│           │  └─ productCard.tsx ................. product card component file
│           └─ projectIntro/ ...................... project introduction folder
│              ├─ projectIntro.module.scss ........ project introduction style
│              └─ projectIntro.tsx ................ project introduction file

</pre>
<!-- DIRSTRUCTURE_END_MARKER -->
