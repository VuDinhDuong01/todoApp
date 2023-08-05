import { useSelector } from "react-redux";

import { RootState } from "../../Redux/store";
import { TodoAppItem } from "../TodoAppItem/TodoAppItem";
export const TodoList = () => {
  const { listTodo } = useSelector(
    (state: RootState) => state.changeToogle.todos
  );
  
  const { filteredList } = useSelector(
    (state: RootState) => state.changeToogle.todos
  );
  const { filterToggle } = useSelector(
    (state: RootState) => state.changeToogle.toggle
  );

  return (
    <div className="bg-[#3450A1] px-3 py-3 mx-3 my-3 rounded-md flex flex-col items-center justify-center">
      {filterToggle ? (
        listTodo.length > 0 ? (
          listTodo.map((todo, index) => {
            return <TodoAppItem key={index} todo={todo} />;
          })
        ) : (
          <div className="w-[100px] h-[50px] flex items-center justify-center text-[white] bg-[#666] rounded-md">
            Not Todos
          </div>
        )
      ) : filteredList.length > 0 ? (
        filteredList.map((todo, index) => {
          return <TodoAppItem key={index} todo={todo} />;
        })
      ) : (
        <div className="w-[100px] h-[50px] flex items-center justify-center text-[white] bg-[#666] rounded-md">
          Not Todos
        </div>
      )}
    </div>
  );
};
