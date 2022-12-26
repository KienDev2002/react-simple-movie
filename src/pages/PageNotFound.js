import React from "react";

const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-red-400">
                <span className="font-semibold text-[40px]">404</span> Error
            </h1>
            <h1>Page Not Found</h1>
        </div>
    );
};

export default PageNotFound;
