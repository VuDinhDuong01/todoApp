import React from 'react'
interface SelectType{
    children:React.ReactNode,
    onChange:(e:React.ChangeEvent<HTMLSelectElement>) => void
    value?:string
}

export const Select = ({children, onChange, value}:SelectType) => {
  return (
    <select
    value={value}
    className="border-none h-[45px]"
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
