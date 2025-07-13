import React from 'react';

const Page = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <img
          src="/minato/Welcome.png"
          alt="Welcome"
          style={{
            width: "84px",
            height: "84px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "1px solid #FFD600",
          }}
        />
        <div>
          <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>港</div>
          <div style={{ color: "#666", fontSize: "0.95rem" }}>
            ありがとうありがとう!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page