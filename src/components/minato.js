import Image from 'next/image'
import React from 'react'
import minoo from "@/../public/minato/mino1.jpg";

const Minato = () => {
  return (
    <div  >
        
      <Image
        className="m-4"
        style={{ borderRadius: "2px" }}
        src={minoo}
        alt="minato"
        height={300}
        width={200}
      />

      <Image
        className="m-4"
        style={{ borderRadius: "2px" }}
        src={minoo}
        alt="minato"
        height={300}
        width={200}
      />

      <Image
        className="m-4"
        style={{ borderRadius: "2px" }}
        src={minoo}
        alt="minato"
        height={300}
        width={200}
      />

      <Image
        className="m-4"
        style={{ borderRadius: "2px" }}
        src={minoo}
        alt="minato"
        height={300}
        width={200}
      />

      <Image
        className="m-4"
        style={{ borderRadius: "2px" }}
        src={minoo}
        alt="minato"
        height={300}
        width={200}
      />
    </div>
  );
}

export default Minato