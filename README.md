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
 - [ ] Create a Full Stack application from the ground up using Angular, Node, Express, and SQL (SEAN stack).
    - [ ] Home/Add Listing View/Route
        - [ ] Create a client-side route, controller, and view file for the home page.
            - [x] home route
            - [ ] home controller
            - [ ] home view  
        - [ ] Allow a user to add a property to the database on this view. You will need to give the user an option for either a Rental property or a Sale property.
        - [ ] Allow the user to enter the name of one of the images provided to display with the new listing. This only needs to be a text input.
    - [ ] Rental Property View/Route
        - [ ] Create a client-side route, controller, and view file for Rental properties.
        - [ ] Display only those properties that are For Rent.
        - [ ] Display the listings in "card" elements, including the associated image. Images have been provided for you and assigned to each property.
        - [ ] Ability to delete an existing listing. Place a delete button on each listing card.
    - [ ] Sale Property View/Route
        - [ ] Create a client-side route, controller, and view file for Sale properties.
        - [ ] Display only those properties that are For Sale.
        - [ ] Display the listings in "card" elements, including the associated image. Images have been provided for you and assigned to each property.
        - [ ] Ability to delete an existing property. Place a delete button on each property card.
 - [ ] Account for the different data properties ("rent" versus "sale") and ensure that they only show up on the correct views.
- [ ] Implement a Card, a common user interface element.

## Strech Goals
 - [ ] Create a dropdown/select so that the user doesn't need to type sale or rent for every new listing
 - [ ] Create a dropdown/select so that the user doesn't need to type the image url for every new listing
 - [ ] Display the least expensive property featured prominently at the top of the view
 - [ ] Ability to search or filter by various parameters (try doing this using a server side route with a query parameter)
 - [ ] Add other images to your application

### Author
    Isaac Overlander
