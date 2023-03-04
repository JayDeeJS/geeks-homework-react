import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTodosById } from "../../requests";

const IdTodo = () => {

    const {id} = useParams()
    const [idTodo, setIdTodo] = useState({});

    useEffect(() => {
        fetchTodosById(id).then(({data}) => {
            setIdTodo(data);
        });
    }, [id]);

    return (
        <div className="IdTodo">
            <h1>{idTodo.title}</h1>
        </div>
    )
};

export default IdTodo;