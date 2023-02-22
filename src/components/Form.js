import { useState } from "react"
import Input from "./Input";

const Form = ({handleAdd, currentTodo, handleClose, handleEdit}) => {
    const [value, setValue] = useState(currentTodo.title ? currentTodo : {
        title: '',
        description: '',
    });
    const isEdit = currentTodo.title ? true : false

    const handleOnChange = (e) => {
        setValue({
            ...value,
            [e.target.name] : e.target.value
        })
    }
    console.log(value);

    const action = () => {
        if (isEdit) {
            handleEdit(value)
            handleClose()
        } else {
            handleAdd(value)
        }
    }

    return (
        <div className="form">
            {
                Object.keys(value).map((item) =>
                    item !== 'id' && (
                        <Input key={item} name={item} value={value[item]} onChange={handleOnChange} placeholder='Search'/>
                    )
                )
            }
            <button onClick={action}>{isEdit ? 'Redact' : 'Create'}</button>
        </div>
    )
}
export default Form