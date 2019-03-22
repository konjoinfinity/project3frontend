# Petz

A social media app for pets. Find your favorite pets, write them some comments, give your pals a lick, and create a profile for your pet!

![alt text](https://i.imgur.com/tkUYcsJ.png "Petz")

## Installation

You can access the live version of this app at [petz-frontend.surge.sh](http://petz-frontend.surge.sh/), but if you'd like to clone down a local version of this app for your own tinkering, follow these instructions:

1. Clone down this repo for the frontend as well as the [backend repo](https://github.com/konjoinfinity/project3backend). Make sure to keep them in separate directories to keep things tidy
2. Open a terminal, `cd` into your local frontend, and follow these commands:

```
npm i
npm start
```

3. In another terminal tab, `cd` into your local backend and follow these commands:

```
npm i
mongod
node db/seed.js
node index.js
```

By default, the React frontend will load on _localhost:3000_ and the Express backend will load on _localhost:3001._

## Built With

- ReactJS
- Express
- MongoDB
- CSS

## Development and Planning

For a more in-depth look at our initial planning, take a look at [this document in our backend repo](https://github.com/konjoinfinity/project3backend/blob/master/planning.md). Additionally, you can look at some rudimentary wireframes in this repo's [planning directory](https://github.com/konjoinfinity/project3frontend/tree/dev/planning). In a nutshell, though, we started by defining our models (**Pet** and **Comment**, with the eventual addition of **User**) and considering everything that each model needed to accomplish. For example, we needed to have full CRUD on **Pet**, but we just wanted Create and Delete on **Comment** and simply Create on **User**. This influenced our routes and controllers, which in turn allowed us to quickly create much of the boilerplate for our backend.

Handling our frontend required us to lean a bit more into our workflow plan. We used a mix of GitFlow and Feature Branching: everyone started the day on their own branch that described what they were to accomplish that day, then at the end of the day we'd merge into a central Development branch. From there, we could debug any stray oddities and finally merge Development into Master. If something were to show up 15 minutes before presentation time (knock on wood), we would be able to create a smalll hotfix branch off of Master.

## Highlights

### Licks

_Cathy:_

### Comments

_Konjo:_

### Search

_Annabelle:_ In a previous class assignment, I came up with a simple search component that brought all items from a collection into state, then used JavaScript's **.filter** feature to narrow down the results. The user's input is saved in state and updated dynamically, and if a document's name parameter contains the input as a substring, then the document will appear as a result. Because every string contains the empty string, if the user deletes all of their input then the state variable for input automatically changes to an astericks. For this project, I added the species conditional so that users can search for exclusively cats or exclusively dogs.

## Further Work

### Fixing asyncronous requests

If a user performs too many commands on a pet profile page, the server will sometimes crash. We're not 200% certain what the exact breaking point is, but we think it is related to the component lifecycle. Right now, our _Pet.js_ file contains all of the logic for the profile, meaning that one component is making multiple different types of requests. If we were to refactor this file into multiple smaller components, we think that we can utilize componentDidMount() and componentDidDismount() to handle these requests in a more streamlined fashion that our server can handle

### Connect pets to users

User authentication currently allows only logged-in users to access certain features, such as the ability to write a comment or delete a pet. However, we'd like to expand this so that users can create profiles for their pets and only edit those pet profiles.

## Authors

Meet Team KAC Stack!

- [Konjo](https://github.com/konjoinfinity)
- [Annabelle Taylor](https://github.com/annabelle-t-taylor)
- [Cathy Le](https://github.com/Cathy347Le)

## Acknowledgments

- We took some inspiration and guidance from a couple of example projects we saw in class, most prominently Express Twitter. Sometimes, the best way to figure out a tricky bit of code is to see it "in the wild."
- Thanks to our excelllent instructors, [Hammad Malik](https://github.com/tomatohammado) and [Zakk Fleischmann], for their ongoing support and encouragement.
- A special shoutout to our fellow SEI2 classmates for volunteering pictures of their beloved cats and dogs for our seed data! They are all the best boys and girls.
