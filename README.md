# MERN AMAZON

# Lessons

1. introduction
2. Install tools
3. create react app
4. create Git repository

5. List Products

   1. create products array
   2. add products images
   3. render products
   4. style products

6. Add routing

   1. npm i react-router-dom
   2. create route for home screen
   3. create router for product screen

7. Create Node.js Server

   1. run npm init in root folder
   2. update package.json, set type: module
   3. add .js to imports
   4. npm install express
   5. create server.js
   6. add start command as node backend/server.js
   7. request express
   8. create route for / return backend is ready
   9. move product.js from frontend to backend
   10. create route for /api/products
   11. return products
   12. run npm start

8. Fetch products from backend

   1. set proxy in package.json
   2. npm install axios
   3. use state hook
   4. use effect hook
   5. use reducer hook

9. Manage state by reducer hook

   1. define reducer
   2. update fetch data
   3. get state from useReducer

10. Add bootsrap UI framework

    1. npm install react-bootsrap bootsrap
    2. update App.js

11. Create product and rating component

    1. create rating component
    2. create product component
    3. use rating component in product component

12. Create product detail screen
   1. fetch product from backend
   2. create 3 columns for image, info and action

13. Create loading and message component
   1. create loading component
   2. use spinner component
   3. create utils.js to define getError function

14. Implement add to cart item
   1. create react context
   2. define reducer
   3. create store provider
   4. implement add to cart button click handler

15. Complete add to cart
   1. check exist item in the cart
   2. check count in stock in backend

16. Create cart screen
   1. create 2 columns 
   2. display items list
   3. create action column

17. Complete cart screen (functionalities)
   1. click handler for inc/dec item
   2. click handler for remove item
   3. click handler for checkout