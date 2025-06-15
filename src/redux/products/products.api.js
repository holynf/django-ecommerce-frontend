import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const productsApi = createApi({
    reducerPath: 'products/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api/v1'
    }),
    // refetchOnFocus: true,
    endpoints: build => ({
        getProductsAll: build.query({
            query:() => ({
                url: '/store/products'
            })
        }),
        getProductById: build.query({
            query:(slug) => ({
                url: `/store/products/${slug}`
            })
        }),
        getProductByCategory: build.query({
            query:(category) => ({
                url: `/products/category/${category}`
            })
        })
    })
})

export const {
    useGetProductsAllQuery,
    useGetProductByIdQuery,
    useGetProductByCategoryQuery
} = productsApi
