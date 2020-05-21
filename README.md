# VRAD (Vacation Rentals Around Denver)

## Abstract 
VRAD (Vacation Rentals Around Denver) was a paired project (two people) given to us during the third quarter of our time at Turing School of Software & Design. VRAD is an online application where a user can log on and see different rental listings for vacation or business in different areas of Denver. The application begins with a login screen, where a user must enter in their name and email, and also their goal for using the application (vacation, business, or other). After logging in, the user is presented with a screen showing four different neighborhoods in Denver, along with a short description of each neighborhood. Once the user has selected an area, they will be able to see each of the available listings, showing the name of the property, a single photo, and an option to expand for further details. Upon expansion, the user can see all photos of the listing, the number of bedrooms and bathrooms, the address, the cost per night, unique features, and gives the user an option to "favorite" that listing. After favoriting a number of listings, the user is also able to see all of their favorite listings on one screen. The overall technical objectives of this project were to get better-acquainted with the principles of React (considering this was our second project utilizing React), implement robust testing of each component, construct routes for each page of the application, and utilize the Fetch API to retrieve the data from an external server. 

## Specific Objectives
1. Write squeaky clean, well refactored code using ES6 syntax.
2. Make informed design decisions to create a user-friendly application.
3. Keep state based components to a minimum and leverage more functional components.
4. Use a modular architecture for your application file structure.
5. Think deeply about React Lifecycle Methods.
6. Become familiar with promises, nested fetch requests, and handling the UI based on acceptance of data.
7. Become familiar with routing and how to handle dynamic routes.
8. Use propTypes for every component receiving props.
9. Write tests for React components and some asynchronous functionality.

## Installation 

> Clone down this repo into an empty directory on your local machine
>
> Run `npm install` in your teminal to install the project's dependencies 
>
> Run `npm start` to run the application in development mode
>
> Visit [http://localhost:3000](http://localhost:3000) to view it in the browser
>
> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Challenges

One of the major challenges we faced during the build-out of this project was having nested fetch-calls. In short, we were given a base endpoint for a back-end server, that lead to many other endpoints with futher data we needed to obtain for the application. This was difficult, first of all, because we had not yet had exposure to a nested fetch-call. Deciding when exactly to fetch initial data, and when exactly to fetch further data proved to be difficult, as we wanted to make sure we optimize efficiency of the website and not fetch everything as soon as a user logs in, as this would be quite rare while working with extremely large amounts of data. Another challenge for us in this project was getting better-acquainted with React's testing framework. Before learning React, testing was much more centered around specific methods inside classes to see if their return values are what we expect. With React, testing is much more oriented around the user - making sure that when certain actions are fired (e.g. a button click), that the user gets the expected result. We also ran into some issues generally with the asynchronous nature of both fetch-calls and setting the state of a component - but as we moved throughout the project, we picked up on a few different ways to properly deal with asynchronous code. 

## Looking Ahead

If we were to continue with this project, there are quite a few things we would like to add on or do differently. One process that may help throughout the build-out of a given project would be to build out some testing as components are being built, and modify as needed. For this project, we primarily built out the entire project and all of its components, and then headed into testing. Looking forward, it would likely be smart to finish up a particular feature of a component, and write out what you can to test that component. Another thing we'd likely focus on is a bit more in-depth planning in regards to each component's structure - it would likely be very helpful before building out the components to have some discussion about which components should be stateful, and which should be functional. 

## VRAD In Action

![VRAD1](https://i.imgur.com/tOjZIgd.png)
![VRAD2](https://i.imgur.com/0z3apGm.png)
![VRAD3](https://i.imgur.com/Bp5c8G5.png)
![VRAD4](https://i.imgur.com/ls8csxI.png)
![VRAD5](https://i.imgur.com/sPRyPP1.png)
![VRAD6](https://i.imgur.com/y8PW3bf.png)

## Contributors:
[Charlie Bandstra](https://github.com/C-Bandstra)  
[Collin Kallery](http://github.com/collinkallery)
