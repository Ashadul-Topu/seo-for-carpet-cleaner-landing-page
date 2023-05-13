import contentIcon from "../assets/img/icon/icons8-content-64.png"
import rebuildIcon from "../assets/img/icon/icons8-playground-64.png"
import digitalIcon from "../assets/img/icon/icons8-sun-50.png"
import toolsIcon from "../assets/img/icon/icons8-tools-50.png"

export default function WorkProcess(){
    return(
        <section className=" our-work-process max-w-[1200px] container mx-auto px-2 pt-20 pb-5">

            <h2 className="lg:text-5xl text-4xl font-bold text-blue-900 mb-10 text-center ">
            Our carpet cleaning SEO <br className="md:block hidden" /> campaign process 
            </h2>

            <div className="flex items-stretch lg:justify-between justify-start flex-wrap">
                <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full mt-4">
                    <div className="h-full m-4 p-5 shadow-lg">
                        <div className="icon w-20  m-auto">
                            <img src={contentIcon} className="m-auto" alt="" />
                        </div>
                        <div className="">
                            <h5 className="text-center text-2xl font-[400] py-5 text-slate-500" >Content</h5>
                            <p className=" text-center text-slate-600">
                            We do deal with location-based specific content to attract customers in particular.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full mt-4">
                <div className=" h-full m-4 p-5 shadow-lg">
                    <div className="icon w-20  m-auto">
                        <img src={rebuildIcon} className="m-auto" alt="" />
                    </div>
                    <div className="">
                        <h5 className="text-center text-2xl font-[400] py-5 text-slate-500">Reputation Building</h5>
                        <p className="text-center text-slate-600">
                        To intensify your local reputation, we know how to optimize your Google MY Business, citation and other social platforms.
                        </p>
                    </div>
                </div>
                </div>

                <div className=" lg:w-1/4 md:w-1/3 sm:w-1/2 w-full mt-4">
                <div className="h-full m-4 p-5 shadow-lg">
                    <div className="icon w-20  m-auto ">
                        <img src={digitalIcon} className="m-auto" alt="" />
                    </div>
                    <div className="">
                        <h5 className="text-center text-2xl font-[400] py-5 text-slate-500" >Digital PR</h5>
                        <p className="text-center text-slate-600">
                        We work to achieve White Hat Backlinks to build a strong link profile.
                        </p>
                    </div>
                </div>
                </div>

                <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full mt-4">
                <div className="h-full m-4 p-5 shadow-lg">
                <div className="icon w-20  m-auto text-center">
                        <img src={toolsIcon} className="m-auto" alt="" />
                    </div>
                    <div className="">
                        <h5 className="text-center text-2xl font-[400] py-5 text-slate-500" >On-Page/Technical SEO</h5>
                        <p className="text-center text-slate-600">
                        We have gained proficiency in almost every branch of SEO.
                        </p>
                    </div>
                </div>
                </div>

            </div>
        </section>
    )
}