import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import ApiCard from "./components/ApiCard";
import Footer from "./components/Footer";

const cards = [
  { title: "Get All Products", description: "Fetch all products list.", endpoint: "/products/", icon: "🛍️" },
  { title: "Get Single Product", description: "Fetch a product by ID.", endpoint: "/products/1/", icon: "📱" },
  { title: "Get All Categories", description: "Fetch all categories list.", endpoint: "/products/category/", icon: "📋" },
  { title: "Get Products by Category", description: "Fetch products by category.", endpoint: "/products/category/electronics/", icon: "🏷️" },
  { title: "Get Cart Details", description: "Fetch user cart details.", endpoint: "/cart/", icon: "🛒" },
];

const docCards = [
  {
    title: "API Documentation",
    description: "Learn how to use the API.",
    endpoint: "",
    icon: "📄",
    buttonText: "View Docs",
    buttonColor: "#1a73e8",
    isDoc: true,
  },
  {
    title: "API Status",
    description: "API is Up and Running.",
    endpoint: "/status/",
    icon: "🟢",
    buttonText: "Check Status",
    buttonColor: "#28a745",
    isDoc: false,
  },
];

function App() {
  return (
    <div style={appStyle}>
      <div style={containerStyle}>
        <Navbar />
        <HeroBanner />
        <div style={bodyStyle}>
          <div style={gridStyle}>
            {cards.map((card) => (
              <ApiCard key={card.title} {...card} />
            ))}
          </div>
          <div style={grid2Style}>
            {docCards.map((card) => (
              <ApiCard key={card.title} {...card} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

const appStyle: React.CSSProperties = {
  backgroundColor: "#dce8f5",
  minHeight: "100vh",
  padding: "24px",
  boxSizing: "border-box",
};

const containerStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
  borderRadius: "20px",
  maxWidth: "960px",
  margin: "0 auto",
  overflow: "hidden",
};

const bodyStyle: React.CSSProperties = {
  padding: "24px",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
  marginBottom: "16px",
};

const grid2Style: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "16px",
  marginBottom: "16px",
};

export default App;