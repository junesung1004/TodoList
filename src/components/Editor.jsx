import React from "react";
import "./Editor.css";
import { useState, useRef } from "react";

export default function Editor({ onCreate }) {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeyDown = (e) => {
    //console.log(e);
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="Editor">
      <input
        value={content}
        onKeyDown={onKeyDown}
        ref={contentRef}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
}
