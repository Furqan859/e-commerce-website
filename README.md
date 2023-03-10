# final-project

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Click to check website

See [Website Link](https://e-commerce-website-dfmr-1hj4lqwy8-furqan859.vercel.app/).

### Fake API's Given from Company

See [APIS's](https://dummyjson.com/)

### Introduction

<p>The Purpose of this document is to define the features of the E-Commerce website.
Here Visitors can see the publicly available features such as browse products , view details of products like price etc, and view other static contents of site. Register User can see all the publicly features and in additions to this they can purchase the products by adding them to shopping cart.</p>
<p>Types of Users og the Website are:</p>
 <ul>
 <li>Visitors</li>
 <li> Customers(Registered Member)</li>
 <li>Admin(own website)</li>
 </ul>

### Price

 <p>
 A fixed price on engagement for the development E-commerce website Based on the provided API's
 <h3>Cost Estimated</h3>
 <p>Delivery Charges 50$ add on every order</p>
 <p>price per product and quantity include and subtract the discount are available on product
 </p>
 </p>

### The Scenario

 <p>A Small Grocery Store, for online business to supply a community with products.</p>
 <p>The Security and safety of system and customer's information should be highly prioritized. Every Customer mush be register on our online grocery store before they purchase any product. The customer can pay cash on CoD(Cash on Delivery) methods</p>

### User interface

 <h4>Home Page</h4>
 <p>Show carousel on home page after carousel show all products</p>
 <h4>Header</h4>
 <p>Header with logo,menu,home,about,contact and if logged in show login and logout options</p>
 <h4>About Us</h4>
 <p>This page contains information about website some images include</p>
 <h4>Contact Us</h4>
 <p>user can Contact on help-line</p>
 <h4>Cart Icon</h4>
 <p>In Cart Icon your selected products and show number how many products are selected</p>
 <h4>LoggedIn and Logout Button</h4>
 <p>if user is login show logout if not show the logout button</p>
 <h4>SideBar</h4>
 <p>In Side Bar user profile image</p>
 <p>Home,About,Contact</p>
 <p>And Select Categories Option</p>
 <h4>Search Product</h4>
 <p>Filter product through search</p>
 <p>Select Brand</p>
 <p>Item Prise</p>
 <h4>Delivery</h4>
 <p>Customer Name</p>
 <p>Customer Complete Address</p>
 <p>Customer Cell Number</p>
 <h4>Pagination</h4>
 <p>Select page</p>
 <h4>Footer</h4>
 <p>In footer some dummy data</p>

 <p>All the UI design make in vuetify and use vue to make dynamic and for page change use vue-router and data will come from API's link giver from start</p>

 <p>An online representation of the products that are sold in the physical store</p>
 <p>There are many categories(e.g;Phones,laptops,cloths,makeup and jewelry etc.) and every product of each categories which online shoppers can browse. Details are provided for each product(ie;name,image,description and price)</p>

### Shopping Cart Functionally

 <h5>Shopping Cart Functionally, which includes the ability to:</h5>
 <p>Add Items to the shopping cart</p>
 <p>Remove Items from the shopping cart</p>
 <p>Place a conform order and give a detail address</p>

### Scope of the Project

  <p>The objectives of this project proposal is to define the object scope and E-commerce Website and to provide the Estimation. The advantage would be simple user interface that is easy to understand by all of users.</p>

  <h5>Scope</h5>
  <p>The scoped of the documentation after the project is build</p>
  <h5>Design Goals</h5>
  <p>View Home Page & slider show images </p>
  <p>Browse Products</p>
  <p>View Products Detail page</p>
  <p>Became a member through Registration process</p>
  <p>View Static Pages</p>

  <h4>Register a Member Panel</h4>
  <p>Login to site</p>
  <p>Manage Details</p>
  <p>My Profile</p>
  <p>Buy Products(CheckOut)</p>
  <p>LogOut</p>

### High Level Requirements

  <h4>System Block Diagram</h4>

  <h4>If User Is Not Logged In</h4>

  <image src="./src/assets/documentation-images/notLoggedIn.png" alt="not-loggedIn"/>

 <h4>If User Is Logged In</h4>

  <image src="./src/assets/documentation-images/loggedIn.png" alt="not-loggedIn"/>

  <h4>User Registration Requirements</h4>

  <p>Build a Value Around Registration</p>
  <p>Before user logged In explain the reason for logged In </p>

  <h4>Eliminate as many Fields as possible.</h4>
  <p>Only get data from user which are most important and remove or make all other field as "Options" which are not necessary about user</p>

  <h4>User Login Information</h4>

  <p>This is necessary for every user to login into their accounts before they more to purchase any product from our website.We want a user email and password in login form for the users</p>

### Some Functionality added in website

  <ul>
  <li>use Vue-router to redirect pages</li>
  <li>Filter Product and select</li>
  <li>Search Product</li>
  <li>Cart-icon with length of cart</li>
  <li>Click on Add to Cart the product add in cart</li>
  <li>Count number of products add in cart</li>
  <li>On duplicate products stop on if id is available then skip. You can add quantity in cart page</li>
  <li>In detail Page if you can open a detail page click on card image on every card image has detail page link</li>
  <li>In detail page send params dynamic product id </li>
  <li>You can add product till the stock is available if the quantity is equal to the stock the increment button style is none</li> 
  <p>Every product price and selected quantity are multiply and get a total product price and add discount on total price then add delivery charges and get a Grand Total </p>

  </ul>

  <h3>Home Page</h3>
  <p>In Home Page all products Show</p>
  <img src="./src/assets/website-Images/website.PNG"/>
  <h3>About Page</h3>
  <p>You check about website</p>
  <img src="./src/assets/website-Images/about.PNG"/>
  <h3>Contact Page</h3>
  <p>You can contact the website dealer</p>
    <img src="./src/assets/website-Images/contact.PNG"/>
  <h3>User Profile Page</h3>
  <p>you can check the user profile</p>
  <img src="./src/assets/website-Images/userProfile.PNG"/>
  <h3>Cart Page</h3>
  <p>In cart page show selected products and price</p>
  <img src="./src/assets/website-Images/cartPage.PNG"/>
  <h3>Detail Page</h3>
  <p>Product detail</p>
  <img src="./src/assets/website-Images/detailPage.PNG"/>
  <h3>Login Page</h3>
  <p>User login Page</p>
  <img src="./src/assets/website-Images/login.PNG"/>
  <h3>CheckOut Page</h3>
  <p>User can checkout the products which is selected</p>
<img src="./src/assets/website-Images/checkoutPage.PNG"/>
<h3>SideBar</h3>
<p>In side bar home menu and filter categories</p>
<img src="./src/assets/website-Images/sidebar.PNG"/>
<h3>Filter Categories</h3>
<p>In Filter Categories open a modal you can select product you want</p>
<img src="./src/assets/website-Images/filter.png"/>
<h3>Search Product</h3>
<p>You can search any product here by name</p>
<img src="./src/assets/website-Images/search.PNG"/>
<h3>Pagination</h3>
<p>you can select the page after the end of the page</p>
<img src="./src/assets/website-Images/pagination.png"/>
<h3>footer</h3>
<p>static data</p>
<img src="./src/assets/website-Images/footer.png"/>


