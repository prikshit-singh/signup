import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
const PrivateRoute = ({ currentUser, children }) => {
  const [userData, setUserData] = useState(null);
  
 

  const navigate = useNavigate();
  useEffect(() => {
    

    if (!currentUser) {
      navigate('/login');
    }

  }, [currentUser]);


  return userData ? children : <Navigate to='/login' replace />;
};

export default PrivateRoute;
