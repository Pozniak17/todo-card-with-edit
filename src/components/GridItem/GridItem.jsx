import styled from "./GridItem.module.css";
export const GridItem = ({ children }) => {
  return <li className={styled.item}>{children}</li>;
};
