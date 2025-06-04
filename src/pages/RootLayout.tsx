import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import { SocialSideBar } from "@/components/common/SocialSideBar";
import { Outlet } from "react-router";

export const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Navbar />
      <Outlet />
      <SocialSideBar />
      <Footer />
    </div>
  );
};
