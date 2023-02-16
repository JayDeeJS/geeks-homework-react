import { useState } from "react";
import classes from "../dz1_components/dz1.module.css";

const ModalData= ({handleToggle, dataLinks}) => {
    let [gpuState, setGpuState] = useState(0);
    let [cpuState, setCpuState] = useState(0);

    const handleGpuIncr = () => {
        setGpuState((prev) => prev + 1)
    }

    const handleGpuDecr = () => {
        (gpuState === 0) ? setGpuState(gpuState => gpuState) : setGpuState(gpuState - 1)
    }

    const handleCpuIncr = () => {
        setCpuState((prev) => prev + 1)
    }

    const handleCpuDecr = () => {
        (cpuState === 0) ? setCpuState(cpuState => cpuState) : setCpuState(cpuState - 1)
    }

    return (
        <>
            <div onClick={handleToggle} className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                <span className={classes.modalCloseSymbol} onClick={handleToggle}>&#10060;</span>
                <div className={classes.modalList}>
                    {dataLinks.map((item, id) =>
                        <div key={id} className={classes.modalElement}>
                            <p style={{fontWeight:"900"}}>{item.title}</p>
                            <img style={{width:"90%", height:"70%"}} src={item.image} alt="img" />
                            <div className={classes.modalControls}>
                                <button className={classes.modalBtn} onClick={(id === 0) ? handleGpuIncr : handleCpuIncr}>+++</button>
                                <span>{(id === 0) ? gpuState : cpuState}</span>
                                <button className={classes.modalBtn} onClick={(id === 0) ? handleGpuDecr : handleCpuDecr}>---</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default ModalData