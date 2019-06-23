import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {

    start = () => {
        this.props.startClickHandler();
    };

    render() {
        return (
            <div className="button">
                <button onClick={this.start}>{this.props.text}</button>

            </div>
        );
    }
}
Button.defaultProps = {
    text:"START",

};

Button.propTypes = {
    text: PropTypes.string.isRequired,


};
export default Button;
