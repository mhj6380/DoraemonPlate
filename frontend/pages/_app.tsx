import 'bootstrap/dist/css/bootstrap.css'
import 'scss/global.scss';  
import { AuthProvider } from "lib/providers/authProvider"; 
import { ChatProvider } from "lib/providers/chatProvider";    
import React from 'react';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { useRouter } from "next/router";

const AppProvider = ({ contexts, children }) => contexts.reduce(
  (prev:any, context:any) => React.createElement(context, {
    children: prev 
  }), 
  children
);

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <> 
      <AppProvider contexts={[AuthProvider,ChatProvider]}>  
        <SwitchTransition mode='out-in'>
          <CSSTransition key={router.pathname} classNames='page' timeout={300}>
            <Component  {...pageProps} /> 
          </CSSTransition>
        </SwitchTransition>
       </AppProvider>
    </>
  );
};

export default App; 
 