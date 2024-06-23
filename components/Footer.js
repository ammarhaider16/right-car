const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#E87D22",
        color: "#762A0C",
        fontFamily: "Playfair Display",
        padding: "20px",
      }}>
      <p>© 2024 Ammar Haider</p>
      <div style={{ marginTop: "10px" }}>
        <a
          href="https://github.com/ammarhaider16"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#762A0C",
            marginRight: "10px"
          }}>
          GitHub
        </a>
      </div>
      <div style={{ marginTop: "10px" }}>
        <a
          href="mailto:ammarhaider1629@gmail.com"
          style={{ color: "#762A0C"}}>
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
