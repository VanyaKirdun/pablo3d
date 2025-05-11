import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import { Outlet } from "react-router";

export const RootLayout = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
