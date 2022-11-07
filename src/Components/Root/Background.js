/*
 This is darkmode toggler component
*/


import React from 'react';

const Background = ({ children }) => {
    return (
        <body className="bg-white dark:bg-black text-black dark:text-white transition-all">
            {children}
        </body>
    );
};

export default Background;