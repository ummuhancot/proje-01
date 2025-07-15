import React from 'react';

const Page = () => {
  return (
    <div className='mb-5'>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
            backgroundColor: "#000000a0",
            color: "white",
            padding: "10px",
            borderRadius: "8px",
            flexDirection: "row",
            justifyContent: "center",
            width: "300px",
            height: "110px",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.2rem",
            boxShadow: "0px 0px 3px 5px #FFD600",
            animation: "rot55 0.7s linear infinite"
             
         
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
          <div style={{ color: "white", fontSize: "0.95rem" }}>
            ありがとうありがとう!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page