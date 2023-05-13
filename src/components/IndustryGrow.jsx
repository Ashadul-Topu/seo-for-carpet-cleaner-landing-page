import img2 from '../assets/img/post/portrait-man-cleaning-his-house.jpg'


export default function IndustryGrow(){
    return(
        <section className="industry-grow max-w-[1200px] container mx-auto px-2 pb-10">
        <div className="flex items-center justify-between flex-wrap">

            <div className="lg:w-1/2">
                <div className="m-5">
                <h2 className="md:text-5xl text-3xl font-bold text-blue-900 mb-10">
                        Carpet Cleaning - The Industry Size
                    </h2>
                    <p className="text-justify text-xl text-slate-600 my-5 leading-8 mb-8">
                        By 2024, the carpet cleaning industry is anticipated to grow by almost 5 billion which shows a 61.6% increase from 3.083 billion USD in 2012. It represents the potentiality of the growth of the carpet cleaning industry.
                    </p>
                    <p className="text-justify text-xl text-slate-600 my-5 leading-8 mb-8">
                        For home maintenance, carpet cleaning service is a very purposeful and profitable sector indeed. This colossal industry is moving with the fastest-growing revenue size. It is expanding. In the US, there are 33,364 carpet cleaning companies per hour, and that number is growing rapidly. To make a significant position within the industry, you should have effective strategies to make you stand out from the crowd. You should take the core advantages of digital marketing. You should take the boon of search engine optimization. It helps you to grow and sustain your business in the long run.
                    </p>
                    <div className="text-left my-12">
                        <a href="Javascript:void(0)" className="bg-red-500 py-5 px-6 uppercase rounded text-white font-semibold hover:bg-blue-900"> want more clients</a>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/2">
            <div className="m-5">
                <img src={img2} className="w-full" alt="" />
            </div>
            </div>

        </div>

    </section>
    )
}