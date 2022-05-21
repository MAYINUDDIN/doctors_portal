import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <h1 className="text-4xl font-bold text-left">
        <button className="btn btn-primary text-white uppercase rounded-md font-bold
    bg-gradient-to-r from-secondary to-primary">{children}</button>
    </h1>
    );
};

export default PrimaryButton;