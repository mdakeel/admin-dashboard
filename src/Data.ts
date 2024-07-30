// sidebarData.ts
import { IconType } from 'react-icons';
import { RiDashboardFill, RiCoupon2Fill } from 'react-icons/ri';
import { RiShoppingBag2Fill } from 'react-icons/ri';
import { IoIosPeople } from 'react-icons/io';
import { AiFillFileText } from 'react-icons/ai';
import { FaChartBar, FaChartPie, FaChartLine, FaStopwatch, FaGamepad} from 'react-icons/fa';

export interface SidebarItem {
    id: number;
    url: string;
    text: string;
    icon: IconType;
}

export const dashboard: SidebarItem[] = [
    {
        id: 1,
        url: "/admin/dashboard",
        text: "Dashboard",
        icon: RiDashboardFill
    },
    {
        id: 2,
        url: "/admin/products",
        text: "Products",
        icon: RiShoppingBag2Fill
    },
    {
        id: 3,
        url: "/admin/customers",
        text: "Customers",
        icon: IoIosPeople
    },
    {
        id: 4,
        url: "/admin/transaction",
        text: "Transaction",
        icon: AiFillFileText
    }
   
];

export const charts : SidebarItem[] = [
    {
        id: 1,
        url: "/admin/chart/bar",
        text: "Bar",
        icon: FaChartBar
    },
    {
        id: 2,
        url: "/admin/chart/pie",
        text: "Pie",
        icon: FaChartPie
    },
    {
        id: 3,
        url: "/admin/chart/line",
        text: "Line",
        icon: FaChartLine
    },
       
];

export const app : SidebarItem[] = [
    {
        id: 1,
        url: "/admin/app/stopwatch",
        text: "Stop Watch",
        icon: FaStopwatch
    },
    {
        id: 2,
        url: "/admin/app/coupon",
        text: "Coupon",
        icon: RiCoupon2Fill
    },
    {
        id: 3,
        url: "/admin/app/toss",
        text: "Toss",
        icon: FaGamepad
    },
       
];
