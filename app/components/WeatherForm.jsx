var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function(e){
        e.preventDefault();
        //Auslesen des Suchfeldinhalts
        var location= this.refs.location.value;
        //Überprüfung ob eingabe in Suchfeld erfolgt  ist
        if (location.length > 0){
        // Leeren des Suchfelds
            this.refs.location.value ="";
        // Ausführen der Containerfunktion onSearch und Übergabe der Eingabewerte
            this.props.onSearch(location);
        }
    },
    
    render: function () {
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="location"/>
                <button>Sende Anfrage</button>
            </form>
            </div>
        )
    }
    
});

module.exports = WeatherForm;