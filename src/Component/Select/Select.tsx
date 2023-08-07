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
    onChange={onChange}
  >
    {children}
  </select>
  )
}
