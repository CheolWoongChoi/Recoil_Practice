import { useRecoilValue } from "recoil";
import todoListState from "../../atoms/todoList";
import TodoItem from "../TodoItem";
import TodoItemCreator from "../TodoItemCreator";

export default function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <TodoItemCreator />

      {todoList.map((todo) => (
        <TodoItem item={todo} />
      ))}
    </>
  );
}
