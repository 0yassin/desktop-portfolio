export default function Links(){
    return(
        <>
            <h1 className="text-[26px] text-blue-950 hover:underline transition-all cursor-pointer hover:text-blue-800 " onClick={ ()=> open("https://instagram.com/0.yassin_")}>Instagram</h1>
            <h1 className="text-[26px] text-blue-950 hover:underline transition-all cursor-pointer hover:text-blue-800 " onClick={ ()=> open("https://github.com/0yassin")}>Github</h1>
            <h1 className="text-[26px] text-blue-950 hover:underline transition-all cursor-pointer hover:text-blue-800 " onClick={ ()=> open("/")}>Website</h1>
        </>
    )
}