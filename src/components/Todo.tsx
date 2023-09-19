import { MutableRefObject, useEffect, useRef, useState } from "react";
import ToModifyTodo from "./ToModifyTodo";

interface TodoItem {
  id: number;
  memo: string;
}

const Todo = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [showModifyTodo, setShowModifyTodo] = useState(false);
  const [modifyItem, setModifyItem] = useState({ id: 0, memo: "" });
  const [sum, setSum] = useState(0);

  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleAdd = () => {
    const input = inputRef.current;

    setTodoList([{ id: sum, memo: input.value }, ...todoList]);
    setSum(sum + 1);
    input.value = "";
  };

  const handleShowModifyAlert = (id: number) => {
    setShowModifyTodo(true);
    const targetItem = todoList.find((item) => item.id === id);
    setModifyItem({ id, memo: targetItem.memo });
  };

  const handleModifyTodoConfirm = ({
    id,
    memo,
  }: {
    id: number;
    memo: string;
  }) => {
    setTodoList(todoList.map((item) => (item.id === id ? { id, memo } : item)));
    setShowModifyTodo(false);
  };

  const handleModifyTodoCancel = () => {
    setShowModifyTodo(false);
  };

  const handleRemove = (id: number) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <div>
      <input placeholder="..할일" ref={inputRef} />
      <button onClick={handleAdd}>추가</button>
      {todoList.length === 0 && <p>할 일 목록이 없습니다.</p>}
      {todoList.length > 0 && (
        <ul>
          {todoList.map((item) => (
            <li key={item.id}>
              {item.memo}
              <button
                onClick={(e) => {
                  e.stopPropagation;
                  handleShowModifyAlert(item.id);
                }}
              >
                수정
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation;
                  handleRemove(item.id);
                }}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      )}
      {showModifyTodo === true && (
        <ToModifyTodo
          id={modifyItem.id}
          memo={modifyItem.memo}
          onConfirm={handleModifyTodoConfirm}
          onCancel={handleModifyTodoCancel}
        />
      )}
    </div>
  );
};

export default Todo;
