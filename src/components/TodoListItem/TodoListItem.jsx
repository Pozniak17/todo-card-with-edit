import { Text } from "..";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";
import style from "./TodoListItem.module.css";

export const TodoListItem = ({ text, index, onDelete, idx }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{index + 1}
      </Text>
      <Text>{text}</Text>
      <button className={style.deleteButton} type="button">
        <RiDeleteBinLine size={24} onClick={() => onDelete(idx)} />
      </button>

      <button className={style.editButton} type="button">
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};
