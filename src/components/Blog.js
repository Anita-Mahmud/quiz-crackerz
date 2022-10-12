import React from 'react';

const Blog = () => {
    return (
        
            <div className=" w-full dark:bg-gray-800 dark:text-gray-100">
                <div className="container  mb-10 max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between ">
                        <span className="text-sm dark:text-gray-400">Oct 12, 2022</span>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-2xl font-bold mb-4 hover:underline">What is the purpose of React router</h2>
                        <p className="mt-2">React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.By preventing a page refresh, and using Router or Link, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.</p>
                    </div>
                   
                </div> 
                  <div className="container mb-10 max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">Oct 12, 2022</span>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-2xl font-bold mb-4 hover:underline">How does context API works</h2>
                        <p className="mt-2">
                        Context provides a way to pass data through the component tree without having to pass props down manually at every level.

In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
                        </p>
                    </div>
                   
                </div>
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">Oct 12, 2022</span>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-2xl font-bold mb-4 hover:underline">About useRef</h2>
                        <p className="mt-2">
                        useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.useRef() creates a plain JavaScript object.useRef will give  the same ref object on every render.useRef doesn’t notify you when its content changes. Mutating the .current property doesn’t cause a re-render.
                        </p>
                    </div>
                   
                </div>
            </div>
          
        
    );
};

export default Blog;