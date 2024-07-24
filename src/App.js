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

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
       {/* <State/> */}
       {/* <Hookstate/> */}
       {/* <Hooktimer/> */}
       {/* <Greeting isLoggedin ={false}/> */}
       {/* <LoginControl/> */}
       {/* <Form/> */}
       {/* <Object/> */}
       {/* <ObjectKey/> */}
       {/* <Shopping/> */}
       {/* <Book/> */}
      {/* </header> */}
      <CheckoutForm />
    </div>
  );
}

export default App;
