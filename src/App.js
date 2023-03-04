import React, { useCallback, useEffect, useMemo, useState } from 'react';

import "./index.css";
import MainPage from './components/pages/MainPage';
import ExmMemo from './components/ExmMemo';
import ErrorBoundary from './ErrorBoundary';
import ClassComp from './ClassComp';
import { NavLink, Route, Routes } from 'react-router-dom';
import AboutPage from './components/pages/AboutPage';
import IdTodo from './components/pages/IdTodo';
import { routes } from './common/RouteConfig';
import AppRouter from './common/AppRouter';

function sum(a, b) {
  return a + b
}

function App() {
  const [value, setValue] = useState('')
  const [isShow, setIsShow] = useState(false)

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
      {/* <MainPage/>
      <button onClick={() => setIsShow(!isShow)}>SHOW</button>
      {isShow && (<ClassComp/>)} */}
      <NavLink to={'/'}>Main page</NavLink>
      <NavLink to={'about'}>About page</NavLink>
      <AppRouter/>
    </div>
  );
}

export default App;
