import React, { useCallback, useMemo, useState } from 'react';

import "./index.css";

import AppRouter from './common/AppRouter';
import Header from './Header';

// function sum(a, b) {
//   return a + b
// }

function App() {
  // const [value, setValue] = useState('')
  // const [isShow, setIsShow] = useState(false)

  // const log = useCallback((title) => {
  //   console.log(title);
  // }, [])

  // const [math, setMath] = useState({
  //   a: 2,
  //   b: 4,
  // })

  // const amount = useMemo(() => {
  //   return (sum(math.a, math.b))
  // }, [math.a, math.b])

  // useEffect(() => {
  //   throw new Error()
  // })

  return (
    <div className="App">
      {/* <input value={value} onChange={(e) => setValue(e.target.value)}/>
      <ExmMemo log={log} amount={amount}/>
      <ErrorBoundary title='Hello world App'/> */}
      {/* <MainPage/>
      <button onClick={() => setIsShow(!isShow)}>SHOW</button>
      {isShow && (<ClassComp/>)} */}
      <Header/>
      <AppRouter/>
    </div>
  );
}

export default App;