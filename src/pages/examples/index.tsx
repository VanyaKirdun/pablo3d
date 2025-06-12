import img from '@/assets/b552e3cbad070734bb581837fb9f94fc.jpg'
import img1 from '@/assets/1b5418298374dfe4ff8db12a238c50c7.jpg'
import cards from './cards.json'
import { useTranslation } from 'react-i18next';

interface Card {
  src: string,
  title: string,
  description: string
}

interface LocalesCard {
  en: Card,
  ca: Card,
  es: Card,
  ru: Card
}


const Examples = () => {
  const { i18n } = useTranslation();
  const cardDatas = JSON.parse(JSON.stringify(cards));
  return (<>
    <main className="">
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {cardDatas.map((card: LocalesCard, index: number) =>
            <div key={`${card[i18n.language as keyof LocalesCard] ? card[i18n.language as keyof LocalesCard].title ? card[i18n.language as keyof LocalesCard].title : 'undefined' : 'undefined'}${index}`} className="max-w-sm rounded  shadow-lg">
              <div className='overflow-hidden max-h-[300px]'>
                <img className="w-full h-full" src={img} alt="Sunset in the mountains" />
              </div>
              <div className="px-6 pArgument of type '{ src: string; title: string; description: string; }[]' is not assignable to parameter of type 'string'.y-4">
                <div className="font-bold text-xl mb-2">{card[i18n.language as keyof LocalesCard] ? card[i18n.language as keyof LocalesCard].title ? card[i18n.language as keyof LocalesCard].title : 'undefined' : 'undefined'}</div>
                <p className="text-gray-700 text-base">
                  {card[i18n.language as keyof LocalesCard] ? card[i18n.language as keyof LocalesCard].description ? card[i18n.language as keyof LocalesCard].description : 'undefined' : 'undefined'}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  </>
  );
};

export default Examples;
