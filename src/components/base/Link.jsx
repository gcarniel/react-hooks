function Link({ href, children = "Saiba mais" }) {
  return (
    <>
      <a target="_blank" rel="noreferrer" href={href}>
        {children}
      </a>
      <br />
    </>
  );
}

export default Link;
