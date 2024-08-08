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

//   product data

  export interface Product {
    id: number;
    photo:string;
    name: string;
    price: number;
    stock: number;
    category : string
    // action: ReactElement
    action: string;
  }

  const img1 = "https://pngimg.com/uploads/laptop/laptop_PNG101764.png";
  const img2 = "https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Clipart.png"
  const img3 = "https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-the-smartwatch-banner-png-image_11919210.png"
 const img4 = "https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/charge-5/hero-static/charge5-black-device-3qtr.png"
 const img5 = "https://png.pngtree.com/png-vector/20230407/ourmid/pngtree-bluetooth-headset-electronics-red-transparent-png-image_6687197.png"

  export const Products: Product[] = [
    { id: 1, name: 'Gaming Laptop', price: 1299, stock: 15, category: 'Electronics', action: "Manage", photo: img1 },
    { id: 2, name: 'Smartphone', price: 699, stock: 20, category: 'Electronics', action: "Manage", photo: img2 },
    { id: 3, name: 'Fitness Tracker', price: 99, stock: 30, category: 'Accessories', action: "Manage", photo: img3 },
    { id: 4, name: '4K Monitor', price: 349, stock: 10, category: 'Electronics', action: "Manage", photo: img5 },
    { id: 5, name: 'Bluetooth Headphones', price: 149, stock: 25, category: 'Accessories', action: "Manage", photo: img2 },
    { id: 6, name: 'Wireless Mouse', price: 29, stock: 50, category: 'Electronics', action: "Manage", photo: img4 },
    { id: 7, name: 'Mechanical Keyboard', price: 89, stock: 12, category: 'Electronics', action: "Manage", photo: img1 },
    { id: 8, name: 'Smart Home Speaker', price: 199, stock: 8, category: 'Accessories', action: "Manage", photo: img2 },
    { id: 9, name: 'External SSD', price: 259, stock: 6, category: 'Electronics', action: "Manage", photo: img3 },
    { id: 10, name: 'Action Camera', price: 499, stock: 5, category: 'Electronics', action: "Manage", photo: img5 },
    { id: 11, name: 'Tablet', price: 399, stock: 18, category: 'Electronics', action: "Manage", photo: img2 },
    { id: 12, name: 'Smartwatch', price: 249, stock: 22, category: 'Accessories', action: "Manage", photo: img5 },
    { id: 13, name: 'Laptop Stand', price: 59, stock: 35, category: 'Accessories', action: "Manage", photo: img1 },
    { id: 14, name: 'Desk Lamp', price: 45, stock: 40, category: 'Accessories', action: "Manage", photo: img4 },
    { id: 15, name: 'Webcam', price: 89, stock: 28, category: 'Electronics', action: "Manage", photo: img3 },
  ];

//   customers data
const img01 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdvHO3qHjpil9S7NCQHb766lEGUyiuPPrHQg&s"
const img02 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIvYT9zY25Pjsbw9Ier_-4nI2iHBA2JeK4EQ&s"
const img03 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00b0S9PaTtcZ84tTKJ0a4kmFPUL0unrkw1Q&s"
const img04 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-9I44lKrqr1a-qrgKSsb8RVgliz3lKvYGDA&s"
const img05 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhfiJ-1T2MNpEforhO58TlsedzvEhZWEYgSA&s"

