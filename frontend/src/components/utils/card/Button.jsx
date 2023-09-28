const Button = ({ children }) => {
  return (
    <button
      style={{
        background: "#007bff",
        color: "#fff",
        padding: "5px 10px",
        border: "none",
        cursor: "pointer",
        borderRadius: "5px",
        outline: "1px solid #ccc",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
