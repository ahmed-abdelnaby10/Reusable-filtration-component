import React from 'react';

const ErrorPage = ({ error }) => {
    return (
        <div className="flex justify-center items-center h-screen">
            <h2 className="text-2xl text-danger-color font-bold">Error: Try again later!</h2>
        </div>
    );
};

export default ErrorPage;