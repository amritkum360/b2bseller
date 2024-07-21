import AllOrdersTable from "./components/AllOrdersTable/AllOrdersTable";
import FullFilledOrders from "./components/fullfilledorders/FullfilledOrders";
import Listings from "./components/Listings/Listings";
import OrderNav from "./components/OrderNav/OrderNav";

export default function Orders(){

    return(
        <>
        <FullFilledOrders />
        <Listings />
        <AllOrdersTable />
        </>
    )
}