import img3 from "../assets/img/post/man-cleaning-his-home1.jpg"

export default function WhyInvestInSeo(){
    return(
        <section className="why-invest-in-seo max-w-[1200px] container mx-auto px-2 pt-10">
            <div className="text-center lg:pb-10">
                <h2 className="lg:text-5xl text-4xl font-bold text-blue-900 mb-10">
                    Why should you invest in SEO for your <br className="md:block hidden" /> carpet cleaning company?
                </h2>
                <p className="text-justify text-xl text-slate-600 my-5 lg:leading-8 mx-3">
                    Firstly, you should realize the importance of ranking your business website on Google. For any carpet cleaning business intending to intensify its online visibility, SEO is certainly an important factor. Improving the structure of your website and content by incorporating pertinent keywords can ensure enhanced visibility, increased business growth, and satisfactory traffic generation.
                </p>
            </div>
            <div className="flex items-end justify-between flex-wrap">
                <div className="lg:w-2/3 w-full">
                    <div className="m-5">
                        <h2 className="lg:text-5xl text-4xl font-bold text-blue-900 mb-10">
                            Core benefits of investing <br className="lg:block hidden" /> in SEO services
                        </h2>
                        <p className="text-justify text-lg text-slate-600 my-5 leading-6 mb-6">
                        <span className="font-semibold"> ✓ Boost visibility:</span> Coming by the top position in the search engine results pages (SERPs) means increasing the visibility of your business website, ensuring more clicks, visits, and ultimately more potential and qualified customers.
                        </p>
                        <p className="text-justify text-lg text-slate-600 my-5 leading-6 mb-6">
                            <span className="font-semibold"> ✓ Bring targeted traffic:</span> Optimizing the content of the website for relevant keywords ensures attracting visitors pursuing carpet cleaning services. That means it is SEO that increases the chances of conversion manifold.
                        </p>
                        <p className="text-justify text-lg text-slate-600 my-5 leading-6 mb-6">
                            <span className="font-semibold">✓ Develop user experience:</span> If your business website is optimized for SEO, it would certainly lay out a better user experience, resulting in spending time on the website for a longer time and achieving more qualified conversions.
                        </p>
                        <p className="text-justify text-lg text-slate-600 my-5 leading-6 mb-6">
                            <span className="font-semibold">✓ Help to stand out:</span> Obtaining a higher position in search engine results provides a competitive advantage over other business entities moving with carpet cleaning services.

                        </p>
                        <p className="text-justify text-lg text-slate-600 my-5 leading-6 mb-6 pt-7">
                            Don’t let your carpet cleaning business stay behind. Investing in <span className="font-semibold"> SEO MISSILES CARPET CLEANING SEO </span> services intensifies your online visibility, brings more customers and ultimately grows your business. To believe and depend on our years of SEO experience, don’t forget to contact us. We are here to put your business to the new height that you are dreaming of.
                        </p>
                    </div>
                </div>
                <div className="lg:w-1/3 w-full">
                    <div className="m-5">
                        <img src={img3} className="w-full h-full" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}