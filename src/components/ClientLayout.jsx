"use client";

import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const hideLayout = pathname === "/login" || pathname === "/signup";

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      <Toaster position="top-right" />
      {!hideLayout && <Footer />}
    </>
  );
}
