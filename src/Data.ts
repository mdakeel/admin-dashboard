import { IconType } from 'react-icons';
import { RiDashboardLine, RiCoupon2Line, RiShoppingBag2Line } from 'react-icons/ri';
import { IoMdStopwatch } from 'react-icons/io';
import { LuBarChart4, LuGamepad2 } from 'react-icons/lu';
import { PiChartLineUpBold } from 'react-icons/pi';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { TbChartPie } from 'react-icons/tb';
import { FaRegFileAlt } from 'react-icons/fa';
import { ReactElement } from 'react';

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
        url: '/admin/products',
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


interface Transaction {
    id: number;
    name: string;
    date: string;
    quantity: number
    amount: number;
    status: string
  }
  
  export const transactions: Transaction[] = [
    { id: 1, name: 'John Doe', date: '2024-01-01', quantity: 4,  amount: 200, status: 'Pending' },
    { id: 2, name: 'Jane Smith', date: '2024-02-15', quantity: 7,  amount: 450, status: 'Processing' },
    { id: 3, name: 'Mike Johnson', date: '2024-03-10', quantity: 2,  amount: 300, status: 'Pending' },
    { id: 4, name: 'Chris Lee', date: '2024-04-05', quantity: 13,  amount: 150, status: 'Shipped' },
  ];

//   product data

  interface Product {
    id: number;
    photo:string;
    name: string;
    price: number;
    stock: number;
    // action: ReactElement
    action: string;
  }

  const img1 = "https://pngimg.com/d/laptop_PNG101764.png"
  const img2 = "https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Clipart.png"
  const img3 = "https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-the-smartwatch-banner-png-image_11919210.png"

  export const Products: Product[] = [
    { id: 1, photo:img1, name: 'Laptop', price: 23,  stock: 7, action: "Manage"},
    { id: 2, photo:img2, name: 'Mobile', price: 13,  stock: 3, action: "Manage"},
    { id: 3, photo:img3, name: 'Smart Watch', price: 17,  stock: 17, action: "Manage"},
  ];
