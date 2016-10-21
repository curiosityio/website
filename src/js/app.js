/* @flow */

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
import { Home } from './home';
import { About } from './about';

var IndexNavBar = React.createClass({
    render: function() {
        return (
            <div className="pa3 pa4-ns">
                <ReactRouter.Link className="link dim black b f6 f5-ns dib mr3" to="/" title="Home">Caddy</ReactRouter.Link>
                <ReactRouter.Link className="link dim gray f6 f5-ns dib mr3" to="/" title="Home">Home</ReactRouter.Link>
                <ReactRouter.Link className="link dim gray f6 f5-ns dib mr3" to="/about" title="About">About</ReactRouter.Link>
            </div>
        )
    }
});

var App = React.createClass({
  render: function() {
    return (
        <div>
            <IndexNavBar/>

            <div className="content">
              {this.props.children}
            </div>
        </div>
    )
  }
});

ReactDOM.render(
    <ReactRouter.Router>
        <ReactRouter.Route path="/" component={App}>
            <ReactRouter.IndexRoute component={Home}/>
            <ReactRouter.Route path="about" component={About} />
        </ReactRouter.Route>
    </ReactRouter.Router>,
    document.querySelector("#container")
);
