"use client";
import { useState } from "react";
import { ScaleLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(true);  // State to control loading visibility
  const [color, setColor] = useState("#00ffee");  // Initial color of the loader
  const [size, setSize] = useState(35);           // Initial size of the loader

  // Custom override styles for the loader
  const customStyles = {
    display: "block",
    margin: "0 auto", // Centers the loader
    borderColor: "blue", // Optional: Change the color of the loader's border if needed
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      {/* Button to toggle loading state */}
      <button 
        onClick={() => setLoading(!loading)} 
        style={{ padding: "10px 20px", fontSize: "16px", marginBottom: "20px" }}>
        Toggle Loader
      </button>

      {/* Input to change the loader's color dynamically */}
      <input
        value={color}
        onChange={(e) => setColor(e.target.value)}  // Update loader color
        placeholder="Enter loader color (e.g.,rgb(0, 255, 238))"
        style={{
          padding: "10px", 
          fontSize: "16px", 
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
      />

      {/* Input to change the loader's size dynamically */}
      <input
        type="number"
        value={size}
        onChange={(e) => setSize(Number(e.target.value))}  // Update loader size
        placeholder="Enter loader size (e.g., 35)"
        style={{
          padding: "10px",
          fontSize: "16px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
      />

      {/* Custom ScaleLoader component */}
      <ScaleLoader
        color={color}       // Dynamic color
        loading={loading}   // Show/hide loader based on state
        size={size}         // Dynamic size
        cssOverride={customStyles}  // Apply custom CSS styles
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default App;
