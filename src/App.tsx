import {useSelector} from "react-redux"

import { InputTodo } from "./Component/InputTodo/InputTodo";
import { TodoApp } from "./Component/TodoApp/TodoApp";
import { RootState } from "./Redux/store";
function App() {
  const {toggle}= useSelector((state:RootState)=>state.changeToogle.toggle)
 
  return (
    <div className=" w-full relative h-screen   ">
      <div className="items-center justify-center flex pt-[30px]   ">
        <TodoApp />
      </div>
     {
      toggle && ( <>
      <div className="w-full  h-screen absolute left-0 right-0 top-0 bottom-0  bg-[rgba(0,0,0,0.5)] "></div>
      <div className=" top-[50%]   left-[50%] translate-x-[-50%] translate-y-[-50%]  absolute z-10 ">
        <InputTodo />
      </div></>)
     }
    </div>
  );
}

export default App;
