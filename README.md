<div align="center"> <h1>Get YouTube Subscribers <h1> </div>

The YouTube Subscribers is a backend project that provides a RESTful API for retrieving data about subscribers to YouTube channels. The project is built using **Node.js** ,**Express**, **Mongoose**, **JavaScript**and uses **MongoDB** as the database to store the subscriber data.

The API provides several endpoints that allow users to retrieve data in JSON format, including an endpoint to get all subscribers, an endpoint to get all subscribers' names and subscribed channels, and an endpoint to get details about a particular subscriber based on their ID. The project also handles error cases, such as when an incorrect subscriber ID is provided or when a user accesses an unknown endpoint.

The main purpose of this project is to provide a starting point for building a larger application that deals with YouTube data. The project can be used as a basis for building a more complex API that includes additional functionality, such as adding or deleting subscribers, searching for subscribers based on specific criteria, or integrating with the YouTube API to access data about channels and videos.

## Prerequisites:  
Please install MongoDB in your machine if you have not done already. Checkout the official MogngoDB installation manual for any help with the installation.

<h2>Project Live <a href="https://youtube-subscribers-livid.vercel.app/"> Click Here </a> </h2>
  
 <br>
 </br>


### Our Application ###
In this project, We will be building a simple get-youtube-subscribers application. We will build Rest APIs for creating, listing, editing and deleting a Subscriber.  

We’ll start by building a simple web server and then move on to configuring the database, building the Subscriber model and different routes for handling all the CRUD operations.  

Finally, tested our REST APIs using Postman.

### API Schema Documentation 

+ API URL: `https://documenter.getpostman.com/view/25411416/2s93CSnVdg` <br></br>

## Installation
```sh
$ git clone https://github.com/ManiKanta9578/YouTube_Subscribers.git
$ cd youtube_subscribers
$ npm install
$ npm start
```

## Environment Variables
To run this project, you will need to add the following environment variables to your .env file
+ PORT
+ DATABASE_URL

## Routes
### GET `http://localhost:3000/subscribers`

This request returns list of all subscribers with respect to  its _id, name, subscribed channel and subscribed date and time.

### GET `http://localhost:3000/subscribers/names`

This request return list of all subscribers with only their name and subscribed channel.

### GET `http://localhost:3000/subscribers/:id`

This request return one subscriber data from database followed by its id field.


### POST `http://localhost:3000/subscribers`

Create a new subscriber.

+ Method: `POST`
+ URL: `http://localhost:3000/subscribers`
+ Body:

```js
{
  "name": "Manikanta",
  "subscribedChannel": "Youtube Channel"
}
```



### PATCH `http://localhost:3000/subscribers/:id`

Update entire subscriber with specific id.

+ Method: `PATCH`
+ URL: `http://localhost:3000/subscribers/:id`
+ Body:

```js
{
  "name": "Manikanta"
  "subscribedChannel": "Almabetter Web Developement with web3"
}
```

### DELETE `http://localhost:3000/subscribers/:id`

This request delete a subscriber with specific id.

+ Method: `DELETE`
+ URL: `http://localhost:3000/subscribers/:id`

### Copyright and License

Copyright © 2023. Code released under the MIT license.
