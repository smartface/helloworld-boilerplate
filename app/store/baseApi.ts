// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const baseAPI = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://petstore3.swagger.io/api/v3' }),
    endpoints: () => ({}),
})

