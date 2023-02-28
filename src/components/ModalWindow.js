import ModalWrapper from "./ModalWrapper"
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

    const keydown = (e) => {
        if (e.key === 'Escape') handleClose()
    }

    useEffect(() => {
        window.addEventListener('keydown', keydown)
        return () => {
            window.removeEventListener('keydown', keydown)
        }
    }, [])
    
    return (
        <ModalWrapper>
            <div className="modalWrapper" onClick={handleClose}>
                <div className="modal" onClick={(e) => {
                    e.stopPropagation()
                }}>
                    <Form handleClose={handleClose} handleEdit={handleEdit} handleAdd={handleAdd} currentTodo={currentTodo}/>
                </div>
            </div>
        </ModalWrapper>
    )
}
export default ModalWindow