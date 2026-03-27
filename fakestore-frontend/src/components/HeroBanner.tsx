const HeroBanner = () => {
  return (
    <div style={bannerStyle}>
      <div style={textStyle}>
        <h1 style={headingStyle}>Welcome to Fake Store API</h1>
        <p style={subStyle}>Manage and test your APIs easily.</p>
      </div>
      <div style={imageStyle}>
        🛍️
      </div>
    </div>
  );
};

const bannerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#eef4ff",
  padding: "48px 32px",
  borderRadius: "16px",
  margin: "24px",
};

const textStyle: React.CSSProperties = {
  flex: 1,
};

const headingStyle: React.CSSProperties = {
  fontSize: "32px",
  fontWeight: "bold",
  color: "#1a1a2e",
  marginBottom: "12px",
};

const subStyle: React.CSSProperties = {
  fontSize: "16px",
  color: "#555",
};

const imageStyle: React.CSSProperties = {
  fontSize: "120px",
};

export default HeroBanner;