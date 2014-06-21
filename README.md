# Koa Passport Example

This is a small repo meant to show a minimal Koa Passport example using bcrypt. For a full example with react see [Koa-React-Full-Example](https://github.com/dozoisch/koa-passport-example). This repo was created to be used as example project for a blog post -- see http://ghost-dozoisch.rhcloud.com/integrating-passportjs-with-koa/.


## Installation & Run

```sh
#Install deps
npm i


# To run tests
npm test


# To start the project on localhost:3000
npm start

```


##Usage

To try it, first run npm i, then you can wether run the tests with `npm test` or try it yourself `npm start`. You will need to go to `localhost:3000/user/:username/:password` to create the first user. You can then try to log him in. Go to `localhost:3000`, you should be redirected to `/login` where you can enter the credentials of the newly created user. You will then be redirected to the secured zone!
