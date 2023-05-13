import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Packages(){
return(
        // packages section 
        <section className="packages max-w-[1200px] container mx-auto px-4  py-16">
        <h2 className="text-center md:text-5xl text-3xl font-bold text-blue-900 mb-10">
            Our Affordable Carpet Cleaning <br /> SEO Packages
        </h2>
        <p className="text-justify md:text-2xl text-xl text-slate-600 my-5 mb-8">
            We offer a range of monthly SEO packages tailored to fit various levels of effort and cost. For a more comprehensive scope of work, we recommend selecting the Advanced or Premium package. To ensure your needs and budget are met, we encourage you to choose the package that best suits your requirements. Please note that a minimum commitment of 6 months is required to get the most out of our SEO services.
        </p>

        {/* package list */}
        <div className="packages-list flex items-stretch lg:justify-between flex-wrap py-4 ">

            {/* basic */}
            <div className="basic lg:w-1/3 md:w-1/2 w-full">
            <div className="m-5">
            <h3 className="packages-title bg-blue-900 text-white py-5 text-3xl font-semibold text-center rounded-t-lg capitalize">Basic</h3>
                <div className="packages-price bg-[#58C6FE] text-center py-5">
                    <p className="text-white text-lg  ">Regular Price $449/mo</p>
                    <h2 className="text-5xl font-bold py-5"> <span className="text-2xl font-light tracking-tighter"> <FontAwesomeIcon icon="fa-solid fa-dollar-sign" /></span> 400</h2>
                </div>

                <div className="bg-slate-100 py-3 text-center">
                    <p className="text-slate-500 py-3 text-lg font-semibold">Small Website</p>
                    <button className="border rounded-full border-black py-[10px] px-6 mt-6 mb-3 hover:bg-blue-900 hover:text-white hover:border-blue-900">Order Now</button>
                </div>

                <div>
                    <h3 className="packages-subtitle bg-blue-900 text-white py-4 text-2xl font-semibold text-center">Website review & analysis</h3>
                    <ul className="bg-slate-100 py-3 text-center">
                        <li className="text-slate-500 py-1 text-lg font-mediam">Max 2 Keywords</li>
                        <li className="text-slate-500 py-1 text-lg font-mediam">Website & Competitor Analysis</li>
                        <li className="text-slate-500 py-1 text-lg font-mediam">On–page SEO Audit</li>
                        <li className="text-slate-500 py-1 text-lg font-mediam">Backlinks Audit</li>
                        <li className="text-slate-500 py-1 text-lg font-mediam">Technical SEO Audit</li>
                    </ul>
                </div>
                <div>
                    <h3 className="packages-subtitle bg-blue-900 text-white py-4 text-2xl font-semibold text-center">ON-PAGE SEO</h3>
                    <ul className="bg-slate-100 py-3 text-center">
                        <li className="text-slate-500 py-1 text-lg font-mediam">Heading Tag Optimization</li>
                        <li className="text-slate-500 py-1 text-lg font-mediam">Meta Tags Creation</li>
                        <li className="text-slate-500 py-1 text-lg font-mediam">URL Structure</li>
                        <li className="text-slate-500 py-1 text-lg font-mediam">Content Optimization</li>
                        <li className="text-slate-500 py-1 pb-0 text-lg font-mediam">Image Optimization</li>
                    </ul>
                    <div className="bg-slate-100 pb-2 text-center">
                        <button className="text-black text-lg font-mediam">See all features <i className="fa-solid fa-angle-down"></i> </button>
                    </div>
                </div>
            </div>
            </div>

            {/* Advance */}
            <div className="basic lg:w-1/3 md:w-1/2 w-full">
                <div className="m-5">
                <h3 className="packages-title bg-blue-900 text-white py-5 text-3xl font-semibold text-center rounded-t-lg capitalize">Advance</h3>
                    <div className="packages-price bg-[#58C6FE] text-center py-5">
                        <p className="text-white text-lg  ">Regular Price $549/mo</p>
                        <h2 className="text-5xl font-bold py-5"> <span className="text-2xl font-light tracking-tighter"> <FontAwesomeIcon icon="fa-solid fa-dollar-sign" /></span> 500</h2>
                    </div>

                    <div className="bg-slate-100 py-3 text-center">
                        <p className="text-slate-500 py-3 text-lg font-semibold">Small Website</p>
                        <button className="border rounded-full border-black py-[10px] px-6 mt-6 mb-3 hover:bg-blue-900 hover:text-white hover:border-blue-900">Order Now</button>
                    </div>

                    <div>
                        <h3 className="packages-subtitle bg-blue-900 text-white py-4 text-2xl font-semibold text-center">Website review & analysis</h3>
                        <ul className="bg-slate-100 py-3 text-center">
                            <li className="text-slate-500 py-1 text-lg font-mediam">Max 2 Keywords</li>
                            <li className="text-slate-500 py-1 text-lg font-mediam">Website & Competitor Analysis</li>
                            <li className="text-slate-500 py-1 text-lg font-mediam">On–page SEO Audit</li>
                            <li className="text-slate-500 py-1 text-lg font-mediam">Backlinks Audit</li>
                            <li className="text-slate-500 py-1 text-lg font-mediam">Technical SEO Audit</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="packages-subtitle bg-blue-900 text-white py-4 text-2xl font-semibold text-center">ON-PAGE SEO</h3>
                        <ul className="bg-slate-100 py-3 text-center">
                            <li className="text-slate-500 py-1 text-lg font-mediam">Heading Tag Optimization</li>
                            <li className="text-slate-500 py-1 text-lg font-mediam">Meta Tags Creation</li>
                            <li className="text-slate-500 py-1 text-lg font-mediam">URL Structure</li>
                            <li className="text-slate-500 py-1 text-lg font-mediam">Content Optimization</li>
                            <li className="text-slate-500 py-1 pb-0 text-lg font-mediam">Image Optimization</li>
                        </ul>
                        <div className="bg-slate-100 pb-2 text-center">
                            <button className="text-black text-lg font-mediam">See all features <i className="fa-solid fa-angle-down"></i> </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* premium  */}
            <div className="basic lg:w-1/3 md:w-1/2 w-full">
            <div className="m-5">
            <h3 className="packages-title bg-blue-900 text-white py-5 text-3xl font-semibold text-center rounded-t-lg capitalize">Premium</h3>
                <div className="packages-price bg-[#58C6FE] text-center py-5">
                    <p className="text-white text-lg  ">Regular Price $699/mo</p>
                    <h2 className="text-5xl font-bold py-5"> <span className="text-2xl font-light tracking-tighter"> <FontAwesomeIcon icon="fa-solid fa-dollar-sign" /></span> 600</h2>
                </div>

                <div className="bg-slate-100 py-3 text-center">
                    <p className="text-slate-500 py-3 text-lg font-semibold">Small Website</p>
                    <button className="border rounded-full border-black py-[10px] px-6 mt-6 mb-3 hover:bg-blue-900 hover:text-white hover:border-blue-900">Order Now</button>
                </div>

                <div>
                    <h3 className="packages-subtitle bg-blue-900 text-white py-4 text-2xl font-semibold text-center">Website review & analysis</h3>
                    <ul className="bg-slate-100 py-3 text-center">
                        <li className="text-slate-500 py-1 text-lg font-mediam">Max 2 Keywords</li>
                        <li className="text-slate-500 py-1 text-lg font-mediam">Website & Competitor Analysis</li>
                        <li className="text-slate-500 py-1 text-lg font-mediam">On–page SEO Audit</li>
                        <li className="text-slate-500 py-1 text-lg font-mediam">Backlinks Audit</li>
                        <li className="text-slate-500 py-1 text-lg font-mediam">Technical SEO Audit</li>
                    </ul>
                </div>
                <div>
                    <h3 className="packages-subtitle bg-blue-900 text-white py-4 text-2xl font-semibold text-center">ON-PAGE SEO</h3>
                    <ul className="bg-slate-100 py-3 text-center">
                        <li className="text-slate-500 py-1 text-lg font-mediam">Heading Tag Optimization</li>
                        <li className="text-slate-500 py-1 text-lg font-mediam">Meta Tags Creation</li>
                        <li className="text-slate-500 py-1 text-lg font-mediam">URL Structure</li>
                        <li className="text-slate-500 py-1 text-lg font-mediam">Content Optimization</li>
                        <li className="text-slate-500 py-1 pb-0 text-lg font-mediam">Image Optimization</li>
                    </ul>
                    <div className="bg-slate-100 pb-2 text-center">
                        <button className="text-black text-lg font-mediam">See all features <i className="fa-solid fa-angle-down"></i> </button>
                    </div>
                </div>
            </div>
            </div>

        </div>
</section>
)
}