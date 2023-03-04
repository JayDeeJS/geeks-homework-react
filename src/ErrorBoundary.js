import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.title = 'Hello world'
        this.state = {
            value: 'Help me',
            // hasError: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    // handleClick() {
    //     this.setState({...this.state, value: 'Hello World'})
    // }

    handleClick(e) {
        this.setState({value: e.target.value})
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo)
    }

    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    render() {
        // const title = 'hello'
        // const {title} = this.props

        // const handleClick = () => {
        //     console.log('Hello');
        // }
        if (this.state.hasError) {
            return (
                <h1 onClick={this.handle}>Something went wrong</h1>
            )
        }

        return this.props.children
        // (
        //     <div onClick={this.handleClick}>
        //         <input value={this.state.value} onChange={this.handleClick}/>
        //         {/* {this.props.title} */}
        //         {/* {title} */}
        //         {this.state.value}
        //     </div>
        // )
    }
}

export default ErrorBoundary