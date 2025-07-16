/** @type {import('next').NextConfig} */
const nextConfig = {
  //dışarıdan resim aldığımda burayı kullanıyorum
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "", //gerek yok
        pathname: "/**", // tüm yolları kapsar, yazilmasa da olur
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
    ],
  },
};

export default nextConfig;
