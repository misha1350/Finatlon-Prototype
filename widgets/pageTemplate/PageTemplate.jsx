import React from 'react';
import { Footer } from '../../shared/footer/footer';
import { Header } from '../../shared/header/header';

export const PageTemplate = ({children}) => {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>   
            <Footer/>
        </>
    );
};
