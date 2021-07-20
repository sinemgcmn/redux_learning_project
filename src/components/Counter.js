import {useDispatch, useSelector} from "react-redux"
import classes from './Counter.module.css';

const Counter = () => {
  // When we use useSelector react redux 
  // will automaticaly 
  // set up a subscription your component 
  // (instead connect). Whenever data change in redux store,
  // this component will be updated. And also if you unmount this component redux will also 
  // auto clear this component from redux store.
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const show = useSelector (state => state.showCounter)
  
  const incrementHandler =()=>{
    dispatch({type: "increment"})
  }

  const increaseHandler = ()=>{
    dispatch({type:"increase", amount: 5})
  }

  const decrementHandler =()=>{
    dispatch({type: "decrement"})
  }

  const toggleCounterHandler = () => {
    dispatch({type: "toogle"})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
