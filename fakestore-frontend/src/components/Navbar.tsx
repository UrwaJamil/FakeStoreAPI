import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>
        🛒 <strong>Fake Store API Dashboard</strong>
      </div>
      <div style={linksStyle}>
        <a onClick={() => navigate("/")} style={linkStyle}
          onMouseDown={e => (e.currentTarget.style.opacity = "0.4")}
          onMouseUp={e => (e.currentTarget.style.opacity = "1")}>Home</a>

        <a onClick={() => navigate("/docs")} style={linkStyle}
          onMouseDown={e => (e.currentTarget.style.opacity = "0.4")}
          onMouseUp={e => (e.currentTarget.style.opacity = "1")}>Docs</a>

        <a onClick={() => navigate("/apikey")} style={linkStyle}
          onMouseDown={e => (e.currentTarget.style.opacity = "0.4")}
          onMouseUp={e => (e.currentTarget.style.opacity = "1")}>API Key</a>
        <div style={adminStyle} onClick={() => window.open("http://127.0.0.1:8000/admin/", "_blank")}>
          👤 Admin ▾
        </div>
      </div>
    </nav>
  );
};

const navStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 32px",
  backgroundColor: "#ffffff",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
};

const logoStyle: React.CSSProperties = {
  fontSize: "20px",
  color: "#1a73e8",
  display: "flex",
  alignItems: "center",
  gap: "8px",
};

const linksStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "24px",
};

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "#333",
  fontSize: "15px",
  cursor: "pointer",
  transition: "all 0.1s ease",
};

const adminStyle: React.CSSProperties = {
  backgroundColor: "#f0f4ff",
  padding: "6px 14px",
  borderRadius: "20px",
  cursor: "pointer",
  fontSize: "14px",
};

export default Navbar;