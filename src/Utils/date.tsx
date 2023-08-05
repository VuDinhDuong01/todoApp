import { format } from "date-fns";
export const dateTodo = () => {
  const currentTime = new Date();
  const formattedTime = format(currentTime, "hh:mm aaaa");
  const formatedDate = format(currentTime, "dd/MM/yyyy");
  return `${formatedDate} ${formattedTime}`;
};
