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

5. **To run the tests:**
   ```sh
   npm run test
   

## Architecture

I chose to go with `react` as the framework of choice. The react code base has been scaffolded with vite and npm using:

```
npm create vite@latest
```

I chose to split the screen into various components as follows:

<img width="1405" alt="Carrier Components" src="https://github.com/iambharathpadhu/carrier-search-app/blob/main/src/assets/componentStructure.png">

The folder structure looks like this:

<img width="1405" alt="Carrier Folders" src="https://github.com/iambharathpadhu/carrier-search-app/blob/main/src/assets/folderStructure.png">


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

- I ran performance analysis using [lighthouse].
<img width="1405" alt="Performance" src="https://github.com/iambharathpadhu/carrier-search-app/blob/main/src/assets/pagespeed.png">

**Deployments**

I used [Vercel](https://vercel.com/dashboard) for deployment needs.
The app has been hosted at https://carrier-search-app.vercel.app/
