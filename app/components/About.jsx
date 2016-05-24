var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return(
      <div>
        <h1 className="text-center">About</h1>
        <p>Wecome to the About Page!</p>
        <p>We offer different services round the globe.</p>
        <ol>
          <li>Weather Services</li>
          <li>Astronautic Information</li>
          <li>Weather forecasts</li>
          <li>Exact humidity values</li>
        </ol>
        <p>Try it out we have provided some Examples for you!</p>
        <li>
          <Link to='/examples'>Examples</Link>
        </li>
    </div>
  );
};
module.exports = About;
