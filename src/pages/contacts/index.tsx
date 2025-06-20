import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


const Contacts = () => {
  const { t, i18n } = useTranslation();
  return (
    <main className="p-10 h-full w-full flex justify-center">
      <div className="flex justify-center flex-col w-full h-full">
        <h1 className="text-center text-4xl font-bold text-black">{t("contacts.title")}</h1>
        <div className="flex justify-center mt-10 w-lx max-sm:flex-col">
          <div className="flex flex-col mx-[25px]">
            <h2 className="w-full text-center text-3xl font-bold text-black">{t("contacts.schedule.title")}</h2>
            <p className="w-full text-center mt-5">{t("contacts.schedule.description")}</p>
          </div>

          <div className="flex flex-col mx-[25px] max-sm:mt-10">
            <h2 className="w-full text-center text-3xl font-bold text-black">{t("contacts.socials.title")}</h2>
            <p className="w-full text-center mt-5">
              {t("contacts.socials.phone")}: <Link to={'tel:8800553535'} ><span className="text-[#93ADAA]">+8800553535</span></Link><br />
              {t("contacts.socials.Email")}: <Link to={'mailto:Imprax3D@gmail.com'} ><span className="text-[#93ADAA]">Imprax3D@gmail.com</span></Link> <br />
              {t("contacts.socials.WhatsApp")}: <Link to={'https://wa.me/8800553535'} ><span className="text-[#93ADAA]">+8800553535</span></Link><br />
              {t("contacts.socials.Instagram")}: <Link to={'https://www.instagram.com/imprax3d/profilecard/?igsh=cjl2YjlyNmJlOGI0'} ><span className="text-[#93ADAA]">imprax3d</span></Link> <br />
              {t("contacts.socials.TikTok")}: <Link to={'https://www.tiktok.com/@imprax3d?_t=ZN-8wiHwH34M78&_r=1'} ><span className="text-[#93ADAA]">@imprax3d</span></Link>
            </p>
          </div>
        </div>
      </div>
    </main >
  );
};

export default Contacts;
