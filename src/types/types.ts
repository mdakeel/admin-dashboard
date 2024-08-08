export interface FormType {
    id: number;
    name: string;
    price: string; // Assuming price is a number
    stock: string; // Assuming stock is a number
    category: string;
    photo: string;
    action: string;
  }


 export interface Customer {
  id: string,
    avatar: string;
    name: string;
    gender: string;
    email: string;
    role: string;
    action: string;
  }


  export interface Transaction {
    id: number;
    user: string;
    amount: number;
    quantity:string;
    status: string;
    action: string;
  }