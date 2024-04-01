# Carrier Search App for Freight Brokers

## 💡 Outline

This project aims to provide a solution for freight brokers to select criteria for the best potential carrier and to select and book them for their transportation requirements. It includes a multi-step wizard that guides the user with a cool user experience, allowing users to filter carriers based on criteria and select the best potential match based on their requirements.

## Features

- Multi-step wizard for selecting criteria and carriers
- Filter carriers based on criteria such as rating, price range, special requirements, and on-time delivery percentage
- Cool user experience with animations and smooth transitions
- Utilizes URL state for preserving values even after refresh
- Built with Vite for fast bundling using Rollup, React Router Dom for navigation, Chakra UI for UI components, and Framer Motion for animations

## Getting Started

To run the project locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/iambharathpadhu/carrier-search-app.git

2. **Navigate to the repository:**
   ```sh
   cd carrier-search-app

3. **Install dependencies:**
   ```sh
   npm install

4. **Run the development server:**
   ```sh
   npm run dev
   

## Architecture

I chose to go with `react` as the framework of choice. The react code base has been scaffolded with vite and pnpm using:

```
npm create vite@latest
```

The app will have a single page with `/queries` route with `queryId` as an optional parameter.

I chose to split the screen into various components as follows:

<img width="1405" alt="Carrier Components" src="https://github.com/rootsrk/atlan-take-home-assignment/assets/98030411/a07354c5-dd08-4862-b6ba-80fce906e548">

The folder structure looks like this:

<img width="238" alt="Screenshot 2023-09-25 at 7 29 49 PM" src="https://github.com/rootsrk/atlan-take-home-assignment/assets/98030411/fea47758-2475-4541-a736-b3538b676146">


```
💡 All data is mocked on the front end. This app has no network layer.
```

In addition to the libraries already installed with the scaffolded app, here are some libraries that are being used:
| Library name                                  | Usage                                                                                   |
| -------------------------------------------- | --------------------------------------------------------------------------------------- |
| [Chakra UI](https://chakra-ui.com/)       | An open-source component library optimized for fast development, easy maintenance, and accessibility. Just import and go—no configuration required. |
| [Framer Motion](https://www.framer.com/motion/)                                               | For all animation needs                                                                 |
| [react-router-dom](https://www.npmjs.com/package/react-router-dom)                           | React Router enables client-side routing for the React app. We use the hooks from this package to navigate and locate the routing state of the application. |
| [react-hook-form](https://react-hook-form.com/)                           | For using form validation and submission of form.|
| [react-confetti](https://ulitcos.github.io/react-canvas-confetti/)                           | For rendering confetti on successfully booking the carrier|
| [playwright](https://playwright.dev/)                           | For writing e2e tests for the application|

**Optimisations and other UX notes**

- I ran performance analysis using [webpagetest](https://www.webpagetest.org/result/230925_BiDcMN_CN4/).
<img width="1440" alt="Screenshot 2023-09-25 at 9 47 57 PM" src="https://github.com/rootsrk/atlan-take-home-assignment/assets/98030411/83f51d1c-f25c-4e42-bf64-bd889b5c008e">

**Deployments**

I used [Vercel](https://vercel.com/dashboard) for deployment needs.
The app has been hosted at https://carrier-search-app.vercel.app/