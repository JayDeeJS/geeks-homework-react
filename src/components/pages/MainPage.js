import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { fetchTodosByParams } from "../../requests"
import ModalWindow from "../ModalWindow"
import Title from "../Title"
import TodoList from "../TodoList"

const MainPage = () => {
    const [todoList, setTodoList] = useState([])
    const [isShow, setIsShow] = useState(false)
    const [currentTodo, setcurrentTodo] = useState({})

    const [page, setPage] = useState(1)
  
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
 
    const handlePrevPage = () => {
      if (page === 1) return
      setPage(page - 1)
    }
  
    const handleNextPage = () => {
      setPage(page + 1)
    }

    const handleOpen = (todo) => {
      setIsShow(true)
      setcurrentTodo(todo)
    }

    const handleClose = () => {
        setIsShow(false)
        setcurrentTodo({})
    }

    useEffect(() => {
      const params = {
        _limit: 3,
        _page: page
      }
      fetchTodosByParams(params).then(({data}) => {
        setTodoList(data);
      })
    }, [page])

    return (
        <div className="mainPage">
            <Title size={26}>
                Todo List
            </Title>
            <button onClick={() => setIsShow(true)}>Create task</button>
            <TodoList
              handlePrevPage={handlePrevPage}
              handleNextPage={handleNextPage}
              page={page} list={todoList}
              handleDelete={handleDelete}
              handleOpen={handleOpen}/>
            {
              isShow &&
              <ModalWindow handleEdit={handleEdit} currentTodo={currentTodo} handleAdd={handleAdd} handleClose={handleClose}/>
            }
        </div>
    )
}
export default MainPage
