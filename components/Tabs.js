import Link from "next/link";

const Tab = () => {
    return  <div className="flex flex-row justify-between items-center">
        <h2 className="font-bold text-xl">Summer referral competition</h2>
        <div className="flex flex-row justify-between bg-white rounded-md px-4 py-2 shadow-md" style={{}}>
            <Link href="/" className="bg-light-grey hover:bg-slate-300 px-3 py-1 me-2 rounded-md" >1h</Link>
            <Link href="/" className="bg-light-grey hover:bg-slate-300 px-3 py-1 me-2 rounded-md">24h</Link>
            <Link href="/" className="bg-slate-200 hover:bg-slate-300 px-3 py-1 me-2 rounded-md">30d</Link>
            <Link href="/" className="bg-light-grey hover:bg-slate-300 px-3 py-1 me-2 rounded-md">60d</Link>
        </div>
    </div>
}

export default Tab;
