import wrapper from "../store/configureStore";
import withReduxSage from "next-redux-saga";
import 'bootstrap/dist/css/bootstrap.css'
import '../scss/global.scss'; 
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { loadUserRequestAction } from "../reducers/user";
import React from 'react';

interface token {
  user_id: string;
}

const App = ({ Component }) => {
  const accessToken = Cookies.get("accessToken");
  const dispatch = useDispatch();

  React.useEffect(() => {
    
    if (accessToken) {
      dispatch(loadUserRequestAction({ data: jwtDecode<token>(accessToken).user_id }));
    }
  
  }, []);

  return (
    <>
      <Component /> 
    </>
  );
};

export default wrapper.withRedux(withReduxSage(App));
