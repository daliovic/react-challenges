import React, { useState } from "react";

export default function OneActivity({ content }: { content: any }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  //console.log(content);

  return (
    <ul key={content.key}>
      <li>
        {content.activity}{" "}
        <button
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
        >
          Expand
        </button>
        <ul style={{ display: isCollapsed ? "none" : "block" }}>
          {Object.entries(content).map((item) => {
            return <li key={item[0]}>{`${item[0]}: ${item[1]}`}</li>;
          })}
        </ul>
      </li>
    </ul>
  );
}
