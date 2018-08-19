# Real Estate Listings
    An application to display realestate listings for properties that are available to rent or buy

## Built with
    PostgreSQL
    Express
    Angular.js
    Node.js

## SetUp
    clone project
    run npm install
    run npm start

## TODO
 - [x] Create a Full Stack application from the ground up using Angular, Node, Express, and SQL (SEAN stack).
    - [x] Home/Add Listing View/Route
        - [x] Create a client-side route, controller, and view file for the home page.
            - [x] home route
            - [x] home controller
            - [x] home view  
        - [x] Allow a user to add a property to the database on this view. You will need to give the user an option for either a Rental property or a Sale property.
        - [x] Allow the user to enter the name of one of the images provided to display with the new listing. This only needs to be a text input.
    - [x] Rental Property View/Route
        - [x] Create a client-side route, controller, and view file for Rental properties.
            - [x] rentals route
            - [x] rentals controller
            - [x] rentals view  
        - [x] Display only those properties that are For Rent.
        - [x] Display the listings in "card" elements, including the associated image. Images have been provided for you and assigned to each property.
        - [x] Ability to delete an existing listing. Place a delete button on each listing card.
    - [x] Sale Property View/Route
        - [x] Create a client-side route, controller, and view file for Sale properties.
            - [x] sales route
            - [x] sales controller
            - [x] sales view
        - [x] Display only those properties that are For Sale.
        - [x] Display the listings in "card" elements, including the associated image. Images have been provided for you and assigned to each property.
        - [x] Ability to delete an existing property. Place a delete button on each property card.
 - [x] Account for the different data properties ("rent" versus "sale") and ensure that they only show up on the correct views.
- [x] Implement a Card, a common user interface element.

## Strech Goals
 - [x] Create a dropdown/select so that the user doesn't need to type sale or rent for every new listing
 - [x] Create a dropdown/select so that the user doesn't need to type the image url for every new listing
 - [ ] Display the least expensive property featured prominently at the top of the view
 - [ ] Ability to search or filter by various parameters (try doing this using a server side route with a query parameter)
 - [ ] Add other images to your application

### Author
    Isaac Overlander
