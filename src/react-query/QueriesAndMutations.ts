import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createProduct, deleteCustomer, deleteProduct, getCustomers, getProducts, getTransactions, updateProduct } from '../lib/apis';
import { Customer, FormType, Transaction } from '../types/types';

// fetching all products
export const useGetProducts = () => {
    return useQuery<FormType[], Error>({
        queryKey: ["products"],
        queryFn: getProducts,
        // // onSuccess: (data:FormType) => {
        // //     console.log(data);
        // //     return data;
        // // },
        // onError: (error:Error) => {
        //     console.error(error);
        // }
    });
};

export const useCreateProduct = () => {
    const queryClient = useQueryClient() 
    return useMutation({
        mutationFn: createProduct,
        onSuccess: (data) => {
            queryClient.invalidateQueries(data)
        },
        onError: (error) => {
            console.error(error);
        }
    })
}

// update product

export const useUpdateProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateProduct,
        onSuccess: (data) => {
            queryClient.invalidateQueries(data)         
        },
        onError: (error) => {
            console.error(error);
        }
    })
}


// delete product
export const useDeleteProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteProduct,
        onSuccess: (data) => {
            queryClient.invalidateQueries(data)
            
        },
        onError: (error) => {
            console.error(error);
        }
    })

}

// fetching all customer
export const useGetCustomers = () => {
   
    return useQuery<Customer[], Error>({
        queryKey: ['customers'],
        queryFn: getCustomers,
   
    });
};

// delete customer
export const useDeleteCustomer = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteCustomer,
        onSuccess: (data) => {
            queryClient.invalidateQueries(data)
            
        },
        onError: (error) => {
            console.error(error);
        }
    })

}


// transaction 
export const useGetTransactions = () => {

     return useQuery<Transaction[], Error>({
         queryKey: ['transactions'],
         queryFn: getTransactions,

     });
 };


