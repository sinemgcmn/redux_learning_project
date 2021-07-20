import {createStore} from "redux";
import {createSlice} from "@reduxjs/toolkit"

const initialState = { counter:0, showCounter : true}


//THEY WILL ALWAYS GET THE CURRENT STATE//
//METHODS AUTOMATICALLY ARE BEING CALLED FOR YOU DEPENDING ON THE WHICH ACTION TRIGGERED//
//SO YOU DO NOT HAVE TO WRITE THE ACTIONS// 
//WE DO NOT HAVE TO WRITE OUR IF CHECK ANY MORE
//WITH THIS TOOLKIT, IT IS IMPOSSIBLE TO MUTATE THE ORIGINAL STATE.
//IT CAN LOOK LIKE YOU MUTATED IT BUT THIS TOOLKIT IS USING ANOTHER PACKAGE CALLED IMMER AND THIS FIGURED THE MUTATING CODES AND CLONES THE STATE//
createSlice({
  name:"counter",
  initialState,
  reducers: {
    increment(state){
      state.counter++;

    },
    decrement (state){
      state.counter--;
    },
    increase (state, action){
      state.counter = state.counter + action.amount
    },
    toogleCounter(state){
      state.showCounter = !state.showCounter;
    },
  }
})

const counterReducer = (state = initialState, action) => {

  // NEVER MUTATE THE ORIGINAL STATE
  // OBJ ARRAYS ARE REFERANCE VALUES IN JS
  // IT CAN LEAD SOME BUGS AND UNPREDICTABLE BEHAVIOURS  
  // ALWAYS OVERWRITE IT WITH A BRAND-NEW OBJECT 

  if (action.type === "increment"){
    return { 
      counter: state.counter +1,
      showCounter: state.showCounter
    }
  }

if(action.type === "increase"){
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter
    }
}

  if (action.type === "decrement"){
    return {
      counter: state.counter -1,
      showCounter: state.showCounter}
  }

  if(action.type === "toogle"){
    return {
      showCounter: !state.showCounter,
      counter: state.counter
    }
  }

  return state
}

// This store requires a reducer function as a parameter
// And the reducer function parameter should be a pointer

const store = createStore(counterReducer);

// Our app can only one store and we have to provide once our store.
export default store;