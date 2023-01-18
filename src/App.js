
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber } from './actions';
import { ChangeDark } from './actions';

// import { decNumber } from './actions';


function App() {
  const myState=useSelector((state)=>state.changeTheNumber)
  const changeThemeApp=useSelector((state)=>state.darkReducer)
  const dispatch=useDispatch()
  return (
    <div className="App" style={{
      backgroundColor: `${changeThemeApp ? "black" : "white"}`,
      color: `${changeThemeApp ? "white" : "black"}`,
    }}>
     <h1>Increment/Decrement </h1>
     <button onClick={()=>dispatch(incNumber())}>Increment</button>
     <h1>{myState}</h1>
     <button onClick={()=>dispatch(decNumber())} >Decrement</button>
     <button onClick={()=>dispatch(ChangeDark())}>themeChange</button>
    </div>
  );
}

export default App;
