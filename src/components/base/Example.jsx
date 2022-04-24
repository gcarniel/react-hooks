function Example({ children, example = "Exemplo" }) {
  return (
    <>
      <p>{example}</p>
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
