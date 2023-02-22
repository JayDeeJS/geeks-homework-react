import { useState } from "react"
import ModalWindow from "../components/ModalWindow"
import Title from "../components/Title"
import TodoList from "../components/TodoList"

const list = [
    {id: 1, title: "go to shop 1", description: "some desc"},
    {id: 2, title: "go to shop 2", description: "some desc"},
    {id: 3, title: "go to shop 3", description: "some desc"},
    {id: 4, title: "go to shop 4", description: "some desc"},
]

const MainPage = () => {
    const [todoList, setTodoList] = useState(list)
    const [isShow, setIsShow] = useState(false)
    const [currentTodo, setcurrentTodo] = useState({})
  
    const handleAdd = (data) => {
      const newTodoList = [...todoList, {...data, id: Date.now()}]
      setTodoList(newTodoList)
    }
  
    const handleDelete = (id) => {
      const newTodoList = todoList.filter((item) => item.id !== id)
      setTodoList(newTodoList)
    }
  
    const handleEdit = (data) => {
      const newTodoList = todoList.map((item) => {
        if (item.id === data.id) {
          return data
        } else {
          return item
        }
      })
      setTodoList(newTodoList)
    }
  
    const handleOpen = (todo) => {
      setIsShow(true)
      setcurrentTodo(todo)
    }
    console.log(currentTodo);

    const sortByDate = () => {
        const sorted = todoList.sort((a, b) => b.id - a.id)
        setTodoList([...sorted])
    }

    const handleClose = () => {
        setIsShow(false)
        setcurrentTodo(currentTodo === '')
    }

    return (
        <div className="mainPage">
            <Title size={26}>
                Todo List
            </Title>
            <button onClick={() => setIsShow(true)}>Create task</button>
            <button onClick={sortByDate}>Sort asc</button>
            <TodoList list={todoList} handleDelete={handleDelete} handleOpen={handleOpen}/>
            {
              isShow &&
              <ModalWindow handleEdit={handleEdit} currentTodo={currentTodo} handleAdd={handleAdd} handleClose={handleClose}/>
            }
        </div>
    )
}
export default MainPage