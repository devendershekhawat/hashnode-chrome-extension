import React from 'react';
import Hero from '../components/Hero';
import { Client, cacheExchange, fetchExchange, Provider } from 'urql';
import Feed from '../components/Feed';

export const gqlClient = new Client({
  url: 'https://gql.hashnode.com/',
  exchanges: [cacheExchange, fetchExchange]
})

export default function App() {
    return (
        <Provider value={gqlClient}>
          <div className="w-full min-h-full dark:bg-slate-900 relative">
            <Hero />
            <Feed />
          </div>
        </Provider>
    )
}