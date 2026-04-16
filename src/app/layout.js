
import { Geist } from "next/font/google"
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Provider from "./lib/providers";
import { ToastContainer } from "react-toastify";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper",
  description: "Friendship tracking app",
  icons: {
    icon: "/icon.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en" 
      className={`${geist.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
        
   
      <Provider>

              <Navbar></Navbar>
        {children}
         <Footer></Footer>
          <ToastContainer position="top-center" />
         
      </Provider>
         
     
       
        </body>
    </html>
  );
}
