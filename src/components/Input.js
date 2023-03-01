import { Component } from "react";

// const Input = (props) => (<input {...props}/> )
// export default Input;

class Input extends Component {
    render() {
        return (
            <input {...this.props}/>
        )
    }
}

export default Input;