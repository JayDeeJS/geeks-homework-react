const Hoc = ({Component}) => {

    Hoc.displayName = 'Wrapper'
    Component.displayName = 'Wrapper Content'
    return (
        <div className="wrapper">
            <Component render={(sum, sum2) => {
                return (
                    <div onClick={() => console.log(sum, sum2)}>
                        <h1>{sum} + {sum2} = {sum + sum2}</h1>
                    </div>
                )
            }}/>
        </div>
    )
};

export default Hoc;