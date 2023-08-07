import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { useDispatch } from "react-redux";
import { BsMoon, BsFillSunFill } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import classNames from "classnames";

import { TodoList } from "../TodoList/TodoList";
import { changeFilterToggle, changeToggle } from "../../Store/SliceToggle";
import { filterTodo } from "../../Store/SliceTodo";
import { Button } from "../Button/Button";
import { Select } from "../Select/Select";

export const TodoApp = () => {
  const { t } = useTranslation();
  const refApp = useRef<HTMLDivElement>(null);
  const [language, setLanguate] = useState("Tiếng Việt");
  const [mode, SetMode] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleAddStack = () => {
    dispatch(changeToggle(true));
    dispatch(changeFilterToggle(true));
  };

  const handleMole = () => {
    SetMode((prev) => !prev);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguate(lng === "en" ? "English" : "Tiếng Việt");
  };

  const handleShow = () => {
    setIsShow((prev) => !prev);
  };

  useEffect(() => {
    if (mode) {
      if (refApp.current) {
        refApp.current.style.cssText = "background:#666666";
      }
    } else {
      if (refApp.current) {
        refApp.current.style.cssText = "background:rgb(50, 53, 60)";
      }
    }
  }, [mode]);

  return (
    <div className="w-[500px]  bg-[#9a8383] rounded-lg" ref={refApp}>
      <h1 className="w-full flex justify-center text-[30px] text-[white] mt-5">
        {t("todo.todoList")}
      </h1>
      <div className="w-full flex justify-end items-center cursor-pointer mr-[50px] ">
        <div
          className={classNames(
            "w-[40px] h-[40px]  rounded-[50%]  flex items-center justify-center",
            {
              "bg-[#666]": mode === false,
              "bg-[white]": mode === true,
            }
          )}
          onClick={handleMole}
        >
          {mode ? (
            <BsMoon size={20} className="text-[black]" />
          ) : (
            <BsFillSunFill size={20} className="text-[white]" />
          )}
        </div>

        <div className=" relative mr-[30px]">
          <div className="flex items-center  mx-3 " onClick={handleShow}>
            <AiOutlineGlobal size={20} className="text-[white]" />
            <span className="text-[white] text-[18px] z-[9999]">
              {language}
            </span>
          </div>
          {isShow && (
            <div
              className=" top-[30px] left-[20px] absolute bg-[red] rounded-md"
              onClick={handleShow}
            >
              <p
                onClick={() => changeLanguage("vi")}
                className="w-[100px] h-[40px] flex items-center justify-center text-[white] hover:bg-[#666] hover:rounded-md"
              >
                Tiếng Việt
              </p>
              <p
                onClick={() => changeLanguage("en")}
                className="w-[100px] h-[40px] flex items-center justify-center text-[white] hover:bg-[#666] hover:rounded-md"
              >
                English
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex justify-between items-center px-4 my-5">
        <Button onClick={handleAddStack}> {t("todo.addStack")}</Button>
        <Select
          onChange={(e) => {
            dispatch(filterTodo(e.target.value));
            dispatch(dispatch(changeFilterToggle(false)));
          }}
        >
          <option value="All"> {t("todo.all")}</option>
          <option value="Incomplete"> {t("todo.Incomplete")}</option>
          <option value="Completed"> {t("todo.Completed")}</option>
        </Select>
      </div>
      <TodoList />
    </div>
  );
};
