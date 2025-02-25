import React, { useReducer } from 'react'
const reducer=(state,action)=>{
 switch(action.type){
    case 'badi':
        return{count:state.count+1}
        case 'yaree':
            return{count:state.count-1}
            case 'ibar':
                return{count:0}
 }
}
const initialState={count:0}
const Reduser = () => {
    const[state,dispach]=useReducer(reducer,initialState);
  return (
    <div>
      <h1>{state.count} </h1>
      <button onClick={()=> dispach({type:"badi"})}>➕ Increment</button>
      <button onClick={()=>dispach({type:'yaree'})}>➖ Decrement</button>
      <button onClick={()=> dispach({type:'ibar'})}>🔄 Reset</button>
    </div>
  )
}

export default Reduser
