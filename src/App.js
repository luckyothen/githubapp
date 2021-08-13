
import React, { useRef, useEffect } from 'react';
import Dashboard from './hof/dashboard/Dashboard';
import { uiActions } from './redux/reducers/ui-reducers';
import { useDispatch } from 'react-redux';

function App() {
  const ref = useRef(null);
  const dispatch = useDispatch();


  //   const handleClickOutside = event => {
  //     if (ref.current && !ref.current.contains(event.target)) {
  //       dispatch(uiActions.forceCloseUserShowMenu());
  //     }
  //   };

  //   useEffect(() => {
  //     document.addEventListener("click", handleClickOutside, true);
  //     return () => {
  //       document.removeEventListener("click", handleClickOutside, true);
  //     };
  //   });

  //   return { ref, isComponentVisible, setIsComponentVisible };
  // }

  return (
    <>
      <Dashboard />
    </>
  );
}

export default App;
