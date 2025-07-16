import Image from 'next/image'
import React from 'react'
import minoo from "@/../public/minato/mino1.jpg";

const Minato = () => {
  return (
    <div>
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

      <Image
        src={
          "https://i.pinimg.com/1200x/bf/ac/8b/bfac8b5d171d303315d3d00aa2881671.jpg"
        }
        alt="minato"
        height={300}
        width={200}
        className="img-fuild"
      />

      <Image
        src={
          "https://i.pinimg.com/736x/41/49/bf/4149bff20c78f664395e0749db6bb29a.jpg"
        }
        alt="minato1"
        height={300}
        width={200}
        className="img-fuild"
      />
    </div>
  );
}

export default Minato