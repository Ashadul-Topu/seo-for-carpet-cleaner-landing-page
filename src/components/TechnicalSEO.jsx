import img6 from "../assets/img/post/863895_O6A8R40-removebg-preview.png"

export default function TechnicalSEO(){
    return(
        <section className="technical-SEO max-w-[1200px] container mx-auto px-4 pt-10">
            <div className="text-center pb-10">
                <h2 className="lg:text-5xl text-4xl font-semibold text-blue-900 mb-10"> Optimize technical SEO </h2>
                <p className="text-justify text-xl text-slate-600 lg:leading-8 lg:mb-8">
                For reaching SEO goals, your website is certainly important. Here some performance of your website affects the ranking of your website. Several factors can impact the performance of the website. Let’s discuss some fundamental ones.
                </p>
            </div>
            <div className="flex justify-between flex-wrap">
                <div className="lg:w-1/2 w-full">
                    <h2 className="lg:text-4xl text-3xl font-semibold text-black lg:mb-10"> Website loading speed </h2>

                    <p className="text-justify text-xl text-slate-600 my-5 leading-7 mb-6">
                       Website loading speed impacts rankings. A slow-loading website increases the bounce rate which has a strong impact on SEO ranking. Google does not rank a slow website. To find the technical issues that are slowing down your cherished website, we use Google Page Speed Insight. Our expert team then works on solving those issues to accelerate the loading speed of the website. <span className="font-semibold"> User-friendly and responsive design. </span>
                    </p>
                    <p className="text-justify text-xl text-slate-600 my-5 leading-7 mb-6">
                        When your website would be able to acquire a top position on the search results, your actual and potential customers would access your business website from various devices like desktops, smartphones, laptops, tablets etc. But you should bear in mind that your website would not fit perfectly if the website is not responsive. It would lead to poor user experience. The summary is you should have a responsive website. Our adroit web development team is there to solve any issues related to website responsiveness. It is our core responsibility to ensure that your website is responsive and possesses a better user experience.
                    </p>
                    <div className=" my-12">
                    <a href="Javascript:void(0)" className="bg-red-500 py-5 px-6 uppercase rounded text-white font-semibold hover:bg-blue-900"> want more clients</a>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full lg:mt-0 -mt-20">
                    <img src={img6} className="lg:w-full lg:h-full m-auto" alt="" />
                </div>
            </div>
        </section>
    )
}