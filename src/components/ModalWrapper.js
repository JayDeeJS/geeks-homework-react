import { createPortal } from "react-dom";

const ModalWrapper = ({children, node}) => {
    return createPortal(children, node || document.body)
};

export default ModalWrapper;