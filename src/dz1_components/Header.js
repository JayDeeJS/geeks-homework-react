import { useState } from "react";
import classes from "../dz1_components/dz1.module.css";
import ModalData from "./ModalData";

const Header = () => {
    const [data, setData] = useState(false);
    const dataLinks = [
        {title: "GPU", image: "https://m.media-amazon.com/images/I/81B2tCDJWgS._AC_SL1500_.jpg"},
        {title: "CPU", image: "https://m.media-amazon.com/images/I/51V90kcYatL._AC_SL1073_.jpg"},
    ]

    const handleToggle = () => {
        return (
            setData(prev => !prev)
        )
    }

    return (
        <header className={classes.header}>
            <button onClick={handleToggle} className={classes.button}>SHOW DATA</button>
            {data && <ModalData dataLinks={dataLinks} handleToggle={handleToggle}/>}
        </header>
    )
}
export default Header;