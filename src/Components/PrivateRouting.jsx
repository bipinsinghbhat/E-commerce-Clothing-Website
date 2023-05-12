// import React, { useEffect } from 'react'
// import { useSelector } from 'react-redux'
// import { Navigate, useLocation } from 'react-router-dom'

// const PrivateRouting = ({children}) => {
// const auth=useSelector((store)=>store.AuthReducer.isAuth)


// const location = useLocation()


//   return <>
//   {auth ? children : <Navigate  to="/login" state={location.pathname} replace />}
//   </>;
// }
// export default PrivateRouting

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouting = ({ children }) => {
  const auth = useSelector((state) => state.AuthReducer.isAuth);
  const location = useLocation();

  return auth ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} replace />
  );
};

export default PrivateRouting;
