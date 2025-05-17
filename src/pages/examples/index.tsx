import img from '@/assets/b552e3cbad070734bb581837fb9f94fc.jpg'
import img1 from '@/assets/1b5418298374dfe4ff8db12a238c50c7.jpg'


const Examples = () => {
  const cardDatas = [{ src: img, title: 'Plastic Lizard', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.' }, { src: img, title: 'Plastic Lizard', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.' }, { src: img, title: 'Plastic Lizard', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.' }, { src: img, title: 'Plastic Lizard', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.' }, { src: img, title: 'Plastic Lizard', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.' }, { src: img, title: 'Plastic Lizard', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.' }, { src: img, title: 'Plastic Lizard', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.' }, { src: img, title: 'Plastic Lizard', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.' }, { src: img, title: 'Plastic Lizard', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.' }]
  return (<>
    <main className="">
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {cardDatas.map((card, index) =>
            <div key={`${card.title}${index}`} className="max-w-sm rounded  shadow-lg">
              <div className='overflow-hidden max-h-[300px]'>
                <img className="w-full h-full" src={img} alt="Sunset in the mountains" />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{card.title}</div>
                <p className="text-gray-700 text-base">
                  {card.description}
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
