const { Fragment } = require("react");

import Image from "next/image";

import united from "../public/images/U.S.png";
import germany from "../public/images/Germany.png";
import japan from "../public/images/Japan.png";
import india from "../public/images/India.png";
import netherlands from "../public/images/Netherlands.png";
import earth from "../public/images/earth.png";



const Stats = () => {
    return <Fragment>
        <div className="flex flex-row gap-5">
            <div className="bg-white w-1/2 py-3 px-6 rounded-md shadow-md">
                <h2 className="font-bold text-xl">User leaderboard</h2>
                <table className="table-fixed">
                    <thead>
                        <tr>
                        <td style={{width: "220px", height: "70px"}}>Email</td>
                        <td  style={{width: "150px"}}>Friends invited</td>
                        <td>Country</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{width: "220px", height: "50px"}}>paula.suarze@con...es</td>
                            <td>6,500</td>
                            <td>USA</td>
                        </tr>
                        <tr>
                            <td style={{width: "220px", height: "50px"}}>laura.kenet..3@yahoo.com</td>
                            <td>2,300</td>
                            <td>Monaco</td>
                        </tr>
                        <tr>
                            <td style={{width: "220px", height: "50px"}}>aaron.michael@arg.org</td>
                            <td>1,200</td>
                            <td>Prague</td>
                        </tr>
                        <tr>
                            <td style={{width: "220px", height: "50px"}}>jeremy.runner@aol.com</td>
                            <td>900</td>
                            <td>China</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button className="mt-4 hover:bg-slate-300 bg-slate-200 py-2 px-4 rounded-md font-medium">See leaderboard</button>
                </div>
            </div>
            <div className="bg-white w-1/2 py-3 px-6 rounded-md shadow-md">
                <div className="flex flex-row justify-between items-center">
                    <p className="font-bold text-lg">Traffic</p>
                    <div className="flex flex-row gap-3">
                        <p className="bg-slate-200 rounded-md px-2">Source</p>
                        <p>City</p>
                    </div>
                </div>
                <div>
                    <div className="flex mt-5 relative flex-row justify-between items-center">
                        <div className="rounded-sm" style={{width: "170px", height: "35px", background: "rgba(255, 211, 11, 0.5)", position: "absolute", zIndex: "0", left: ""}}></div>
                        <p className="ps-3 z-10">Google</p>
                        <p>30,000</p>
                    </div>
                    <div className="flex mt-5 relative flex-row justify-between items-center">
                    <div className="rounded-sm" style={{width: "114px", height: "35px", background: "rgba(255, 211, 11, 0.5)", position: "absolute", zIndex: "0", left: ""}}></div>
                        <p className="ps-3 z-10">Twitter</p>
                        <p>20,000</p>
                    </div>
                    <div className="flex mt-5 relative flex-row justify-between items-center">
                        <div className="rounded-sm" style={{width: "57px", height: "35px", background: "rgba(255, 211, 11, 0.5)", position: "absolute", zIndex: "0", left: ""}}></div>
                        <p className="ps-3 z-10">Facebook</p>
                        <p>10,000</p>
                    </div>
                    <div className="flex relative mt-5 flex-row justify-between items-center">
                        <div className="rounded-sm" style={{width: "28px", height: "35px", background: "rgba(255, 211, 11, 0.5)", position: "absolute", zIndex: "0", left: ""}}></div>
                        <p className="ps-3 z-10">LinkedIn</p>
                        <p>5,000</p>
                    </div>
                    <div className="flex relative mt-5 flex-row justify-between items-center">
                        <div className="rounded-sm" style={{width: "17px", height: "35px", background: "rgba(255, 211, 11, 0.5)", position: "absolute", zIndex: "0", left: ""}}></div>
                        <p className="ps-3 z-10">YouTube</p>
                        <p>3,000</p>
                    </div>
                    <div className="flex relative mt-5 flex-row justify-between items-center">
                        <div className="rounded-sm" style={{width: "11px", height: "35px", background: "rgba(255, 211, 11, 0.5)", position: "absolute", zIndex: "0", left: ""}}></div>
                        <p className="ps-3 z-10">Other</p>
                        <p>2,000</p>
                    </div>
                </div>
                <div>
                    <button className="mt-4 hover:bg-slate-300 bg-slate-200 py-2 px-4 rounded-md font-medium">See traffic sources</button>
                </div>
            </div>
        </div>
        <div className="flex flex-row mt-10 gap-5">
            <div className="bg-white w-1/2 py-3 px-6 rounded-md shadow-md">
                <div className="flex flex-row justify-between items-center">
                    <p className="font-bold text-lg">Signup location</p>
                    <div className="flex flex-row gap-3">
                        <p className="bg-slate-200 rounded-md px-2">Country</p>
                        <p>City</p>
                    </div>
                </div>
                <div>
                    <div className="flex mt-5 relative flex-row justify-between items-center">
                        <div className="rounded-sm" style={{width: "160px", height: "35px", background: "rgba(255, 211, 11, 0.5)", position: "absolute", zIndex: "0", left: ""}}></div>
                        <div className="z-10 flex flex-row items-center">   
                            <Image src={united} width={30} height={30} className="ms-3" />
                            <p className="ps-5 text-lg z-10">United States</p>
                        </div>
                        
                        <p>30,000</p>
                    </div>
                    <div className="flex mt-5 relative flex-row justify-between items-center">
                    <div className="rounded-sm" style={{width: "114px", height: "35px", background: "rgba(255, 211, 11, 0.5)", position: "absolute", zIndex: "0", left: ""}}></div>
                        <div className="z-10 flex flex-row items-center">   
                            <Image src={germany} width={30} height={30} className="ms-3" />
                            <p className="ps-5 text-lg z-10">Germany</p>
                        </div>
                        <p>20,000</p>
                    </div>
                    <div className="flex mt-5 relative flex-row justify-between items-center">
                        <div className="rounded-sm" style={{width: "75px", height: "35px", background: "rgba(255, 211, 11, 0.5)", position: "absolute", zIndex: "0", left: ""}}></div>
                        <div className="z-10 flex flex-row items-center">   
                            <Image src={netherlands} width={30} height={30} className="ms-3" />
                            <p className="ps-5 text-lg z-10">Netherlands</p>
                        </div>
                        <p>10,000</p>
                    </div>
                    <div className="flex relative mt-5 flex-row justify-between items-center">
                        <div className="rounded-sm" style={{width: "50px", height: "35px", background: "rgba(255, 211, 11, 0.5)", position: "absolute", zIndex: "0", left: ""}}></div>
                        <div className="z-10 flex flex-row items-center">   
                            <Image src={india} width={30} height={30} className="ms-3" />
                            <p className="ps-5 text-lg z-10">India</p>
                        </div>
                        <p>5,000</p>
                    </div>
                    <div className="flex relative mt-5 flex-row justify-between items-center">
                        <div className="rounded-sm" style={{width: "27px", height: "35px", background: "rgba(255, 211, 11, 0.5)", position: "absolute", zIndex: "0", left: ""}}></div>
                        <div className="z-10 flex flex-row items-center">   
                            <Image src={japan} width={30} height={30} className="ms-3" />
                            <p className="ps-5 text-lg z-10">Japan</p>
                        </div>
                        <p>3,000</p>
                    </div>
                    <div className="flex relative mt-5 flex-row justify-between items-center">
                        <div className="rounded-sm" style={{width: "11px", height: "35px", background: "rgba(255, 211, 11, 0.5)", position: "absolute", zIndex: "0", left: ""}}></div>
                        <div className="z-10 flex flex-row items-center">   
                            <Image src={earth} width={30} height={30} className="ms-3" />
                            <p className="ps-5 text-lg z-10">Other</p>
                        </div>
                        <p>2,000</p>
                    </div>
                </div>
                <div>
                    <button className="mt-4 hover:bg-slate-300 bg-slate-200 py-2 px-4 rounded-md font-medium">See all countries</button>
                </div>
            </div>
            <div className="bg-white w-1/2 py-3 px-6 rounded-md shadow-md">
                <div className="flex flex-row justify-between items-center">
                    <p className="font-bold text-lg">Behaviour</p>
                    <div className="flex flex-row gap-3">
                        <p className="bg-slate-200 rounded-md px-2">Browsers</p>
                        <p>Decides</p>
                    </div>
                </div>
                <div>
                    <div className="flex mt-5 relative flex-row justify-between items-center">
                        <div className="rounded-sm" style={{width: "160px", height: "35px", background: "rgba(255, 211, 11, 0.5)", position: "absolute", zIndex: "0", left: ""}}></div>
                        <p className="ps-16 text-lg z-10">United States</p>
                        <p>30,000</p>
                    </div>
                    <div className="flex mt-5 relative flex-row justify-between items-center">
                    <div className="rounded-sm" style={{width: "114px", height: "35px", background: "rgba(255, 211, 11, 0.5)", position: "absolute", zIndex: "0", left: ""}}></div>
                        <p className="ps-16 text-lg z-10">Germany</p>
                        <p>20,000</p>
                    </div>
                    <div className="flex mt-5 relative flex-row justify-between items-center">
                        <div className="rounded-sm" style={{width: "75px", height: "35px", background: "rgba(255, 211, 11, 0.5)", position: "absolute", zIndex: "0", left: ""}}></div>
                        <p className="ps-16 text-lg z-10">Netherlands</p>
                        <p>10,000</p>
                    </div>
                    <div className="flex relative mt-5 flex-row justify-between items-center">
                        <div className="rounded-sm" style={{width: "50px", height: "35px", background: "rgba(255, 211, 11, 0.5)", position: "absolute", zIndex: "0", left: ""}}></div>
                        <p className="ps-16 text-lg z-10">India</p>
                        <p>5,000</p>
                    </div>
                    <div className="flex relative mt-5 flex-row justify-between items-center">
                        <div className="rounded-sm" style={{width: "27px", height: "35px", background: "rgba(255, 211, 11, 0.5)", position: "absolute", zIndex: "0", left: ""}}></div>
                        <p className="ps-16 text-lg z-10">Japan</p>
                        <p>3,000</p>
                    </div>
                    <div className="flex relative mt-5 flex-row justify-between items-center">
                        <div className="rounded-sm" style={{width: "11px", height: "35px", background: "rgba(255, 211, 11, 0.5)", position: "absolute", zIndex: "0", left: ""}}></div>
                        <p className="ps-16 text-lg z-10">Other</p>
                        <p>2,000</p>
                    </div>
                </div>
                <div>
                    <button className="mt-4 hover:bg-slate-300 bg-slate-200 py-2 px-4 rounded-md font-medium">See all countries</button>
                </div>
            </div>
        </div>
    </Fragment>
}

export default Stats;