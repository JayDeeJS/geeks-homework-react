import TodoCart from "./TodoCart"

const TodoList = ({list, handleOpen, handleDelete}) => {

    return (
        <div className="todoList">
            {list.map((item) =>
                <TodoCart key={item.id} todo={item} handleOpen={handleOpen} handleDelete={handleDelete}/>
            )}
        </div>
    )
}
export default TodoList