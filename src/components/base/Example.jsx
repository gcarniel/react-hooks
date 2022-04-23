function Example({ children }) {
  return (
    <>
      <p>Exemplo</p>
      <div
        style={{
          textAlign: "center",
          border: "1px solid black",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        {children}
      </div>
    </>
  );
}

export default Example;
