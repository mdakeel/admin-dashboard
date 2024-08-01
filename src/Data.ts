// sidebarData.ts
import { IconType } from 'react-icons';
import { RiDashboardLine, RiCoupon2Line } from 'react-icons/ri';
import { RiShoppingBag2Line } from 'react-icons/ri';
import { IoMdStopwatch } from "react-icons/io";
import { LuBarChart4 } from "react-icons/lu";
import { PiChartLineUpBold } from "react-icons/pi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { TbChartPie } from "react-icons/tb";
import { LuGamepad2 } from "react-icons/lu";
import {FaRegFileAlt} from 'react-icons/fa';
import WidgetItem from './components/admin/dashboard/WidgetItem';

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
        icon: RiDashboardLine
    },
    {
        id: 2,
        url: "/admin/products",
        text: "Products",
        icon: RiShoppingBag2Line
    },
    {
        id: 3,
        url: "/admin/customers",
        text: "Customers",
        icon: MdOutlinePeopleAlt
    },
    {
        id: 4,
        url: "/admin/transaction",
        text: "Transaction",
        icon: FaRegFileAlt
    }
   
];

export const charts : SidebarItem[] = [
    {
        id: 1,
        url: "/admin/chart/bar",
        text: "Bar",
        icon: LuBarChart4
    },
    {
        id: 2,
        url: "/admin/chart/pie",
        text: "Pie",
        icon: TbChartPie
    },
    {
        id: 3,
        url: "/admin/chart/line",
        text: "Line",
        icon: PiChartLineUpBold
    },
       
];

export const app : SidebarItem[] = [
    {
        id: 1,
        url: "/admin/app/stopwatch",
        text: "Stop Watch",
        icon: IoMdStopwatch
    },
    {
        id: 2,
        url: "/admin/app/coupon",
        text: "Coupon",
        icon: RiCoupon2Line
    },
    {
        id: 3,
        url: "/admin/app/toss",
        text: "Toss",
        icon: LuGamepad2
    },
       
];


