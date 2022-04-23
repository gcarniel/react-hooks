function Paragraph({ children }) {
  return (
    <>
      <p style={{ margin: "0 10px", textAlign: "justify" }}>{children}</p>

      <br />
    </>
  );
}

export default Paragraph;
