import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { changeToggle } from "../../Store/SliceToggle";
import {
  addTodo,
  endEditTodo,
  endEditTodoFilter,
  startEditTodo,
  startEditTodoFilter,
} from "../../Store/SliceTodo";
import { todo } from "../../types/todo.type";
import { RootState } from "../../Store/store";
import { Button } from "../Button/Button";
import { Select } from "../Select/Select";

export const InputTodo = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { Todo } = useSelector((state: RootState) => state.changeToogle.todos);
  const { filterToggle } = useSelector(
    (state: RootState) => state.changeToogle.toggle
  );

  const [todo, setTodo] = useState<todo>(
    Todo !== null
      ? Todo
      : {
          stack: "",
          complete: "",
          checkInput: false,
          id: "",
          date: "",
        }
  );

  const handleDelete = () => {
    dispatch(changeToggle(false));
    dispatch(startEditTodo(null));
  };

  const handleAddStack = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(addTodo(todo as todo));
    dispatch(changeToggle(false));
  };
  const handleFinshEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(startEditTodo(null));
    dispatch(changeToggle(false));
    dispatch(endEditTodo({ id: Todo?.id as string, todo: todo }));
  };
  const handleendEditTodoFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(startEditTodoFilter(null));
    dispatch(changeToggle(false));
    dispatch(endEditTodoFilter({ id: Todo?.id as string, todo: todo }));
  };
  return (
    <div className="py-5 px-5 bg-[#ccc] w-[400px]   rounded-md">
      <div className="w-full flex justify-end">
        <div
          className="flex full justify-center w-[30px] h-[30px] cursor-pointer items-center bg-[#666]"
          onClick={handleDelete}
        >
          <FaTimes size={25} />
        </div>
      </div>
      <h2 className="text-[white] font-bold text-[20px]">
        {Todo === null ? t("todo.addTodo") : t("todo.editTodo")}
      </h2>
      <form
        action=""
        onSubmit={
          filterToggle
            ? Todo !== null
              ? handleFinshEdit
              : handleAddStack
            : handleendEditTodoFilter
        }
      >
        <div className="flex flex-col py-4">
          <label htmlFor="" className="text-[white] font-semibold ">
            {t("todo.Title")}
          </label>
          <input
            type="text"
            className="h-[45px] border rounded-md pl-3"
            value={todo?.stack}
            onChange={(e) =>
              setTodo((prev) => ({ ...prev, stack: e.target.value }))
            }
          />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="" className="text-[white] font-semibold ">
            {t("todo.Status")}
          </label>
          {/* <select
            className="h-[45px] border rounded-md"
            value={todo?.complete}
            onChange={(e) =>
              setTodo((prev) => ({ ...prev, complete: e.target.value }))
            }
          >
            <option value="Incomplete"> {t("todo.Incomplete")}</option>
            <option value="Completed">{t("todo.Completed")}</option>
          </select> */}
          <Select
            value={todo?.complete}
            onChange={(e) =>
              setTodo((prev) => ({ ...prev, complete: e.target.value }))
            }
          >
            
            <option value="Incomplete"> {t("todo.Incomplete")}</option>
            <option value="Completed">{t("todo.Completed")}</option>
          </Select>
        </div>

        <div className="flex items-center gap-3 py-3">
          <Button> {Todo !== null ? t("todo.edit") : t("todo.add")}</Button>
          <Button onClick={handleDelete}> {t("todo.cancel")}</Button>
        </div>
      </form>
    </div>
  );
};
