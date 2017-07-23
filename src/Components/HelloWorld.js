import React, { Component } from 'react'
import PropTypes from 'prop-types'

class HelloWorld extends Component {
    render() {
        return (
            <div>
                {this.props.message}
            </div>
        );
    }
}

HelloWorld.propTypes = {
    message: PropTypes.string.isRequired
}

HelloWorld.defaultProps = {
    message: 'Hello World!!!'
}

export default HelloWorld;