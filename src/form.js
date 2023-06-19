import React from 'react';

class Form extends React.Component {
    
    render() {
        return (
            <form onSubmit={this.props.weatherattr}>
                <input type="text" name="city" />
                <button>Click</button>
            </form>

        )
    }
}

export default Form