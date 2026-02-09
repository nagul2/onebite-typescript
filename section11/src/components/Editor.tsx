import { useState } from "react";
import { useTodoDispatch } from "../App";

export default function Editor() {
  const dispatch = useTodoDispatch();

  const [text, setText] = useState("");

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    dispatch.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={onChangeInput}></input>
      <button onClick={onClickButton}>Todo 추가</button>
    </div>
  );
}
