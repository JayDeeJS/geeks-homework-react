import { useEffect, useState } from "react"
import TodoCart from "./TodoCart"

import classes from "./components.module.css"
import { classNames } from "../helpers"
import Input from "./ui/Input"
import { useSort } from "./hooks/hooks"

const types = ['asc', 'desc', 'letters']

const TodoList = ({list, handleOpen, handleDelete}) => {

    const [type, setType] = useState('asc')
    const [searchValue, setSearchValue] = useState('')

    const filterSort = (type) => {
        switch (type) {
            case 'asc':
                return list.sort((a, b) => b.id - a.id)
            case 'desc':
                return list.sort((a, b) => a.id - b.id)
            case 'letters':
                return list.sort((a, b) => a.title.localeCompare(b.title))
            default:
                return list
        }
    }

    const handleChangeType = (type) => {
        setType(type)
        localStorage.setItem('type', type)
    }

    useEffect(() => {
        const type = localStorage.getItem('type')
        if (!type) return
        setType(type)
    }, [])
    console.log(searchValue);

    const {sortedArray, oldArray} = useSort(list, type)

    const handleSearch = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <div className="todoList">
            <Input value={searchValue} onChange={(e) => handleSearch(e)} placeholder='Search title'/>
            {types.map((item) =>
                <button className={classNames(classes.buttonActive, classes.button, item === type)} onClick={() => handleChangeType(item)}>{item}</button>
            )}
            {filterSort(type).map((item) =>
                <TodoCart key={item.id} todo={item} handleOpen={handleOpen} handleDelete={handleDelete}/>
            )}
        </div>
    )
}
export default TodoList