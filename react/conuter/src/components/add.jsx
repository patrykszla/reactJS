import React from 'react';

class Add extends React.Component {

    fromChild = (text) => {
        this.props.changeText(text);
    }
    render () {
        return (
            <div>
                <span className="value">Value One{this.props.valueOne}</span> <br />
                <span className="value">Value Two{this.props.valueTwo}</span> <br />
                <span className="value">Value one + two{this.props.oneTwo}</span>  <br />
                <button onClick={this.props.addtwovalue}>Add two value</button> <br />
                <button onClick={() => this.fromChild("Text from child")}>Change text from child</button>
            </div>
        )
    }
}

export default Add