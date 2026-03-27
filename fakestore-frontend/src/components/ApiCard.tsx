import { useState } from "react";
import axios from "axios";

interface ApiCardProps {
  title: string;
  description: string;
  endpoint: string;
  icon: string;
  buttonText?: string;
  buttonColor?: string;
  isDoc?: boolean;
}

const ApiCard = ({
  title,
  description,
  endpoint,
  icon,
  buttonText = "Try It Out",
  buttonColor = "#e8622a",
  isDoc = false,
}: ApiCardProps) => {
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (isDoc) {
      window.location.href = "/docs";
      return;
    }
    setLoading(true);
    try {
      const res = await axios.get(`http://127.0.0.1:8000${endpoint}`);
      setResult(JSON.stringify(res.data, null, 2));
    } catch {
      setResult("Error fetching data!");
    }
    setLoading(false);
  };

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        <span style={iconStyle}>{icon}</span>
        <h3 style={titleStyle}>{title}</h3>
      </div>
      <hr style={hrStyle} />
      <p style={descStyle}>{description}</p>
      <button
        onClick={handleClick}
        style={{ ...btnStyle, backgroundColor: buttonColor }}
      >
        {loading ? "Loading..." : buttonText}
      </button>
      {result && (
        <div style={scrollWrapperStyle}>
          <pre style={preStyle}>{result}</pre>
        </div>
      )}
    </div>
  );
};

const cardStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  padding: "20px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  boxSizing: "border-box",
  width: "100%",
  minWidth: 0,
};

const headerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "8px",
};

const iconStyle: React.CSSProperties = {
  fontSize: "26px",
  flexShrink: 0,
};

const titleStyle: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#1a1a2e",
  margin: 0,
  wordBreak: "break-word",
};

const hrStyle: React.CSSProperties = {
  border: "none",
  borderTop: "1px solid #eee",
  margin: "10px 0",
};

const descStyle: React.CSSProperties = {
  color: "#666",
  fontSize: "14px",
  marginBottom: "16px",
};

const btnStyle: React.CSSProperties = {
  color: "#ffffff",
  border: "none",
  padding: "10px 0",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "15px",
  width: "100%",
  display: "block",
};

const scrollWrapperStyle: React.CSSProperties = {
  marginTop: "12px",
  width: "100%",
  overflow: "hidden",
  borderRadius: "8px",
  border: "1px solid #e0e0e0",
};

const preStyle: React.CSSProperties = {
  backgroundColor: "#f4f4f4",
  padding: "12px",
  fontSize: "12px",
  maxHeight: "200px",
  overflowX: "auto",
  overflowY: "auto",
  margin: 0,
  whiteSpace: "pre",
  wordBreak: "normal",
  WebkitOverflowScrolling: "touch",
};

export default ApiCard;