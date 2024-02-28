import styled from "./Grid.module.css";

export const Grid = ({ children }) => {
  return <ul className={styled.list}>{children}</ul>;
};
