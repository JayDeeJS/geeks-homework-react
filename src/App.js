import React, { useCallback, useEffect, useMemo, useState } from 'react';

import "./index.css";
import MainPage from './components/pages/MainPage';
import ExmMemo from './components/ExmMemo';
import ErrorBoundary from './ErrorBoundary';

function sum(a, b) {
  return a + b
}

function App() {
  const [value, setValue] = useState('')

  const log = useCallback((title) => {
    console.log(title);
  }, [])

  const [math, setMath] = useState({
    a: 2,
    b: 4,
  })

  const amount = useMemo(() => {
    return (sum(math.a, math.b))
  }, [math.a, math.b])

  // useEffect(() => {
  //   throw new Error()
  // })

  return (
    <div className="App">
      {/* <input value={value} onChange={(e) => setValue(e.target.value)}/>
      <ExmMemo log={log} amount={amount}/>
      <ErrorBoundary title='Hello world App'/> */}
      <MainPage/>
    </div>
  );
}

export default App;
