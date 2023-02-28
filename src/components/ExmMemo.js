import { memo, useEffect } from "react";

const ExmMemo = memo(({log, amount}) => {

    useEffect(() => {
        log('RENDER')
    }, [log])

    return (
        <div>Memo {amount}</div>
    )
});

export default memo(ExmMemo);