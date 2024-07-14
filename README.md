# Reusable Product Filter Component

This project is a reusable React component that allows users to filter a list of products based on various criteria such as category, name, price range, and brand. The component dynamically updates the displayed products based on the selected filters.

## Features

- **Data Fetching**: Retrieves product data from a JSON file using JavaScript's fetch API.
- **Filter Options**: Provides filters for category, price range, and brand.
- **Product Display**: Shows filtered products in a grid layout with name and price. Optionally displays product images and other details.
- **Dynamic Filtering**: Updates the product list in real-time as filters are selected or changed.
- **Clear Filters**: Includes a button to reset filters and show all products.
- **Sorting Options**: Allows sorting of the product list by price and alphabetically.
- **Custom Hooks**: Utilizes custom hooks `useFilter` and `useSort` for managing filter and sort logic.
- **State Management**: Uses Redux and Redux Toolkit for state management.

## Project Structure

src/
├── components/
│ ├── filter/
│ │ ├── FilterActions.jsx
│ │ ├── FilterFields.jsx
│ │ ├── FiltersModal.jsx
│ │ └── SortMenu.jsx
│ ├── products/
│ │ ├── ProductCard.jsx
│ │ └── ProductList.jsx
├── resource-states/
│ ├── ErrorPage.jsx
│ ├── Loading.jsx
│ └── NotFound.jsx
├── hooks/
│ ├── useFilter.jsx
│ └── useSort.jsx
├── lib/
│ └── rtk/
│ └── slices/
│ └── productsSlice.js
├── store.js
├── App.jsx
├── App.css
├── index.css
├── index.js
└── ...

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Prerequisites

- Node.js
- npm or yarn

