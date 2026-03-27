import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const ApiKey = () => {
  const [apiKey, setApiKey] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const generateKey = () => {
    const key = "fs_" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    setApiKey(key);
    setCopied(false);
  };

  const copyKey = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <Navbar />
        <div style={bodyStyle}>
          <h1 style={headingStyle}>🔑 API Key</h1>
          <p style={subStyle}>Generate your personal API key to access Fake Store API.</p>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Your API Key</h3>
            <hr style={hrStyle} />

            {apiKey ? (
              <div style={keyBoxStyle}>
                <code style={keyTextStyle}>{apiKey}</code>
                <button onClick={copyKey} style={copyBtnStyle}>
                  {copied ? "✅ Copied!" : "📋 Copy"}
                </button>
              </div>
            ) : (
              <p style={placeholderStyle}>No API key generated yet.</p>
            )}

            <button onClick={generateKey} style={generateBtnStyle}>
              🔄 Generate New Key
            </button>
          </div>

          <div style={infoCardStyle}>
            <h3 style={cardTitleStyle}>📌 How to use your API Key</h3>
            <hr style={hrStyle} />
            <p style={infoTextStyle}>Include your API key in request headers:</p>
            <pre style={preStyle}>{`fetch("https://fakestore-api.com/products/", {
  headers: {
    "Authorization": "Bearer YOUR_API_KEY"
  }
})`}</pre>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

const pageStyle: React.CSSProperties = { backgroundColor: "#dce8f5", minHeight: "100vh", padding: "24px" };
const containerStyle: React.CSSProperties = { backgroundColor: "#ffffff", borderRadius: "20px", maxWidth: "960px", margin: "0 auto", overflow: "hidden" };
const bodyStyle: React.CSSProperties = { padding: "32px" };
const headingStyle: React.CSSProperties = { fontSize: "28px", fontWeight: "bold", color: "#1a1a2e", marginBottom: "8px" };
const subStyle: React.CSSProperties = { color: "#666", fontSize: "15px", marginBottom: "32px" };
const cardStyle: React.CSSProperties = { border: "1px solid #eee", borderRadius: "12px", padding: "24px", marginBottom: "24px" };
const infoCardStyle: React.CSSProperties = { border: "1px solid #eee", borderRadius: "12px", padding: "24px" };
const cardTitleStyle: React.CSSProperties = { fontSize: "18px", fontWeight: "bold", color: "#1a1a2e", marginBottom: "8px" };
const hrStyle: React.CSSProperties = { border: "none", borderTop: "1px solid #eee", margin: "12px 0" };
const keyBoxStyle: React.CSSProperties = { display: "flex", alignItems: "center", gap: "12px", backgroundColor: "#f4f4f4", padding: "12px", borderRadius: "8px", marginBottom: "16px" };
const keyTextStyle: React.CSSProperties = { flex: 1, fontSize: "14px", wordBreak: "break-all", fontFamily: "monospace" };
const copyBtnStyle: React.CSSProperties = { backgroundColor: "#1a73e8", color: "#fff", border: "none", padding: "8px 16px", borderRadius: "6px", cursor: "pointer", fontWeight: "bold", whiteSpace: "nowrap" };
const placeholderStyle: React.CSSProperties = { color: "#999", fontStyle: "italic", marginBottom: "16px" };
const generateBtnStyle: React.CSSProperties = { backgroundColor: "#e8622a", color: "#fff", border: "none", padding: "12px 24px", borderRadius: "8px", cursor: "pointer", fontWeight: "bold", fontSize: "15px", width: "100%" };
const infoTextStyle: React.CSSProperties = { color: "#666", fontSize: "14px", marginBottom: "12px" };
const preStyle: React.CSSProperties = { backgroundColor: "#f4f4f4", padding: "12px", borderRadius: "8px", fontSize: "13px", overflowX: "auto" };

export default ApiKey;
