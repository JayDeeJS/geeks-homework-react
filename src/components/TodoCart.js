import { Component } from "react"

// const TodoCart = ({todo, handleOpen, handleDelete}) => {

//     return (
//         <div className="todocart">
//             <h1>{todo.title}</h1>
//             <h1>{todo.description}</h1>
//             <button onClick={() => handleOpen(todo)}>Edit</button>
//             <button onClick={() => handleDelete(todo.id)}>Delete</button>
//         </div>
//     )
// }
// export default TodoCart

class TodoCart extends Component {

    render() {
        const {todo, handleOpen, handleDelete} = this.props
        return (
            <div className="todocart">
                <h1>{todo.title}</h1>
                <h1>{todo.description}</h1>
                <button onClick={() => handleOpen(todo)}>Edit</button>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
        )
    }
}

export default TodoCart