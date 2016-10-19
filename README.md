# website

# Dev

```
$> yarn # or npm install
$> yarn global add gulp # or npm install -g gulp
$> gulp
```

Gulp does lots of great things for us.

* Compiles Tachyons.
* Compiles React/ReactDOM.
* Bundles our JS code using Webpack.
* Compiles our Jade templates.
* Starts up a server to show our code in the browser.

# Production

I have not yet created a gulp task for creating production code.

When I do, I will need to do the following:

* Webpack production mode. This minifys the code for us.
* Check out `strip-loader` npm module. Strips JS!
* UnCSS gulp task for Tachyons.
* In Console, I am getting a warning from React saying I need to use the production version of React. It is faster with smaller amount of code.
