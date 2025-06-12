import { TextImage, TextImageContent, TextImageDescription, TextImageTitle } from "@/components/ui/textImage";
import img1 from '@/assets/JT6878.jpg'
import img2 from '@/assets/1.webp'
import img3 from '@/assets/3D-modelirovanie-mototsikla.png'
import img4 from '@/assets/hq720.jpg'
import img5 from '@/assets/20210113_170427.jpg'
import img6 from '@/assets/18_teach.jpg'
import img7 from '@/assets/howtopaychinesesuppliersbybanktransfertt.jpg'
import img8 from '@/assets/156618248-carte-avec-vol-d-avions-voyagez-dans-le-monde-en-avion-route-de-la-compagnie-aérienne-avec-trajectoi.jpg'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <main className="sm:p-10">
        <div className="flex justify-between max-sm:flex-col w-full">
          <TextImage className="min-md:m-[10px] max-sm:h-[300px]">
            <img className="inset-0 w-full h-full object-cover" src={img1} alt="Random image" />
            <div className="absolute inset-0 bg-gray-700 opacity-60" />
            <TextImageContent>
              <TextImageTitle>{t('main.title.title1')}</TextImageTitle>
            </TextImageContent>
          </TextImage>

          <TextImage className="max-sm:mt-[10px] min-md:m-[10px] max-sm:h-[300px]">
            <img className="h-64 w-full h-full object-cover" src={img2} alt="Random image" />
            <div className="absolute inset-0 bg-gray-700 opacity-60" />
            <TextImageContent>
              <TextImageTitle>{t('main.title.title2')}</TextImageTitle>
            </TextImageContent>
          </TextImage>
        </div>

        <div className="flex flex-col items-center justify-center mt-10 px-2 sm:px-0">
          <div className="mt-6 m-auto space-y-6 w-full sm:w-8/12 md:w-7/12">
            <h1
              className="text-center text-3xl max-sm:text-2xl sm:text-4xl md:text-5xl font-bold text-black">
              {t('main.dream.title')}
            </h1>

          </div>
          <div className="mt-6 m-auto space-y-6 w-full sm:w-9/12 md:w-11/12">
            <p className="text-center text-2xl max-sm:text-base text-black">
              {t('main.dream.description')}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center mt-10 px-2 sm:px-0">
          <div className="mt-6 m-auto space-y-6 w-full sm:w-8/12 md:w-7/12">
            <h1
              className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-black">
              {t('main.workPlan.title')}
            </h1>
          </div>
        </div>

        <div className="flex justify-between  max-sm:justify-center max-sm:m-auto max-sm:flex-col w-full max-sm:w-12/12">
          <TextImage className="h-[20vw] max-sm:h-[25vw] m-[10px]">
            <img className="w-full h-full object-cover" src={img3} alt="Random image" />
            <div className="absolute inset-0 bg-gray-700 opacity-60" />
            <TextImageContent>
              <TextImageTitle className="max-md:text-3xl md:text-3xl lg:text-5xl">{t('main.workPlan.picture1.title')}</TextImageTitle>
              <TextImageDescription>{t('main.workPlan.picture1.description')} </TextImageDescription>
            </TextImageContent>
          </TextImage>

          <TextImage className="h-[20vw] max-sm:h-[25vw] m-[10px]">
            <img className="h-64 w-full h-full object-cover" src={img4} alt="Random image" />
            <div className="absolute inset-0 bg-gray-700 opacity-60" />
            <TextImageContent>
              <TextImageTitle className="max-md:text-3xl md:text-3xl lg:text-5xl">{t('main.workPlan.picture2.title')}</TextImageTitle>
              <TextImageDescription>{t('main.workPlan.picture2.description')}</TextImageDescription>
            </TextImageContent>
          </TextImage>

          <TextImage className="h-[20vw] max-sm:h-[25vw] m-[10px]">
            <img className="h-64 w-full h-full object-cover" src={img5} alt="Random image" />
            <div className="absolute inset-0 bg-gray-700 opacity-60" />
            <TextImageContent>
              <TextImageTitle className="max-md:text-3xl md:text-3xl lg:text-5xl">{t('main.workPlan.picture3.title')}</TextImageTitle>
              <TextImageDescription>{t('main.workPlan.picture3.description')}</TextImageDescription>
            </TextImageContent>
          </TextImage>
        </div>

        <div className="flex items-center justify-center mt-10 px-2 sm:px-0">
          <div className="mt-6 m-auto space-y-6 w-full sm:w-8/12 md:w-7/12">
            <h1
              className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-black">
              {t('main.whyWe.title')}
            </h1>
          </div>
        </div>


        <div className="flex justify-between max-sm:justify-center max-sm:m-auto max-sm:flex-col  w-full max-sm:w-12/12">
          <TextImage className="h-[20vw] max-sm:h-[25vw] m-[10px]">
            <img className="inset-0 w-full h-full object-cover" src={img6} alt="Random image" />
            <div className="absolute inset-0 bg-gray-700 opacity-60" />
            <TextImageContent>
              <TextImageDescription className="text-2xl sm:text-base md:text-2xl lg:text-3xl">{t('main.whyWe.picture1.title')}</TextImageDescription>
            </TextImageContent>
          </TextImage>

          <TextImage className="h-[20vw] max-sm:h-[25vw] m-[10px]">
            <img className="h-64 w-full h-full object-cover" src={img7} alt="Random image" />
            <div className="absolute inset-0 bg-gray-700 opacity-60" />
            <TextImageContent>
              <TextImageDescription className="text-2xl sm:text-base md:text-2xl lg:text-3xl">{t('main.whyWe.picture2.title')}</TextImageDescription>
            </TextImageContent>
          </TextImage>

          <TextImage className="h-[20vw] max-sm:h-[25vw] m-[10px]">
            <img className="h-64 w-full h-full object-cover" src={img8} alt="Random image" />
            <div className="absolute inset-0 bg-gray-700 opacity-60" />
            <TextImageContent>
              <TextImageDescription className="text-2xl sm:text-base md:text-2xl lg:text-3xl">{t('main.whyWe.picture3.title')}</TextImageDescription>
            </TextImageContent>
          </TextImage>
        </div>

        <div className="flex items-center justify-center mt-10 px-2 sm:px-0">
          <div className="mt-6 m-auto space-y-6 w-full sm:w-8/12 md:w-7/12">
            <h1
              className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-black">
              {t('main.printMaterial.title')}
            </h1>
          </div>
        </div>

        <div className="flex justify-between sm:justify-center flex-wrap mt-10 px-2 sm:px-0">
          <div className="flex flex-col items-center justify-center mx-10 sm:px-0 sm:w-8/12 md:w-3/12">
            <div className="mt-6 m-auto space-y-6 w-full ">
              <h1
                className="text-center text-3xl font-bold text-black">
                {t('main.printMaterial.material1.title')}
              </h1>

            </div>
            <div className="mt-6 m-auto space-y-6 w-full">
              <p className="text-center text-2xl 1x1 text-black">
                {t('main.printMaterial.material1.description')}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mx-10 sm:px-0 sm:w-8/12 md:w-3/12">
            <div className="mt-6 m-auto space-y-6 w-full ">
              <h1
                className="text-center text-3xl font-bold text-black">
                {t('main.printMaterial.material2.title')}
              </h1>

            </div>
            <div className="mt-6 m-auto space-y-6 w-full">
              <p className="text-center text-2xl  text-black">
                {t('main.printMaterial.material2.description')}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mx-10 sm:px-0 sm:w-8/12 md:w-3/12">
            <div className="mt-6 m-auto space-y-6 w-full ">
              <h1
                className="text-center text-3xl font-bold text-black">
                {t('main.printMaterial.material3.title')}
              </h1>

            </div>
            <div className="mt-6 m-auto space-y-6 w-full">
              <p className="text-center text-2xl 1x1 text-black">
                {t('main.printMaterial.material3.description')}
              </p>
            </div>
          </div>
        </div>

        <div className="h-[80px] mt-10 max-sm:px-10">
          <Link to="/contacts">
            <button
              type="button"
              className="h-full w-full bg-[#93ADAA] rounded text-white text-2xl">
              {t('main.contactUs')}
            </button>
          </Link>
        </div>

      </main >
    </>
  );
};

export default Index;
