# Petz

A social media app for pets: create a profile for your pet, write some comments, find your favorite pets, and given them a lick!

![alt text](https://i.imgur.com/tkUYcsJ.png "Petz")

## Installation

You can access the live version of this app at [petz-frontend.surge.sh](http://petz-frontend.surge.sh/), but if you'd like to clone down a local version for your own tinkering, follow these instructions:

1. Clone down this frontend repo as well as the [backend repo](https://github.com/konjoinfinity/project3backend). Make sure to put them into separate directories in order to keep things tidy.
2. Open a terminal widnow, `cd` into your local frontend directory, and follow these commands:

```
npm i
npm start
```

3. In another terminal tab, `cd` into your local backend directory and follow these commands:

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
- CSS (including [MaterializeCSS](https://materializecss.com/))

## Development and Planning

For a more in-depth look at our initial planning, take a look at [this document in our backend repo](https://github.com/konjoinfinity/project3backend/blob/master/planning.md). Additionally, you can look at some rudimentary wireframes in this repo's [planning directory](https://github.com/konjoinfinity/project3frontend/tree/dev/planning). In a nutshell, though, we began by defining our models (**Pet** and **Comment**, with the eventual addition of **User**) and considering everything that each model needed to accomplish. For example, we wanted full CRUD on **Pet**, but only Create and Delete on **Comment** and Create on **User**. This influenced our routes and controllers, which in turn allowed us to quickly generate most of the boilerplate for our backend.

Handling our frontend required us to lean a bit more into our workflow plan. We used a mix of GitFlow and Feature Branching: everyone started the day on their own branch that described what they were to accomplish that day, then at the end of the day we'd merge into a central Development branch. From there, we would debug any stray oddities and finally merge Development into Master. If something were to show up 15 minutes before presentation time (knock on wood), we would be able to create a smalll hotfix branch off of Master.

## Highlights

### Licks

_Cathy:_ Similar to users liking a Facebook profile, users can “lick” a pet profile. I first set up the backend, adding a PUT request to a lick route. I used the **\$inc** operator to increment the document property "licks" so that for every PUT request made, the lick value would increase by one. After successfully testing with [Postman](https://www.getpostman.com/), I handled the frontend by making an API request to capture the pet object and set this.state.licks to the lick value. I created a handleLick function that, when the lick button was clicked, sent my PUT request to the backend. The response sets this.state.licks to the new lick value, therefore hotloading the new lick value on the browser.

### Comments

_Konjo:_ I became proficient in adding and deleting comments as sub-document models in a previous lab. I wanted to add comments to this app and take it a step further. After the comments are posted, we as a group added a most recent comment feature which finds all the comments and sorts them based on their timestamp. This was accomplished using the **.sort** method using the **createdAt: -1** property. After a pet comment is created, the user is redirected to the homepage, which displays the most recent comments.

### Search

_Annabelle:_ In a previous class assignment, I came up with a simple search component that brought all items from a collection into state, then used JavaScript's **.filter** feature to narrow down the results. The user's input is saved in state and updated dynamically, and if a document's name parameter contains the input as a substring then the document will appear as a result. Because every string contains the empty string, if there is no input then the state variable for input automatically changes to an asterick. For this project, I added the species conditional so that users can search for exclusively cats or exclusively dogs with particular names.

## Further Work

### Connect pets to users

User authentication currently allows only logged-in users to access certain features, such as the ability to write a comment or delete a pet. However, we'd like to expand this so that users can create profiles for their pets and only edit those pet profiles.

### Hotload comments

Currently, if you add or delete a comment you need to do a full page reload in order to see the updated data. We'd like to implement hotloading (similar to how we have it for Licks) so that adding/deleting comments updates the Comments array dynamically for the user.

## Authors

Meet Team KAC Stack!

- [Konjo](https://github.com/konjoinfinity)
- [Annabelle Taylor](https://github.com/annabelle-t-taylor)
- [Cathy Le](https://github.com/Cathy347Le)

## Acknowledgments

- We took some inspiration and guidance from a couple of example projects we saw in class, most prominently Express Twitter. Sometimes, the best way to figure out a tricky bit of code is to see it "in the wild."
- Thanks to our excelllent instructors, [Hammad Malik](https://github.com/tomatohammado) and [Zakk Fleischmann](https://github.com/zakkman), for their ongoing support and encouragement.
- A special shoutout to our fellow SEI2 classmates for volunteering pictures of their beloved cats and dogs for our seed data! They are all the best boys and girls.
