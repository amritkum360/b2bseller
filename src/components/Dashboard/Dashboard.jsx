import LatestOrder from "./components/Latestorder/Latestorder";
import Todayvsyesterday from "./components/Todayvsyesterday/Todayvsyesterday";

export default function Dashboard(){
    return(
        <>
        <div style={{display:"flex", justifyContent:'center'}}>
        <Todayvsyesterday />
        <LatestOrder />
        </div>
        
        </>
    )
}