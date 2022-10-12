import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './Header';
export const TopicsContext = createContext([]);
const Root = () => {
    const topics = useLoaderData();
   
    return (
        <div>
          <TopicsContext.Provider value={topics.data}>
          <Header></Header>
           <Outlet></Outlet>
          </TopicsContext.Provider>
        </div>
    );
};

export default Root;