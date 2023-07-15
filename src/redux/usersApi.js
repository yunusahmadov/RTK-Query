import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const usersApi=createApi({
    reducerPath:'usersApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://reqres.in/'}),
    endpoints:(build)=>({
        getUsers:build.query({
            query:(limit='')=> `api/users?${limit && `_limit=${limit}`}`,
        })
    }),
    
    
})


export const {useGetUsersQuery}=usersApi