React Boilerplate
=====================

A minimal and light dev environment for ReactJS.

### Usage

Clone the boilerplate and create your own git repo.

```
git clone git@github.com:lighthouse-labs/react-simple-boilerplate.git
cd react-simple-boilerplate
git remote rm origin
git remote add origin [YOUR NEW REPOSITORY]
# Manually update your package.json file
```

Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000
```

### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.

### Linting

This boilerplate project includes React ESLint configuration.

```
npm run lint
```

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [websocket](https://www.npmjs.com/package/websocket)

### ScreenShots
!["When user connects to Chatty, they are added to an existing room with other users."](https://github.com/kcdporter/Chatty_App/blob/master/screenshots/JoiningChat.png?raw=true)
!["Each user starts of as Anonymous, but can change their names."](https://github.com/kcdporter/Chatty_App/blob/master/screenshots/NameChange.png?raw=true)
!["When user signs out, it updates the count across the entire app."](https://github.com/kcdporter/Chatty_App/blob/master/screenshots/CounterUpdate.png?raw=true)
