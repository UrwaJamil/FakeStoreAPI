const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={linksStyle}>
        <a href="#" style={linkStyle}>About</a>
        <a href="#" style={linkStyle}>Support</a>
        <a href="#" style={linkStyle}>Privacy</a>
      </div>
      <p style={copyStyle}>© 2024 Fake Store API</p>
    </footer>
  );
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "32px",
  marginTop: "40px",
  borderTop: "1px solid #eee",
};

const linksStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  gap: "24px",
  marginBottom: "12px",
};

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "#555",
  fontSize: "14px",
};

const copyStyle: React.CSSProperties = {
  color: "#999",
  fontSize: "13px",
};

export default Footer;