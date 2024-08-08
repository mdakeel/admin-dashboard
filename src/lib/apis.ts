import { FormType } from "../types/types";


const BASE_URL = "https://dukaan-xn7o.onrender.com"

// Fetch all data
export const getProducts = async () => {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
        throw new Error(`Network response was not ok. Status: ${response.status}`);
    }
    return response.json(); 
};

// create product data
export const createProduct = async (newProdcut : FormType) => {
    const response = await fetch(`${BASE_URL}/products`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(newProdcut)
    })
    if (!response.ok) {
        throw new Error(`Network response was not ok. Status: ${response.status}`);
    }
    return response.json(); 
}


// update post
export const updateProduct = async (updatedPost : FormType) => {
    const response = await fetch(`${BASE_URL}/products/${updatedPost.id}`, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedPost)
    })
    if(!response.ok){
        throw new Error(`Network response was not ok. Status: ${response.status}`)
    }
    return response.json();
}

// delete product
export const deleteProduct = async (id : FormType) =>{
    const response = await fetch(`${BASE_URL}/products/${id}`,{
        method : "DELETE",
    })
    if(!response.ok){
        throw new Error(`Network response was not ok. Status: ${response.status}`)
    }
    return response.json();
}


// Fetch all customers data---------------------------------

export const getCustomers = async () => {
    const response = await fetch(`${BASE_URL}/customers`);
    if (!response.ok) {
        throw new Error(`Network response was not ok. Status: ${response.status}`);
    }
    return response.json(); 
};

// delete product
export const deleteCustomer = async (id: string) => {
    const response = await fetch(`${BASE_URL}/customers/${id}`, {
      method: 'DELETE',
    });
  
    if (!response.ok) {
      throw new Error(`Network response was not ok. Status: ${response.status}`);
    }
    return response.json();
  };

//   transaction---------------------------------

// Fetch all customers data
export const getTransactions = async () => {
    const response = await fetch(`${BASE_URL}/transactions`);
    if (!response.ok) {
        throw new Error(`Network response was not ok. Status: ${response.status}`);
    }
    return response.json(); 
};

  