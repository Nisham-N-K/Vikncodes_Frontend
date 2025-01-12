# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


How It Works

1. App.jsx

The main App component manages the state of the products and passes data to the other components (ProductForm, StockManagement, and ProductList). It has the following key functions:

addProduct(product): Adds a new product to the products state.

updateProductStock(updatedProduct): Updates the stock level of an existing product.

deleteProduct(index): Deletes a product from the list by its index.

Here’s a brief breakdown of the flow:

ProductForm is used to add new products.

StockManagement is used to update the stock count of existing products.

ProductList displays the products and allows deletion.

2. ProductForm.jsx

This component allows users to enter details about a new product (like name, price, and stock count). When the form is submitted, it calls the addProduct function passed from App.jsx to add the product to the state.

3. StockManagement.jsx

This component is responsible for updating the stock of an existing product. It receives the products list and the updateProductStock function as props. Users can select a product, adjust the stock count, and submit the form to update the product.

4. ProductList.jsx

This component displays the list of products. Each product is displayed with its name, price, and stock count. It also provides a button to delete a product, which calls the deleteProduct function from App.jsx to remove the product from the list.

Responsiveness

The codebase is designed to be fully responsive. Key responsive features include:

Horizontal Scrolling: The product list table is scrollable on smaller screens to maintain readability and prevent layout distortion.

Flexible Table Layout: Ensures the table adapts to various screen sizes while maintaining proper alignment and spacing.

Consistent Spacing: Uniform padding and margins across components enhance visual consistency on all devices.

Usage

Adding a Product:

In the ProductForm, enter the product details (name, price, stock count).

Click "Add Product" to add the product to the product list.

Updating Product Stock:

In the StockManagement, select a product from the list.

Update the stock count.

Click "Update Stock" to update the product in the list.

Deleting a Product:

In the ProductList, click the "Delete" button next to the product you want to remove.

The product will be removed from the list.

Technologies Used

React: JavaScript library for building user interfaces.

Tailwind CSS: Utility-first CSS framework for styling the app.

JavaScript (ES6): Used for writing the logic of the application.