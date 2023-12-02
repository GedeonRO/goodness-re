import React from "react";


const Rounded = ({ background, icon }) => {
    return (
        <div
            style={{
                width: 35,
                height: 35,
                background: background || "grey",
                borderRadius: 35,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
            }}
        >
            {icon}
        </div>
    );
};

export default Rounded;