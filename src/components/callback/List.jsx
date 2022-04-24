import { useEffect, useState } from "react";

function List({ list, transformText }) {
  const [renders, setRenders] = useState(0);

  useEffect(() => {
    setRenders(renders + 1);
  }, [transformText]);

  return (
    <>
      <ul>
        {list.map((tl, i) => {
          return <li key={i}>{tl}</li>;
        })}
      </ul>
      <p>Renderizou {renders}</p>
    </>
  );
}

export default List;
