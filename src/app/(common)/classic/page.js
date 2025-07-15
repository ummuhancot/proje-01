import { wait } from '@/helpers/functions';
import React from 'react'

const page = async () => {
//burda function kısmının wait ini carıp calıştırdım
  await wait(5000)

  return (
    <div className="mt-5 mb-5 d-flex flex-column align-items-center justify-content-center text-center color-white">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <img
          src="/minato/MinatoWelcome.jpeg"
          alt="Welcome"
          style={{
            width: "84px",
            height: "84px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid #FFD600",
          }}
        />
        <div
          style={{
            backgroundColor: "#000000a0",
            color: "white",
            padding: "10px",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "200px",
            height: "100px",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.2rem",
            boxShadow: "0px 0px 3px 5px #FFD600",
            animation: "rot55 0.7s linear infinite"
             
          }}
        >
          <div
            style={{ fontWeight: "bold", fontSize: "1.2rem", color: "white" }}
          >
            港
          </div>
          <div style={{ color: "#666", fontSize: "0.95rem", color: "white" }}>
            ありがとうありがとう!
          </div>
        </div>
      </div>
    </div>
  );
}

export default page