export interface CustomerType {
    id: number;
    avatar:string;
    name: string;
    gender: string;
    email: string;
     role : string;
    action: string;
  }

  
  export const Customers: CustomerType[] = [
    {
      "id": 1,
      "avatar": img04,
      "name": "John Doe",
      "gender": "Male",
      "email": "johndoe@example.com",
      "role": "User",
      "action": "delete"
    },
    {
      "id": 2,
      "avatar": img01,
      "name": "Jane Smith",
      "gender": "Female",
      "email": "janesmith@example.com",
      "role": "User",
      "action": "delete"
    },
    {
      "id": 3,
      "avatar": img03,
      "name": "Sam Brown",
      "gender": "Male",
      "email": "sambrown@example.com",
      "role": "Admin",
      "action": "delete"
    },
    {
      "id": 4,
      "avatar": img02,
      "name": "Lisa Johnson",
      "gender": "Female",
      "email": "lisajohnson@example.com",
      "role": "User",
      "action": "delete"
    },
    {
      "id": 5,
      "avatar": img02,
      "name": "Paul Wilson",
      "gender": "Male",
      "email": "paulwilson@example.com",
      "role": "User",
      "action": "delete"
    },
    {
      "id": 6,
      "avatar": img05,
      "name": "Emily Davis",
      "gender": "Female",
      "email": "emilydavis@example.com",
      "role": "User",
      "action": "delete"
    },
    {
      "id": 7,
      "avatar": img03,
      "name": "Michael Miller",
      "gender": "Male",
      "email": "michaelmiller@example.com",
      "role": "User",
      "action": "delete"
    },
    {
      "id": 8,
      "avatar": img01,
      "name": "Jessica Garcia",
      "gender": "Female",
      "email": "jessicagarcia@example.com",
      "role": "User",
      "action": "delete"
    },
    {
      "id": 9,
      "avatar": img04,
      "name": "David Martinez",
      "gender": "Male",
      "email": "davidmartinez@example.com",
      "role": "User",
      "action": "delete"
    },
    {
      "id": 10,
      "avatar": img05,
      "name": "Sarah Anderson",
      "gender": "Female",
      "email": "sarahanderson@example.com",
      "role": "User",
      "action": "delete"
    },
    {
      "id": 11,
      "avatar": img01,
      "name": "Daniel Thomas",
      "gender": "Male",
      "email": "danielthomas@example.com",
      "role": "User",
      "action": "delete"
    },
    {
      "id": 12,
      "avatar": img02,
      "name": "Laura Taylor",
      "gender": "Female",
      "email": "laurataylor@example.com",
      "role": "Admin",
      "action": "delete"
    },
    {
      "id": 13,
      "avatar": img04,
      "name": "James Lee",
      "gender": "Male",
      "email": "jameslee@example.com",
      "role": "User",
      "action": "delete"
    },
    {
      "id": 14,
      "avatar": img03,
      "name": "Sophie Harris",
      "gender": "Female",
      "email": "sophieharris@example.com",
      "role": "User",
      "action": "delete"
    },
    {
      "id": 15,
      "avatar": img05,
      "name": "Peter Clark",
      "gender": "Male",
      "email": "peterclark@example.com",
      "role": "User",
      "action": "delete"
    }
  ]
  


//   transaction table data

interface TransactionType {
    id: number,
    user:string,
    amount:number,
    quantity:string,
    status:string,
    action:string
}

export const Transactions:TransactionType[] = [
        {
          "id": 1,
          "user": "John Doe",
          "amount": 150,
          "quantity": "2",
          "status": "Pending",
          "action": "Manage"
        },
        {
          "id": 2,
          "user": "Jane Smith",
          "amount": 300,
          "quantity": "1",
          "status": "Delivered",
          "action": "Manage"
        },
        {
          "id": 3,
          "user": "Alice Johnson",
          "amount": 450,
          "quantity": "3",
          "status": "Pending",
          "action": "Manage"
        },
        {
          "id": 4,
          "user": "Bob Brown",
          "amount": 120,
          "quantity": "1",
          "status": "Shipped",
          "action": "Manage"
        },
        {
          "id": 5,
          "user": "Charlie Davis",
          "amount": 200,
          "quantity": "2",
          "status": "Cancelled",
          "action": "Manage"
        },
        {
          "id": 6,
          "user": "Diana Evans",
          "amount": 340,
          "quantity": "4",
          "status": "Delivered",
          "action": "Manage"
        },
        {
          "id": 7,
          "user": "Frank Green",
          "amount": 500,
          "quantity": "5",
          "status": "Pending",
          "action": "Manage"
        },
        {
          "id": 8,
          "user": "Grace Hall",
          "amount": 250,
          "quantity": "2",
          "status": "Shipped",
          "action": "Manage"
        },
        {
          "id": 9,
          "user": "Henry Adams",
          "amount": 300,
          "quantity": "3",
          "status": "Delivered",
          "action": "Manage"
        },
        {
          "id": 10,
          "user": "Ivy Baker",
          "amount": 400,
          "quantity": "4",
          "status": "Pending",
          "action": "Manage"
        }
      
]
