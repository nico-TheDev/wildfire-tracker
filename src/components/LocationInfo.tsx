import React from "react";

interface IProps {
    data: {
        title: string | null | undefined;
        description: string | null | undefined;
        id: string | null | undefined | number;
    };
}

const LocationInfo: React.FC<IProps> = ({ data }) => {
    return (
        <div className="info">
            <h4>ID:{data.id}</h4>
            <h4>TITLE:{data.title}</h4>
            <p>DESCRIPTION:{"NO DESCRIPTION" ?? data.description}</p>
        </div>
    );
};

export default LocationInfo;
