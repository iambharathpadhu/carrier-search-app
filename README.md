# Carrier Search App for Freight Brokers

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

## Usage

Select criteria for filtering carriers.
Browse through the list of carriers displayed.
Click on a carrier to view details and select it for booking.

## Packages
URL State: I opted for URL state to ensure that user data remains intact even after a page refresh, enhancing the user experience by providing continuity and reducing frustration caused by lost data.

Vite: My choice of Vite as the bundling tool was driven by its utilization of Rollup for production builds and its remarkable speed, which significantly contributes to faster development cycles and quicker feedback loops.

Chakra UI: I decided to leverage Chakra UI for its extensive collection of accessible and highly customizable UI components. Its simplicity and flexibility empowered me to create visually stunning interfaces effortlessly, saving valuable development time.

Framer Motion: Incorporating Framer Motion into the project allowed me to infuse subtle yet impactful animations, such as exit and entry animations. These animations play a crucial role in enhancing the overall user experience, making interactions more engaging and delightful.