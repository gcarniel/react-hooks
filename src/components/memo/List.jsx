import { memo } from "react";

export function List({ list }) {
  console.log("renderizou a lista");
  return (
    <>
      <ul>
        {list.map((tl, i) => {
          return <li key={i}>{tl}</li>;
        })}
      </ul>
    </>
  );
}

export default memo(List);
