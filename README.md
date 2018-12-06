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

    CREATE TABLE "listings" (
        "id" serial primary key,
        "cost" integer,
        "sqft" integer, 
        "type" varchar(80), 
        "city" varchar(80),
        "image_path" varchar(120)
    );

### Author
    Isaac Overlander


