socketio-react-example
======================

Example with node.js + socket.io + react.js

1. install [react-tools](http://facebook.github.io/react/docs/tooling-integration.html) with `npm install -g react-tools`
2. start jsx transformer in root with `jsx --watch src/ js/`
3. start node server in root with `node server.js`
4. open `localhost:3000` in browser

Project structure: 
- index.html: the one and only html page
- server.js: node.js server part
- src: react components with embedded jsx
- js/main.js: require.js main component
- js/ generated react js files
