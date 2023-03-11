import { useContext, useEffect, useState } from "react"
import TodoCart from "./TodoCart"

import classes from "./components.module.css"
import { classNames } from "../helpers"
import Input from "./ui/Input"
import SumComp from "./SumComp"
import Hoc from "./Hoc"
import { StoreContext } from "../store/StoreContext";

const types = ['asc', 'desc', 'letters']

const TodoList = ({handleOpen, handleDelete, page, handlePrevPage, handleNextPage}) => {

    const {todoList, searchValue, setSearchValue, reducers, status} = useContext(StoreContext)
    const [type, setType] = useState('asc')

    const handleChangeType = (type) => {
        setType(type)
        localStorage.setItem('type', type)
    }

    const handleChangeValue = (e) => {
        reducers.filterSort(type, e.target.value)
        setSearchValue(e.target.value)
    }

    useEffect(() => {
        const type = localStorage.getItem('type')
        if (!type) return
        setType(type)
    }, [])
    console.log(status);
    if (status === 'pending') {
        return <div>
            <h1>LOADING</h1>
        </div>
    }

    return (
        <div className="todoList">
            <Hoc Component={SumComp}/>
            <Input value={searchValue} onChange={handleChangeValue} placeholder='Search by title'/>
            {types.map((item, i) =>
                <button key={i} className={classNames(classes.buttonActive, classes.button, item === type)} onClick={() => handleChangeType(item)}>{item}</button>
            )}

            {todoList.map((item) =>
                <TodoCart
                  key={item.id}
                  todo={item}
                  handleOpen={handleOpen}
                  handleDelete={handleDelete}/>
            )}

            <button onClick={handlePrevPage}>Prev</button>
            <h2>{page}</h2>
            <button onClick={handleNextPage}>Next</button>
        </div>
    )
}
export default TodoList