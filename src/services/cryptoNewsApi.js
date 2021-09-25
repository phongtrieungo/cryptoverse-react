import {
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react';

const cryptoNewsApiHeader = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '463ba6a1c1mshc8ef46135e5377ap18525ejsnb887f83c92be'
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = url => ({
    url,
    headers: cryptoNewsApiHeader
});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({
        baseUrl
    }),
    endpoints: builder => ({
        getCryptoNews: builder.query({
            query: ({
                newsCategory,
                count
            }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
});

export const {
    useGetCryptoNewsQuery
} = cryptoNewsApi;
