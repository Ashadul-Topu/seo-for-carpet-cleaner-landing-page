import Timg from "../assets/img/testimonials/EternallyFit-1.png"
import Timg2 from "../assets/img/testimonials/AnneArrowsmith-1.png"
import Timg3 from "../assets/img/testimonials/awesome-pawsome-1.png"
import Timg4 from "../assets/img/testimonials/proskips-testimonial-logo2-1.png"
import Timg5 from "../assets/img/testimonials/urban-wall-removal-300x300-1.png"
import Timg6 from "../assets/img/testimonials/testi-aisha-atoui.png"


export default function Testimonials(){
    return(
        <section className="testimonial max-w-[1200px] container mx-auto px-2 lg:pt-10 pb-5" >
            <h2 className="lg:text-5xl text-4xl text-center font-bold text-blue-900 mb-10"> THOUSANDS OF CLIENTS HAVE GROWN <br /> THEIR BUSINESS WITH US </h2>

            {/* Testimonials items  */}

            <div className="flex justify-between flex-wrap">

                <div className=" lg:w-1/3 md:w-1/2 ">
                    <div className=" bg-slate-950 p-5 lg:mx-5 mx-3 rounded-2xl">
                        <p className="text-white text-lg font-medium">
                        I took up the offer from SEO missiles and immediately saw an increase in both prospects and paying clients. In fact my last 5 clients have come come from google searches.
                        </p>

                        <div className="flex items-center gap-6 py-5">
                            <div className="w-20">
                                <img src={Timg} alt="" />
                            </div>
                        <h3 className="text-white lg:text-2xl text-xl font-bold">Steve Johnson</h3>
                        </div>
                    </div>
                </div>

                <div className=" lg:w-1/3 md:w-1/2 md:mt-0 mt-5">
                    <div className=" bg-slate-950 p-5 lg:mx-5 mx-3 rounded-2xl">
                        <p className="text-white text-lg font-medium">I have been with SEOmissiles for a few years now and they have been bringing me leads in by ranking me for “structural wall removal perth” As a small business that has been facing the economic struggle in Perth, SIL has been helping me keep my business going. Jaymes has been advising me on the next best steps to take with my business and has been genuinely helpful with his advice.</p>

                        <div className="flex items-center gap-6 py-5">
                        <div className="w-20">
                            <img src={Timg2} alt="" />
                        </div>
                        <h3 className="text-white lg:text-2xl text-xl font-bold">Steve Johnson</h3>
                        </div>
                    </div>
                </div>

                <div className=" lg:w-1/3 md:w-1/2 lg:mt-0 md:-mt-24 mt-5">
                    <div className=" bg-slate-950 p-5 lg:mx-5 mx-3 rounded-2xl">
                        <p className="text-white text-lg font-medium">
                        When Jaymes from SEOmissiles called me last year to advertise with SIL, I had to trust them and I took the leap. Almost 1 year later I am happy with the results they have produced as I come up in Mandurah for 2 of my keywords, resulting in a noticeable spike in inquiries. I have found Jaymes to be reliable, consistent and honest with his feedback.
                        </p>

                        <div className="flex items-center gap-6 py-5">
                        <div className="w-20">
                            <img src={Timg3} alt="" />
                        </div>
                        <h3 className="text-white lg:text-2xl text-xl font-bold">Steve Johnson</h3>
                        </div>
                    </div>
                </div>

                <div className=" lg:w-1/3 md:w-1/2 lg:-mt-40 mt-5">
                    <div className=" bg-slate-950 p-5 lg:mx-5 mx-3 rounded-2xl">
                        <p className="text-white text-lg font-medium">
                        Jaymes from SEOmissiles called me in July 2017, he convinced me to move forward with the Google My Business. After I had signed up, I was distraught I had paid to sign up for a free service. Jaymes explained what they were doing is optimising it to get the best results and now almost a year later I COULDNT BE HAPPIER! I am coming up in my area for all my keywords and my wellness clinic has had an undeniable spike in leads coming through. Thank you Jaymes for pushing me over the line initially and helping my business grow!
                        </p>

                        <div className="flex items-center gap-6 py-5">
                            <div className="w-20">
                                <img src={Timg4} alt="" />
                            </div>
                        <h3 className="text-white lg:text-2xl text-xl font-bold">Steve Johnson</h3>
                        </div>
                    </div>
                </div>

                <div className=" lg:w-1/3 md:w-1/2 lg:mt-2 md:-mt-52 mt-5">
                    <div className=" bg-slate-950 p-5 lg:mx-5 mx-3 rounded-2xl">
                        <p className="text-white text-lg font-medium">
                        I have been running my business for the past 15 years but since signing up with SEOmissiles and optimizing my Google My Business, I have noticed dramatic activity on my listing. I have averaged about 2-3 leads a day from it. The team at SEOmissiles have checked in with me quarterly to update me on my results. Couldn’t be happier with the results since I resigned to SEOmissiles.
                        </p>

                        <div className="flex items-center gap-6 py-5">
                        <div className="w-20">
                            <img src={Timg5} alt="" />
                        </div>
                        <h3 className="text-white lg:text-2xl text-xl font-bold">Steve Johnson</h3>
                        </div>
                    </div>
                </div>

                <div className=" lg:w-1/3 md:w-1/2 lg:-mt-5 mt-5">
                    <div className=" bg-slate-950 p-5 lg:mx-5 mx-3 rounded-2xl">
                        <p className="text-white text-lg font-medium">
                        When I first started with SEOmissiles my business was three months old and only just finding its feet. Safe to say those days are in the past. The guys at SEOmissiles got my business online. They took care of my Google listing, built my website and planned an online advertising campaign that’s bringing in plenty of business. I pretty much bought the lot. Since then we’ve gone from strength to strength. Sales are booming, simple as that. I can’t recommend these guys highly enough.
                        </p>

                        <div className="flex items-center gap-6 py-5">
                        <div className="w-20">
                            <img src={Timg6} alt="" />
                        </div>
                        <h3 className="text-white lg:text-2xl text-xl font-bold">Steve Johnson</h3>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}