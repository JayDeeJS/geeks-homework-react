import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchTodosById } from "../../requests";
import { StoreContext } from "../../store/StoreContext";

const IdTodo = () => {

    const {id} = useParams()

    const {todoStore, setTodoStore} = useContext(StoreContext)

    useEffect(() => {
        fetchTodosById(id)
            .then(({data}) => {
                setTodoStore(data.data)
            });
    }, []);

    return (
        <div className="IdTodo">
            
        </div>
    )
};

export default IdTodo;