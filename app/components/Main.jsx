var React = require('react');
var Nav  =  require('Nav');

var Main = (props) =>{
  return(
      <div>
          <Nav/>
          <div className="expanded row">
            <div className="columns medium 3 large-4">
              <h3>Dies ist eine Textnachricht im Grid links!</h3>
            </div>
            <div className="columns medium-6 large-4">
              {props.children}
            </div>
            <div className="columns medium 3 large-4">
              <h3>Dies ist eine Textnachricht im Grid rechts</h3>
            </div>
          </div>
      </div>
    );
}



module.exports = Main;
