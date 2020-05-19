This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# This project was made with Reactjs, Nodejs, WebPack, Express, MySQL, Heroku w/ClearDB and love

### My start command was:
 npx create-react-app calculator-sezzle <br />
 npm add concurrently dotenv express mysql nodemon webpack<br />

## Available Scripts

```
  "scripts": {
    "start": "nodemon ./src/server/server.js",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "client": "react-scripts start",
    "server": "nodemon -r dotenv/config ./src/server/server.js",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },
```

### UP AND RUNNING

## CREATING DATABASE

Set up a TABLE with the name "calulations" and the COLUMNS should be number1, operator, number2, total, and created_at. or C & P into a workbench with : <br />

```

mysql> CREATE TABLE IF NOT EXISTS `calculations` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  number1 INT NOT NULL,
  operator varchar(255) NOT NULL,
  number2 INT NOT NULL,
  total INT NOT NULL,
  created_at varchar(255) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

```

then you can populate a row and after submitting a calculation throught the app it should return both values in the Calculations List

## Localy

OK , so I used concurrently ( a package for running start & server "concurrently") to get this up and running locally so if you have a database set up you can run:<br />

### npm run dev


## PROXY in the package.lock (l.5) (change port as needed)

```
 "proxy": "http://localhost:8000",
```

### ABOUT THE PROJECT

I built the calculator using React, Typescript, WebPack, Nodejs , Express, and MySQL. I also used dotenv, concurrently and styled-components, webpack, socket.io, and http (dev),<br />

I used useState and useEffect to update numbers in the display and useContext to bring in values I needed from the NumberProvider.<br />
socket.io and socket.io-client were used for the websocket used for real time rendering.<br/>

I originally had 2 main components of Calculator and CalcList but brought them to gether because NumberProvider wraps the whole project for access to its props and shared methods.<br />

### WEBPACK ALIASES

I used webpack to create an alias "components" for sourcing in to the app.jsx. and the exports from the compnents all come from the index.js inside the components folder. <br />

this the code inside the webpack-confiig.js<br />

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
