import { useMemo, useState } from "react";
import { StoreContext } from "./StoreContext";

const StoreProvider = ({children}) => {
    const [searchValue, setSearchValue] = useState('')
    const [todoStore, setTodoStore] = useState({})
    const [todoList, setTodoList] = useState([])
    const [status, setStatus] = useState(false)

    const filterSort = (type, search) => {
        const filteredList = todoList.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    
        switch (type) {
            case 'asc':
                setTodoList(filteredList.sort((a, b) => b.id - a.id))
                return 
            case 'desc':
                setTodoList(filteredList.sort((a, b) => a.id - b.id))
                return
            case 'letters':
                setTodoList(filteredList.sort((a, b) => a.title.localeCompare(b.title)))
                return
            default: return
        }
    }
    
    const reducers = {
        filterSort
    }

    const value = {
        todoStore, setTodoStore,
        todoList, setTodoList,
        status, setStatus,
        searchValue, setSearchValue,
        reducers
    }

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    )
};

export default StoreProvider;