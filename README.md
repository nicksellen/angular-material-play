# angular-material-play

[![Circle CI](https://circleci.com/gh/nicksellen/angular-material-play.svg?style=svg)](https://circleci.com/gh/nicksellen/angular-material-play)

```
git clone https://github.com/nicksellen/angular-material-play.git
cd angular-material-play
npm install
node server.js
```

Then visit [localhost:8000](http://localhost:8000).

To build and run production version:

```
NODE_ENV=production $(npm bin)/webpack
(cd public && python -m http.server)
```
