import './App.css';
import {add, sub, mul, div} from "./Calc";

function App() {
  return (
   <>
    <ol>
      <li>sum of two number is : {add(40,4)}</li>
      <li>Sub of two number is : {sub(20,10)}</li>
      <li>mul of two number is : {mul(10, 35)}</li>
      <li>div of two number is : {div(20,5)}</li>
    </ol>
   </>
  );
}

export default App;
