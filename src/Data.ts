import { IconType } from 'react-icons';
import { RiDashboardLine, RiCoupon2Line, RiShoppingBag2Line } from 'react-icons/ri';
import { IoMdStopwatch } from 'react-icons/io';
import { LuBarChart4, LuGamepad2 } from 'react-icons/lu';
import { PiChartLineUpBold } from 'react-icons/pi';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { TbChartPie } from 'react-icons/tb';
import { FaRegFileAlt } from 'react-icons/fa';


export interface SidebarItem {
    id: number;
    url: string;
    text: string;
    icon: IconType;
}

export interface CategoriesItem {
    id: number;
    value: number;
    heading: string;
}

export const dashboard: SidebarItem[] = [
    {
        id: 1,
        url: '/admin/dashboard',
        text: 'Dashboard',
        icon: RiDashboardLine
    },
    {
        id: 2,
        url: '/admin/product',
        text: 'Products',
        icon: RiShoppingBag2Line
    },
    {
        id: 3,
        url: '/admin/customers',
        text: 'Customers',
        icon: MdOutlinePeopleAlt
    },
    {
        id: 4,
        url: '/admin/transaction',
        text: 'Transaction',
        icon: FaRegFileAlt
    }
];

export const charts: SidebarItem[] = [
    {
        id: 1,
        url: '/admin/chart/bar',
        text: 'Bar',
        icon: LuBarChart4
    },
    {
        id: 2,
        url: '/admin/chart/pie',
        text: 'Pie',
        icon: TbChartPie
    },
    {
        id: 3,
        url: '/admin/chart/line',
        text: 'Line',
        icon: PiChartLineUpBold
    },
];

export const app: SidebarItem[] = [
    {
        id: 1,
        url: '/admin/app/stopwatch',
        text: 'Stop Watch',
        icon: IoMdStopwatch
    },
    {
        id: 2,
        url: '/admin/app/coupon',
        text: 'Coupon',
        icon: RiCoupon2Line
    },
    {
        id: 3,
        url: '/admin/app/toss',
        text: 'Toss',
        icon: LuGamepad2
    },
];

export const categories: CategoriesItem[] = [
    {
        id: 1,
        value: 40,
        heading: 'Laptop'
    },
    {
        id: 2,
        value: -30,
        heading: 'Smartphone'
    },
    {
        id: 3,
        value: 100,
        heading: 'Tablet'
    },
    {
        id: 4,
        value: 70,
        heading: 'Accessories'
    }
];



//   categories 
interface CategoryType{
    id: number;
    name : string
}

export const Categories: CategoryType[] =[
    {
        id:1,
        name : "All"
    },
    {
        id:2,
        name : "Electronics"
    },
    {
        id:3,
        name : "Laptop"
    },
    {
        id:4,
        name : "Watch"
    },
    {
      id:5,
      name : "Mobile"
  },
]

 
  

  


