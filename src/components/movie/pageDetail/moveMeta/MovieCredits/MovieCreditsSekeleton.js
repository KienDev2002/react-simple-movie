import React, { Fragment } from "react";
import LoadingSkeleton from "~/components/loading/LoadingSkeleton";

const MovieCreditsSekeleton = () => {
    return (
        <Fragment>
            <h2 className="mb-10 text-3xl text-center">Casts loading</h2>
            <div className="grid grid-cols-4 gap-5">
                <div className="cast-item">
                    <LoadingSkeleton
                        className="mb-5"
                        width="100%"
                        height="250px"
                        radius="8px"
                    ></LoadingSkeleton>
                    <LoadingSkeleton
                        className="mx-auto"
                        width="100px"
                        height="30px"
                    ></LoadingSkeleton>
                </div>
                <div className="cast-item">
                    <LoadingSkeleton
                        className="mb-5"
                        width="100%"
                        height="250px"
                        radius="8px"
                    ></LoadingSkeleton>
                    <LoadingSkeleton
                        className="mx-auto"
                        width="100px"
                        height="30px"
                    ></LoadingSkeleton>
                </div>
                <div className="cast-item">
                    <LoadingSkeleton
                        className="mb-5"
                        width="100%"
                        height="250px"
                        radius="8px"
                    ></LoadingSkeleton>
                    <LoadingSkeleton
                        className="mx-auto"
                        width="100px"
                        height="30px"
                    ></LoadingSkeleton>
                </div>
                <div className="cast-item">
                    <LoadingSkeleton
                        className="mb-5"
                        width="100%"
                        height="250px"
                        radius="8px"
                    ></LoadingSkeleton>
                    <LoadingSkeleton
                        className="mx-auto"
                        width="100px"
                        height="30px"
                    ></LoadingSkeleton>
                </div>
            </div>
        </Fragment>
    );
};

export default MovieCreditsSekeleton;
