import { useEffect, useState } from "react"
import ModalWindow from "../ModalWindow"
import Title from "../Title"
import TodoList from "../TodoList"

const MainPage = () => {
    const [todoList, setTodoList] = useState([])
    const [isShow, setIsShow] = useState(false)
    const [currentTodo, setcurrentTodo] = useState({})
  
    const handleAdd = (data) => {
      const newTodoList = [...todoList, {...data, id: Date.now()}]
      setTodoList(newTodoList)
    }
  
    const handleDelete = (id) => {
      const newTodoList = todoList.filter((item) => item.id !== id)
      if (newTodoList.length === 0) {
        localStorage.setItem('list', JSON.stringify(newTodoList))
      }
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

    const handleClose = () => {
        setIsShow(false)
        setcurrentTodo({})
    }

    useEffect(() => {
      const list = JSON.parse(localStorage.getItem('list'))
      setTodoList(list);
    }, [])

    useEffect(() => {
      if (todoList.length === 0) {
        return
      }
      localStorage.setItem('list', JSON.stringify(todoList))
    }, [todoList])

    return (
        <div className="mainPage">
            <Title size={26}>
                Todo List
            </Title>
            <button onClick={() => setIsShow(true)}>Create task</button>
            <TodoList list={todoList} handleDelete={handleDelete} handleOpen={handleOpen}/>
            {
              isShow &&
              <ModalWindow handleEdit={handleEdit} currentTodo={currentTodo} handleAdd={handleAdd} handleClose={handleClose}/>
            }
        </div>
    )
}
export default MainPage