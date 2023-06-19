import React from 'react';

class WeatherOutput extends React.Component {
    render() {
        return (
            <div>
                Облачность: {this.props.skyattr}
            </div>
        )
    }
}

export default WeatherOutput