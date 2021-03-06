import React from 'react';

// error handling for unknown route link
const Error = () => {
    return (
        <div className="my-5">
            <div>
                <img style={{ width: "30%" }} src="https://blog.fluidui.com/content/images/2019/01/imageedit_1_9273372713.png" alt="" />
            </div>
            <div>
                <h2 className="text-danger fs-1 py-4">Oops!</h2>
                <p className="fs-4 pb-4">The page you are looking for is not available</p>
            </div>
        </div>
    );
};

export default Error;