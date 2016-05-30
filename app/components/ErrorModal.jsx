var React = require('react');

var ErrorModal = React.createClass({
  getDefaultProps: function(){
    return{
      title: 'Error'
    };
  },
ProTypes: {
  title : React.PropTypes.string,
  message: React.PropTypes.string.isRequired
},
  componentDidMount: function(){
    var modal = new Foundation.Reveal($('#error-Modal'));
    modal.open()
  },
  render: function(){
    var {message, title} = this.props;
    return(
      <div id="error-Modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    )
  }
});

module.exports = ErrorModal;
