interface ButtonTypes{
    children:React.ReactNode ,
    onClick?:()=>void
}
export const Button = ({ children, onClick }: ButtonTypes) => {
  return (
    <button className="px-2 py-3 bg-[blue] rounded-lg text-[white] font-semibold" onClick={onClick}>
      {children}
    </button>
  );
};
