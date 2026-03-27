const Docs = () => {
  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>📄 API Documentation</h1>
        <p style={subStyle}>Complete guide to use Fake Store API</p>

        {endpoints.map((ep) => (
          <div key={ep.path} style={cardStyle}>
            <div style={cardHeaderStyle}>
              <span style={{ ...methodStyle, backgroundColor: methodColors[ep.method] }}>
                {ep.method}
              </span>
              <code style={pathStyle}>{ep.path}</code>
            </div>
            <p style={descStyle}>{ep.description}</p>
            {ep.example && (
              <pre style={preStyle}>{ep.example}</pre>
            )}
          </div>
        ))}

        <button style={backBtnStyle} onClick={() => window.history.back()}>
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
};

const endpoints = [
  { method: "GET", path: "/products/", description: "Fetch all products list.", example: '[\n  { "id": 1, "title": "iPhone 14", "price": 999.99 }\n]' },
  { method: "GET", path: "/products/<id>/", description: "Fetch a single product by ID.", example: '{ "id": 1, "title": "iPhone 14", "price": 999.99 }' },
  { method: "POST", path: "/products/", description: "Add a new product.", example: '{\n  "title": "New Product",\n  "price": 99.99,\n  "category": "electronics",\n  "description": "...",\n  "image": "url",\n  "rate": 4.5,\n  "count": 10\n}' },
  { method: "PUT", path: "/products/", description: "Update a product completely.", example: '{ "id": 1, "title": "Updated", "price": 199.99 }' },
  { method: "PATCH", path: "/products/", description: "Partially update a product.", example: '{ "id": 1, "price": 149.99 }' },
  { method: "DELETE", path: "/products/", description: "Delete a product by ID.", example: '{ "id": 1 }' },
  { method: "GET", path: "/products/category/", description: "Fetch all categories list.", example: '["electronics", "clothing", "jewelery"]' },
  { method: "GET", path: "/products/category/<name>/", description: "Fetch products by category.", example: '[\n  { "id": 1, "title": "iPhone 14", "category": "electronics" }\n]' },
  { method: "GET", path: "/cart/", description: "Fetch all carts.", example: '[{ "id": 1, "user": 1, "date": "2024-01-01" }]' },
  { method: "POST", path: "/cart/", description: "Create a new cart.", example: '{ "user": 1 }' },
  { method: "GET", path: "/status/", description: "Check API status.", example: '{ "status": "online", "message": "API is Up and Running!" }' },
  { method: "POST", path: "/signup/", description: "Register a new user.", example: '{ "username": "ali", "email": "ali@gmail.com", "password": "1234" }' },
  { method: "POST", path: "/login/", description: "Login with credentials.", example: '{ "username": "ali", "password": "1234" }' },
];

const methodColors: Record<string, string> = {
  GET: "#28a745",
  POST: "#1a73e8",
  PUT: "#e8622a",
  PATCH: "#f0ad4e",
  DELETE: "#dc3545",
};

const pageStyle: React.CSSProperties = {
  backgroundColor: "#dce8f5",
  minHeight: "100vh",
  padding: "24px",
};

const containerStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
  borderRadius: "20px",
  maxWidth: "960px",
  margin: "0 auto",
  padding: "32px",
};

const headingStyle: React.CSSProperties = {
  fontSize: "28px",
  fontWeight: "bold",
  color: "#1a1a2e",
  marginBottom: "8px",
};

const subStyle: React.CSSProperties = {
  color: "#666",
  fontSize: "15px",
  marginBottom: "32px",
};

const cardStyle: React.CSSProperties = {
  border: "1px solid #eee",
  borderRadius: "10px",
  padding: "16px",
  marginBottom: "16px",
};

const cardHeaderStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "8px",
};

const methodStyle: React.CSSProperties = {
  color: "#fff",
  padding: "4px 12px",
  borderRadius: "6px",
  fontWeight: "bold",
  fontSize: "13px",
};

const pathStyle: React.CSSProperties = {
  fontSize: "15px",
  color: "#333",
  fontFamily: "monospace",
};

const descStyle: React.CSSProperties = {
  color: "#666",
  fontSize: "14px",
  marginBottom: "8px",
};

const preStyle: React.CSSProperties = {
  backgroundColor: "#f4f4f4",
  padding: "10px",
  borderRadius: "6px",
  fontSize: "12px",
  overflowX: "auto",
  margin: 0,
};

const backBtnStyle: React.CSSProperties = {
  backgroundColor: "#1a73e8",
  color: "#fff",
  border: "none",
  padding: "12px 24px",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "15px",
  marginTop: "16px",
};

export default Docs;
