# **Nodejs + MongoDB => Heroku getting started!**

### Build a barebones Node.js app using [Express 4](http://expressjs.com/) and [MongoDB](https://www.mongodb.com/).
&nbsp;  
This application is the merging of the following two articles: the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article and [Building a Simple CRUD Application with Express and MongoDB](https://zellwk.com/blog/crud-express-mongodb/) article - check them out.

You can follow these articles as a step by step tutorial on the same app (if so it is recommended to follow first the 'Getting started...' and then 'Building a simple CRUD...' :)

## Documentation

If you are following these articles as a tutorial then read this:
- Follow the 'Getting started...' tutorial entirely but skip the last step ('Provision a database') because we will provide a MongoDB database via mLab.
- Note in the first tutorial that the `/views` folder contain the `/pages` folder and the `/partials` folder, they both are used by [EJS](http://www.embeddedjs.com/) to compose pages that share same header, navbar, footers and so on...
- When you start the second tutorial remember to keep the same file structure inherited from the first one. This means that instead of create an `index.html` (that we already have but it is called `index.ejs` and is located in `/views/pages/index.ejs`) you have to create a second page called `/db` in `/views/pages/db.ejs` folder.

This app is live here: [![logo](/public/icon48.png "Run the demo app on heroku")](https://hero-tut.herokuapp.com/)

For more information about using Node.js on Heroku or MongoDB or Express or EJS, see these articles and websites:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [MongoDB Node.js Driver Documentation](http://mongodb.github.io/node-mongodb-native/2.2/)
- [Getting Started with MongoDB](https://docs.mongodb.com/getting-started/shell/)
- [EJS is a client-side templating language](http://www.embeddedjs.com/)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ git clone https://github.com/DavOnGit/node-mongo-heroku-getting-started.git # or clone your own fork
$ cd node-mongo-heroku-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

or

Make sure you have the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```
$ heroku create
$ git push heroku master
$ heroku open
```
