import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import { todo as todoType } from "../../Types/todo.type";
import {
  checkboxInput,
  checkboxInputFilter,
  deleteOneTodo,
  deleteOneTodoFilter,
  startEditTodo,
  startEditTodoFilter,
} from "../../Store/SliceTodo";
import { changeToggle } from "../../Store/SliceToggle";
import { RootState } from "../../Store/store";

interface todoItemTypes {
  todo: todoType;
}
export const TodoAppItem = ({ todo }: todoItemTypes) => {
  const dispatch = useDispatch();
  const { filterToggle } = useSelector(
    (state: RootState) => state.changeToogle.toggle
  );

  return (
    <div className="flex w-full items-center justify-between bg-[white] px-2 my-2 py-2 rounded-sm cursor-pointer">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.checkInput}
          className="w-5 h-5 mr-4"
          onChange={() => {
            filterToggle
              ? dispatch(checkboxInput(todo.id))
              : dispatch(checkboxInputFilter(todo.id));
          }}
        />
        <div>
          <p>{todo.stack}</p>
          <p>{todo.date}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div
          onClick={() => {
            filterToggle
              ? dispatch(deleteOneTodo(todo.id))
              : dispatch(deleteOneTodoFilter(todo.id));
          }}
          className="px-2 py-2 bg-[#ccc] rounded-lg"
        >
          <RiDeleteBin6Line />
        </div>

        <div
          className="px-2 py-2 bg-[#ccc] rounded-lg "
          onClick={() => {
            filterToggle
              ? dispatch(startEditTodo(todo.id))
              : dispatch(startEditTodoFilter(todo.id));
            dispatch(changeToggle(true));
          }}
        >
          <AiOutlineEdit />
        </div>
      </div>
    </div>
  );
};
