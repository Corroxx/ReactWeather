var React = require ('react');

// var WeatherMessage = React.createClass({
//
//     render: function () {
//         // var location = this.props.location;
//         // var temp = this.props.temp;
//
//         //with Es6 destructuring
//         var{location,temp} =this.props;
//         return(
//             <h3>It is {temp} degrees in {location}</h3>
//         )
//     }
// });

var WeatherMessage = ({location,temp}) => {
  //var{location,temp} = props
  return(
      <h3>It is {temp} degrees in {location}</h3>
  )
}
module.exports = WeatherMessage;
