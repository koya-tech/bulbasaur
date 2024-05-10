// eslint-disable-next-line import/extensions
import { Link } from 'react-router-dom';
import experienceList from './constants/index';

function Home() {
    // const word = words.split('');

    // const textanimate = word.map((txt, index) => (
    //     <motion.div
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         transition={{ duration: 0.5, delay: index * 0.05 }}
    //         className="text-white"
    //     // key={'text'}
    //     >
    //         {txt}
    //     </motion.div>
    // ));

    return (
        <>
            <div className="bg-black">
                {/* <div className="flex justify-center">
                    {textanimate}
                </div> */}
                <div className="flex justify-center pt-24 pb-20">
                    <img src="/home1.jpg" alt="home1Image" className="rounded-3xl w-3/4" />
                </div>

            </div>
            <h2 className="flex pt-24 pb-12 justify-center text-2xl">
                Dinebnb Experiences
            </h2>
            <div className="flex justify-evenly pb-24">
                {/* <div>Discover Your Special Eatery</div> */}
                {experienceList.map((item) => (
                    <Link to={item.url} className="w-1/2">
                        <figure className="relative h-96 px-10 hover:drop-shadow-2xl">
                            <img
                                className="drop-shadow-2xl h-full w-full rounded-xl object-cover object-center"
                                src={item.img}
                                alt="nature"
                                loading="lazy"
                            />
                            <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                                <div>
                                    <div className="text-black text-lg">
                                        {item.mainText}
                                    </div>
                                    <div className="text-gray-700">
                                        {item.subtext}
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    </Link>
                ))}

                {/* <div>Share Your Special Eatery</div> */}
            </div>
        </>

    );
}

export default Home;
