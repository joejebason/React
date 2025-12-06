import logo from './logo.svg';
import './App.css';
import State from './component/State';
import Hookstate from './component/Hookstate';
import Hooktimer from './component/Hooktimer';
import Greeting from './component/Greeting';
import LoginControl from './component/LoginControl';
import Form from './component/form';
import Object from './component/listandkey';
import ObjectKey from './component/ObjectKey';
import Shopping from './shopping/shoppinglist';
import Book from './Book/Book';
import CheckoutForm from './component/stripe';
import Axios from './component/axios';
import { createContext, useState } from 'react';
import ContextApi from './component/context';
import ContextUser from './context/contextUser';


function App() {

  // let [user, setUser] = useState({
  //   fName:'joe',
  //   age:24,
  //   email:'joejebason9301@gmail.com'
  // });

  return (
    <>
    <h1>welcome</h1>
    <ContextUser>
    <div className="App">
      
      {/* <header className="App-header"> */}
       {/* <State/> */}
       {/* <Hookstate/> */}
       {/* <Hooktimer/> */}
       {/* <Greeting isLoggedin ={false}/> */}
       {/* <LoginControl/> */}
       <Form/>
       {/* <Object/> */}
       {/* <ObjectKey/> */}
       {/* <Shopping/> */}
       {/* <Book/> */}
       {/* <ContextApi/> */}
      {/* </header> */}
      {/* <CheckoutForm /> */}
      {/* <Axios/> */}
    </div>
    </ContextUser>
    </>
  );
}

export default App;
