import logo from '../assets/img/seomissiles-logo-recolor.png'
import menubar from "../assets/img/icon/icons8-menu-50.png"
import '../style/style.css'

export default function Header(){
    return(
        <header className="hero w-full">
        <div className="over-lay bg-black bg-opacity-70 ">
            <div className="max-w-[1200px] container mx-auto px-4">
                    <nav className=" flex items-center justify-between p-3">
                    
                        <div className="small-device-menu ml-0 w-5 lg:hidden">
                            <a href="#"><img src={menubar} className="ml-0" alt="" /></a>
                        </div>

                        <div className="site-title lg:ml-0 m-auto w-52 lg:w- ">
                            <a href="#"><img src={logo} alt="" /></a>
                        </div>

                        <div className="nab-link lg:block hidden">
                            <ul className=" flex items-center justify-between">
                                <li><a href="" className="text-white text-sm uppercase p-3 font-bold hover:text-slate-300">keyword research</a></li>
                                <li><a href="" className="text-white text-sm uppercase p-3 font-bold hover:text-slate-300">local seo</a></li>
                                <li><a href="" className="text-white text-sm uppercase p-3 font-bold hover:text-slate-300">link building</a></li>
                                <li className="border-r-3 border-slate-600"><a href="" className="text-white text-sm uppercase p-3 font-bold hover:text-slate-300">monthly seo</a></li>
                                <li className=""><a href="" className="text-slate-700 text-sm uppercase p-3 font-bold bg-white hover:bg-slate-200">free quote</a></li>
                            </ul>
                        </div>
                    </nav>
    
                    <div className="hero-content lg:py-36 py-20 text-center">
                        <h1 className="md:text-7xl text-5xl text-white uppercase font-bold md:leading-[80px]">best carpet cleaning seo <br className="hidden lg:block" /> company </h1>
                        <p className="text-white text-4xl leading-10 my-5" >If your carpet cleaning business website is not on the first page of <br className="hidden lg:block" /> Google, you are not on the right track in business. </p>
                        
                        <button className=" md:text-2xl text-xl font-bold uppercase bg-white py-2 px-5 rounded mt-10">schedule a consultation </button>
                    </div>
            </div>
        </div>
        </header>
    )
}
