import React from 'react'
interface SelectType{
    children:React.ReactNode,
    onChange:() => void
}

export const Select = ({children, onChange}:SelectType) => {
  return (
    <select
          
    className="border-none h-[30px]"
    // onChange={(e) => {
    //   dispatch(filterTodo(e.target.value));
    //   dispatch(dispatch(changeFilterToggle(false)));
    // }}
    onChange={onChange}
  >
    {/* <option value="All"> {t("todo.all")}</option>
    <option value="Incomplete"> {t("todo.Incomplete")}</option>
    <option value="Completed"> {t("todo.Completed")}</option> */}
    {children}
  </select>
  )
}
