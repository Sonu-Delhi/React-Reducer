import React, {useReducer} from 'react';
import './App.css';

const redcureComponent = (state,action)=>{
  console.log(state);
  console.log(action);
  if(action.type==="increment"){
    return state+1;
  }
  if(action.type==="decrement"){
    return state-1;
  }

  return state;
}
function App() {
 let [counter, dispatch] =  useReducer(redcureComponent,10);

  const increment = ()=>{
    
    dispatch({
      action:"incement",
      payload:0
    })
  }
  const decrement = ()=>{
    
    dispatch({
      action:"decrement",
      payload:0
    })
  }
  return (
    <div className="App">
     <p>{counter}</p>
     <div>
      <button onClick={()=>dispatch({type:"increment"})} className='btn btn-primary'>Increment</button>
      <button onClick={()=>dispatch({type:"decrement"})} className='btn btn-warning mx-2'>Decrement</button>
     </div>
    </div>
  );
}

export default App;
