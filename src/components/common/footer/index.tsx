import { SocialBar } from "../socialBar";

const Footer = () => {
  return (
    <footer className="text-base text-[#eee] flex h-16 items-center gap-4 border-b px-4 md:px-6 z-50 shadow-sm bg-black">
      <div className="flex justify-between w-full">
        <div className="">Pablo3D</div>
        <SocialBar />
        <div className="">Tel: +8800553535</div>
      </div>
    </footer>
  );
};

export default Footer;
