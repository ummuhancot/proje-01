import { Lexend, Nunito, Moo_Lah_Lah, Barriecito } from "next/font/google";

//eger butun lexend turevlerini istiyorsak
// const lexend = Lexend();
export const lexend = Lexend({
  subsets: ["latin-ext"],
  weight: ["300", "400", "700"],
  variable: "--font-lexend",
});

export const nunito = Nunito({
  subsets: ["latin-ext"],
  weight: ["300", "400", "700"],
  variable: "--font-nunito",
});

export const mooLahLah = Moo_Lah_Lah({
  subsets: ["latin"],
  weight: ["400"], // bu font sadece 400 ağırlıkta geliyor
  variable: "--font-moolahlah", // ✅ NOKTA değil TİRE
});

export const barriecito = Barriecito({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-barriecito", // ✅ HATA DÜZELTİLDİ
});

