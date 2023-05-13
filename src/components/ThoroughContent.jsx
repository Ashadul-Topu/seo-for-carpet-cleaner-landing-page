import img5 from "../assets/img/post/e-book-layout-design-draft-graphic.jpg"

export default function ThoroughContent(){
    return(
        <section className=" thorough-content max-w-[1200px] container mx-auto px-2 lg:pt-20 pb-5">

            <div className=" flex items-center justify-between flex-wrap">
                <div className=" lg:w-1/2 ">
                    <div className="m-5">
                        <h2 className="lg:text-5xl text-4xl font-semibold text-blue-900 lg:mb-10 ">
                        Create valuable and thorough content
                        </h2>
                        
                        <p className="lg:text-2xl text-xl text-slate-600 py-5 text-justify" >
                        We believe valuable and comprehensive content is very important for your carpet cleaning website. Google likes high-quality content that dominates the search results. Our content creators are specialized in generating content that positively influences visitors and changes them into actual paying customers. As carpet cleaning SEO experts, we know what to do for you to attract and retain your customers. We are open enough to share custom content ideas with you. We are here to move with you to create content in diversified formats like blog posts, ebooks, videos, infographics and more. To resonate with your target audience, we heed market research and audience analysis.
                        </p>
                        <p className="lg:text-2xl text-xl text-slate-600 py-5 text-justify" >
                        Providing helpful content would help you to set yourself aside as an authority. Your audience would trust you. Customers would be more comfortable and dependable on your business as they would start to believe that you are knowledgeable and professional. This reliability would certainly help you bring more leads and conversions for your business.
                        </p>
                    </div>
                </div>
                <div className="lg:w-1/2 p-4">
                    <img src={img5} alt="" />
                </div>
            </div>

        </section>
    )
}
