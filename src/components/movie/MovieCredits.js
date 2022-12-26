import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";

import { tmdbAPI } from "~/config";
import FallbackComponent from "~/components/error/FallbackComponent";

const MovieCredits = ({ cast }) => {
    return (
        <Fragment>
            <h2 className="mb-10 text-3xl text-center">Casts</h2>
            <div className="grid grid-cols-4 gap-5">
                {cast.slice(0, 4).map((item) => (
                    <div key={item.id} className="cast-item">
                        <img
                            key={item.id}
                            src={tmdbAPI.imageOriginal(item.profile_path)}
                            alt=""
                            className="w-full h-[350px] object-cover rounded-lg mb-3"
                        />
                        <h3 className="text-xl font-medium text-center">
                            {item.name}
                        </h3>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

MovieCredits.propTypes = {
    cast: PropTypes.array.isRequired,
};

export default withErrorBoundary(MovieCredits, {
    FallbackComponent,
});
