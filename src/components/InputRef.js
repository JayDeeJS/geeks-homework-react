import { useRef, useState } from "react"

const InputRef = () => {

    const InputRef = useRef(null)

    return (
        <>
            <input ref={InputRef} placeholder='Search'/>
            <button onClick={() => InputRef}>Get text</button>
        </>
    )
}
export default InputRef;