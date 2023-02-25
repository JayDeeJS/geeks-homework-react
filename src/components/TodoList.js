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
        let filteredList = [...list]
        if (searchValue) {
            filteredList = filteredList.filter((item) => item.title.includes(searchValue))
        }
        switch (type) {
            case 'asc':
                return filteredList.sort((a, b) => b.id - a.id)
            case 'desc':
                return filteredList.sort((a, b) => a.id - b.id)
            case 'letters':
                return filteredList.sort((a, b) => a.title.localeCompare(b.title))
            default:
                return filteredList
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
            <Input value={searchValue} onChange={handleSearch} placeholder='Search by title'/>
            {types.map((item, i) =>
                <button key={i} className={classNames(classes.buttonActive, classes.button, item === type)} onClick={() => handleChangeType(item)}>{item}</button>
            )}
            {filterSort(type).map((item) =>
                <TodoCart key={item.id} todo={item} handleOpen={handleOpen} handleDelete={handleDelete}/>
            )}
        </div>
    )
}
export default TodoList