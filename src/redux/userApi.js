import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const userApi=createApi({
    reducerPath:'userApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://reqres.in/'}),
    endpoints:(build)=>({
        getUser:build.query({
            query:()=>`/api/users/5`,
        })
    })
})

export const {useGetUserQuery}=userApi