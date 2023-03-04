import { Component } from "react";

class ClassComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Hello world'
        }
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    handleUpdate() {
        this.setState({value: 'UPDATED'})
    }

    componentDidMount() {
        console.log('MOUNT');
    }

    componentDidUpdate() {
        console.log('UPDATE');
    }

    componentWillUnmount() {
        console.log('UNMOUNT');
    }

    render() {
        return (
            <h1 onClick={this.handleUpdate}>{this.state.value}</h1>
        )
    }
}

export default ClassComp