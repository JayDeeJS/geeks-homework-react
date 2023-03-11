import { lazy, useContext, useEffect, useState } from "react"
import { fetchTodosByParams } from "../../requests"
import { StoreContext } from "../../store/StoreContext"
// import ModalWindow from "../ModalWindow"
import Title from "../Title"
import TodoList from "../TodoList"

const ModalWindow = lazy(() => import("../ModalWindow"))

const MainPage = () => {
    const {todoList, setTodoList, searchValue, status, setStatus} = useContext(StoreContext)
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
      setStatus('pending')
      const params = {
        _limit: 3,
        _page: page
      }
      fetchTodosByParams(params).then((data) => {
        if (data.status === 200) {
          setTodoList(data.data);
          setStatus('fullfilled')
        } else {
          setStatus('rejected')
        }
      })
    }, [page])

    useEffect(() => {
      if (!searchValue) {
        const params = {
          _limit: 3,
          _page: page
        }
        fetchTodosByParams(params).then(({data}) => {
          setTodoList(data)
        })
      }
  }, [searchValue])

    return (
        <div className="mainPage">
            <Title size={26}>
                Todo List
            </Title>
            <button onClick={() => setIsShow(true)}>Create task</button>
            <TodoList
              handlePrevPage={handlePrevPage}
              handleNextPage={handleNextPage}
              page={page}
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
