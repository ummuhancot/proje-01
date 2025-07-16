import Slider from '@/components/slider-carousel';
import React from 'react'

const Page = () => {
  return (
    // slider-carousel kısmını buraya koydum 
    <div>


    <Slider/>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <img
          src="/minato/sweetMinato.jpeg"
          alt="Welcome"
          style={{
            width: "84px",
            height: "84px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "1px solid #FFD600",
          }}
        />
        <div className="welcome" style={{marginTop:"30px",marginBottom:"30px"}}>
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
