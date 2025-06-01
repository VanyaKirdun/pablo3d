import { TextImage, TextImageContent, TextImageDescription, TextImageTitle } from "@/components/ui/textImage";
import img1 from '@/assets/JT6878.jpg'
import img2 from '@/assets/1.webp'
import img3 from '@/assets/3D-modelirovanie-mototsikla.png'
import img4 from '@/assets/hq720.jpg'
import img5 from '@/assets/20210113_170427.jpg'
import img6 from '@/assets/18_teach.jpg'
import img7 from '@/assets/howtopaychinesesuppliersbybanktransfertt.jpg'
import img8 from '@/assets/156618248-carte-avec-vol-d-avions-voyagez-dans-le-monde-en-avion-route-de-la-compagnie-aérienne-avec-trajectoi.jpg'

const Index = () => {
  return (
    <>
      <main className="sm:p-10">
        <div className="flex justify-between max-sm:flex-col w-full">
          <TextImage className="min-md:m-[10px] max-sm:h-[300px]">
            <img className="inset-0 w-full h-full object-cover" src={img1} alt="Random image" />
            <div className="absolute inset-0 bg-gray-700 opacity-60" />
            <TextImageContent>
              <TextImageTitle>3D печать</TextImageTitle>
            </TextImageContent>
          </TextImage>

          <TextImage className="max-sm:mt-[10px] min-md:m-[10px] max-sm:h-[300px]">
            <img className="h-64 w-full h-full object-cover" src={img2} alt="Random image" />
            <div className="absolute inset-0 bg-gray-700 opacity-60" />
            <TextImageContent>
              <TextImageTitle>На любой вкус</TextImageTitle>
            </TextImageContent>
          </TextImage>
        </div>

        <div className="flex flex-col items-center justify-center mt-10 px-2 sm:px-0">
          <div className="mt-6 m-auto space-y-6 w-full sm:w-8/12 md:w-7/12">
            <h1
              className="text-center text-3xl max-sm:text-2xl sm:text-4xl md:text-5xl font-bold text-black">
              Мечтаете создать свою 3D фигурку?
            </h1>

          </div>
          <div className="mt-6 m-auto space-y-6 w-full sm:w-9/12 md:w-11/12">
            <p className="text-center text-2xl max-sm:text-base text-black">
              Мы предлагаем печать различных 3D фигур на ваш выбор. Начиная от пластиковых деталей как для автомобилей и резличной техники, до украшений и миниатюр из игры, фильмов или из вашей фантазии.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center mt-10 px-2 sm:px-0">
          <div className="mt-6 m-auto space-y-6 w-full sm:w-8/12 md:w-7/12">
            <h1
              className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-black">
              Как работаем?
            </h1>
          </div>
        </div>

        <div className="flex justify-between  max-sm:justify-center max-sm:m-auto max-sm:flex-col  w-full max-sm:w-12/12">
          <TextImage className="h-[20vw] max-sm:h-[25vw] m-[10px]">
            <img className="w-full h-full object-cover" src={img3} alt="Random image" />
            <div className="absolute inset-0 bg-gray-700 opacity-60" />
            <TextImageContent>
              <TextImageTitle>Моделируем</TextImageTitle>
              <TextImageDescription>Присылаете свою идею и мы создаем 3д модель. </TextImageDescription>
            </TextImageContent>
          </TextImage>

          <TextImage className="h-[20vw] max-sm:h-[25vw] m-[10px]">
            <img className="h-64 w-full h-full object-cover" src={img4} alt="Random image" />
            <div className="absolute inset-0 bg-gray-700 opacity-60" />
            <TextImageContent>
              <TextImageTitle>3D печать</TextImageTitle>
              <TextImageDescription>Отправляем погдготовленную модель на печать.</TextImageDescription>
            </TextImageContent>
          </TextImage>

          <TextImage className="h-[20vw] max-sm:h-[25vw] m-[10px]">
            <img className="h-64 w-full h-full object-cover" src={img5} alt="Random image" />
            <div className="absolute inset-0 bg-gray-700 opacity-60" />
            <TextImageContent>
              <TextImageTitle>Готово</TextImageTitle>
              <TextImageDescription>Покраска и подготовка модели к отправке.</TextImageDescription>
            </TextImageContent>
          </TextImage>
        </div>

        <div className="flex items-center justify-center mt-10 px-2 sm:px-0">
          <div className="mt-6 m-auto space-y-6 w-full sm:w-8/12 md:w-7/12">
            <h1
              className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-black">
              Почему мы?
            </h1>
          </div>
        </div>


        <div className="flex justify-between max-sm:justify-center max-sm:m-auto max-sm:flex-col  w-full max-sm:w-12/12">
          <TextImage className="h-[20vw] max-sm:h-[25vw] m-[10px]">
            <img className="inset-0 w-full h-full object-cover" src={img6} alt="Random image" />
            <div className="absolute inset-0 bg-gray-700 opacity-60" />
            <TextImageContent>
              <TextImageDescription className="text-3xl max-md:text-2xl max-sm:text-1xl">Консультируем на протяжении всех стадий работы. </TextImageDescription>
            </TextImageContent>
          </TextImage>

          <TextImage className="h-[20vw] max-sm:h-[25vw] m-[10px]">
            <img className="h-64 w-full h-full object-cover" src={img7} alt="Random image" />
            <div className="absolute inset-0 bg-gray-700 opacity-60" />
            <TextImageContent>
              <TextImageDescription className="text-3xl max-md:text-2xl max-sm:text-1xl">Стоимость ниже чем у конкурентов.</TextImageDescription>
            </TextImageContent>
          </TextImage>

          <TextImage className="h-[20vw] max-sm:h-[25vw] m-[10px]">
            <img className="h-64 w-full h-full object-cover" src={img8} alt="Random image" />
            <div className="absolute inset-0 bg-gray-700 opacity-60" />
            <TextImageContent>
              <TextImageDescription className="text-3xl max-md:text-2xl max-sm:text-1xl">Обширная сеть доставки по всему миру.</TextImageDescription>
            </TextImageContent>
          </TextImage>
        </div>

        <div className="flex items-center justify-center mt-10 px-2 sm:px-0">
          <div className="mt-6 m-auto space-y-6 w-full sm:w-8/12 md:w-7/12">
            <h1
              className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-black">
              Чем печатаем?
            </h1>
          </div>
        </div>

        <div className="flex justify-between sm:justify-center flex-wrap mt-10 px-2 sm:px-0">
          <div className="flex flex-col items-center justify-center mx-10 sm:px-0 sm:w-8/12 md:w-3/12">
            <div className="mt-6 m-auto space-y-6 w-full ">
              <h1
                className="text-center text-3xl font-bold text-black">
                PLA
              </h1>

            </div>
            <div className="mt-6 m-auto space-y-6 w-full">
              <p className="text-center text-2xl max-sm:text 1x1 text-black">
                Один из самых популярных пластиков. Экологически чисты, быстроразлогаемый и биосовместим. Повсеместно используется для создания игрушек, сувениров и быстроразлогаемых вещей.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mx-10 sm:px-0 sm:w-8/12 md:w-3/12">
            <div className="mt-6 m-auto space-y-6 w-full ">
              <h1
                className="text-center text-3xl font-bold text-black">
                ABS
              </h1>

            </div>
            <div className="mt-6 m-auto space-y-6 w-full">
              <p className="text-center text-2xl max-sm:text-base text-black">
                Пластик, используемый в инженерных целях. Имеет высокую ударопрочность, механическую прочность и жесткость. Обезпечивает долгоживучесть изделий и позволяет его реставрировать.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mx-10 sm:px-0 sm:w-8/12 md:w-3/12">
            <div className="mt-6 m-auto space-y-6 w-full ">
              <h1
                className="text-center text-3xl font-bold text-black">
                PET-G
              </h1>

            </div>
            <div className="mt-6 m-auto space-y-6 w-full">
              <p className="text-center text-2xl max-sm:text 1x1 text-black">
                Высокопрочный, износостойкий материал, обладающий высокой температурой плавленияи абсолютно не токсичен и безвреден. Из-за чего его используют посеместно для создание бытовых вещей от посуды до тар для хранения химических веществ.
              </p>
            </div>
          </div>
        </div>

        <div className="h-[80px] mt-10 max-sm:px-10">
          <a href="">
            <button
              type="button"
              className="h-full w-full bg-[#93ADAA] rounded text-white text-2xl">
              Связаться с нами
            </button>
          </a>
        </div>

      </main >
    </>
  );
};

export default Index;
