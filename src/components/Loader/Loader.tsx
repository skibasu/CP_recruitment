import React from "react";
import image from "./loader.svg";
const Loader: React.FC = () => (
    <div>
        <img data-testid="loader" src={image} alt="loader" />
    </div>
);
export default Loader;
