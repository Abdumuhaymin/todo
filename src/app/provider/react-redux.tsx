"use client";
import React from "react";
import { store } from "@/redux/store";
import { Provider } from "react-redux";




export const  ReduxProvider: React.FC<{children: React.ReactNode}> = ( {children} ) => {

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
} 