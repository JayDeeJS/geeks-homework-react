import { useEffect, useState } from "react"
import Form from "./Form"

const ModalWindow = ({handleAdd, handleClose, currentTodo, handleEdit}) => {
    const [value, setValue] = useState('')

    useEffect(() => {
        console.log('MOUNT');
        return () => {
            console.log('UNMOUNT');
        }
    }, [value])
    
    return (
        <>
            <div className="modalWrapper" onClick={handleClose}></div>
            <div className="modal">
                <Form handleClose={handleClose} handleEdit={handleEdit} handleAdd={handleAdd} currentTodo={currentTodo}/>
            </div>
        </>
    )
}
export default ModalWindow