import { SocialBar } from "@/components/common/SocialBar";

const Footer = () => {
  return (
    <footer className="text-base max-sm:py-3 text-[#eee] flex h-16 max-sm:h-20 items-center gap-4 border-b px-4 md:px-6 z-50 shadow-sm bg-black max-sm: mt-10">
      <div className="flex justify-between items-center w-full max-sm:h-full">
        <div className="">Imprax3D</div>
        <div className="sm:hidden flex flex-col justify-between items-end h-full">
          <SocialBar />
          <div className="">Tel: +8800553535</div>
        </div>

        <SocialBar className="max-sm:hidden" />
        <div className="max-sm:hidden">Tel: +8800553535</div>
      </div>
    </footer>
  );
};

export default Footer;
