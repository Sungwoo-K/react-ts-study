import { MutableRefObject, useEffect, useRef, useState } from "react";
import ToModifyTodo from "./ToModifyTodo";

interface TodoItem {
  memo: string;
}

const Todo = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [showModifyTodo, setShowModifyTodo] = useState(false);
  const [modifyItem, setModifyItem] = useState({ index: 0, memo: "" });

  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleAdd = () => {
    const input = inputRef.current;

    setTodoList([{ memo: input.value }, ...todoList]);
    input.value = "";
  };

  const handleShowModifyAlert = (index: number) => {
    setShowModifyTodo(true);

    setModifyItem({ index, memo: todoList[index].memo });
  };

  const handleModifyTodoConfirm = ({
    index,
    memo,
  }: {
    index: number;
    memo: string;
  }) => {
    setTodoList(
      todoList.map((item, idx) => {
        if (idx === index) {
          return { index, memo };
        }
        return item;
      })
    );
    setShowModifyTodo(false);
  };

  const handleModifyTodoCancel = () => {
    setShowModifyTodo(false);
  };

  const handleRemove = (index: number) => {
    setTodoList(todoList.filter((_, idx) => idx !== index));
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
          {todoList.map((item, index) => (
            <li key={index}>
              {item.memo}
              <button
                onClick={(e) => {
                  e.stopPropagation;
                  handleShowModifyAlert(index);
                }}
              >
                수정
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation;
                  handleRemove(index);
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
          index={modifyItem.index}
          memo={modifyItem.memo}
          onConfirm={handleModifyTodoConfirm}
          onCancel={handleModifyTodoCancel}
        />
      )}
    </div>
  );
};

export default Todo;
