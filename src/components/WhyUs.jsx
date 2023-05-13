import img4 from "../assets/img/post/sales-sell-selling-commerce-costs-profit-retail-concept.jpg"

export default function WhyUS(){
    return(
        <section className=" why-us max-w-[1200px] container mx-auto px-4 pt-20 pb-5">

            <div className=" flex items-center justify-between flex-wrap">
                <div className=" lg:w-1/2 ">
                    <h2 className="lg:text-5xl text-4xl font-bold text-blue-900 mb-10 ">
                    What makes us a market leader? 
                    </h2>
                    
                    <p className="lg:text-2xl text-lg text-slate-600" >
                    Find Out the most impactful and resourceful killer keywords for your carpet cleaning business. It is very natural to wish to discover your website in the foremost position, but the reality is you have to cope with the harsh competition within the industry as so many companies like yours are there. Now the question is how to stand out. How would you be able to secure top ranking in search results?
                    </p>
                    <div className=" my-12 ">
                    <a href="Javascript:void(0)" className="bg-red-500 md:py-5 p-3 md:px-6 uppercase rounded text-white font-semibold hover:bg-blue-900"> want more clients</a>
                    </div>
                </div>
                <div className="lg:w-1/2 p-4">
                    <img src={img4} alt="" />
                </div>
            </div>

        </section>
    )
}
