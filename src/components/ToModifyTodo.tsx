import { MutableRefObject, useRef } from "react";

interface ModifyTodo {
  id: number;
  memo: string;
  onConfirm: (paylood: { id: number; memo: string }) => void;
  onCancel: () => void;
}

const ToModifyTodo = ({ id, memo, onConfirm, onCancel }: ModifyTodo) => {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleConfirm = () => {
    onConfirm({ id, memo: inputRef.current.value });
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9990,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
    >
      <div style={{ width: "300px", padding: 20, backgroundColor: "white" }}>
        <input defaultValue={memo} ref={inputRef} />
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 20 }}>
          <button onClick={handleConfirm}>수정</button>
          <button onClick={onCancel}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default ToModifyTodo;
