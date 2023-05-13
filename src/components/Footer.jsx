import logo from "../assets/img/seomissiles-logo-recolor.png"

export default function Footer(){
    return(
        <section className="footer bg-slate-900 mt-10">
            <div className="max-w-[1200px] container mx-auto px-4">
                <div className="footer-top py-10 text-white">
                    <div className="flex items-start justify-between flex-wrap">

                        <div className=" lg:w-1/4 w-1/2">
                        <div className="footer-logo">
                            <img src={logo} alt="" />
                        </div>
                        <p className="mt-5 text-slate-300">
                        Ranking website at the speed of a missile.
                        </p>
                        </div>

                        <div className="link lg:w-1/4 w-1/2">
                            <h4 className="text-lg font-bold text-white"> IMPORTANT LINKS </h4>
                            <ul>
                                <li className="text-slate-300 uppercase hover:text-white py-2 text-sm  cursor-pointer">faq</li>
                                <li className="text-slate-300 capitalize hover:text-white py-2 text-sm  cursor-pointer">Lets Talk!</li>
                            </ul>
                        </div>

                        <div className="link lg:w-1/4 w-1/2 lg:mt-0 mt-10">
                            <h4 className="text-lg font-bold text-white"> FEATURED SERVICES </h4>
                            <ul>
                                <li className="text-slate-300 uppercase hover:text-white py-2 text-sm  cursor-pointer">30 DAYS DIVERSIFIED BACKLINKS</li>
                                <li className="text-slate-300 capitalize hover:text-white py-2 text-sm  cursor-pointer">Power SEO Strategy Package</li>
                                <li className="text-slate-300 uppercase hover:text-white py-2 text-sm   cursor-pointer">DAILY BASE HIGH AUTHORITY BACKLINKS PACKAGE </li>
                            </ul>
                        </div>

                        <div className="link lg:w-1/4 w-1/2 lg:mt-0 mt-10">
                            <h4 className="text-lg font-bold text-white"> ADDRESS </h4>
                            <ul>
                                <li className="text-slate-300 uppercase py-2 text-sm ">54 Strone Road, London, E7 8EU</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright py-4 border-t border-slate-400">
                <div className="w-[1200px] container mx-auto md:px-4">
                    <p className="text-slate-200 text-base">  &copy;2023. All Rights Reserved to <span className="text-red-600 font-semibold">SEOMISSILES </span>( A sister Concern of <span className="text-red-600 font-semibold"> SHUVO IT </span>)</p>
                </div>
            </div>
        </section>
    )
}