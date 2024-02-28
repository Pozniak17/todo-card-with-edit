import { Grid, GridItem, TodoListItem } from "..";

export const TodoList = ({ array, onDelete }) => {
  return (
    <Grid>
      {array.map(({ id, text }, index) => (
        <GridItem key={id}>
          <TodoListItem
            text={text}
            index={index}
            onDelete={onDelete}
            idx={id}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
