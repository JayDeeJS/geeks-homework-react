import { useState } from "react"

const Footer = () => {
    const [state, setState] = useState([])

    const handleInc = () => {
        setState(prev => {
            return [...prev, {id: 1, title: 'This'}, {id: 2, title: 'is'}, {id: 3, title: 'footer'}]
        })
    }

    return (
        <footer className="footer">
            <button onClick={handleInc}>+++++</button>
            {state.map((item) =>
                <h1 key={item.id}>{item.title}</h1>
            )}
        </footer>
    )
}
export default Footer;