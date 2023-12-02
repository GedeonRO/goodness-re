import React from "react";


const RoundedIconItem = (props) => {
    return (
        <div
            style={{
                width: 35,
                height: 35,
                background: props.background || "grey",
                borderRadius: 35,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
            }}
        >
            {props.children}
        </div>
    );
};

export default RoundedIconItem;