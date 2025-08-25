import React, { useState } from "react";
import Draggable from "react-draggable";

function Text() {
  const [editMode, setEditMode] = useState(true);
  const [val, setVal] = useState("Double click to edit");
  return (
    <div>
      <h1>Im a Text</h1>
      {editMode ? (
        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onDoubleClick={setEditMode(false)}
        />
      ) : (
        <p onDoubleClick={setEditMode(false)}>{val}</p>
      )}
    </div>
  );
}

export default Text;
