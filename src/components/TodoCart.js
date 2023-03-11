import { Component } from "react"
import { Link, useNavigate } from "react-router-dom"

class TodoCart extends Component {

    render() {
        const {todo, handleOpen, handleDelete} = this.props
        return (
            <div className="TodoLink">
                <Link className="link" to={`/${todo.id}`}>
                    <div className="todocart">
                        <h1>{todo.title}</h1>
                    </div>
                </Link>
                <button onClick={() => handleOpen(todo)}>Edit</button>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
        )
    }
}

export default TodoCart