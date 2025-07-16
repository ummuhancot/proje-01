import { Lexend, Nunito } from "next/font/google";

export const lexend = Lexend({
  subsets: ["latin-ext"],
  weight: ["300", "400", "700"],
  variable: "--font-lexend",
});

//eger butun lexend turevlerini istiyorsak
// const lexend = Lexend();

export const nunito = Nunito({
  subsets: ["latin-ext"],
  weight: ["300", "400", "700"],
  variable: "--font-nunito",
});
