import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfo from "./LocationInfo";

interface EventsData {
    id: number | string;
    title: string;
    description: string;
    link: string;
    categories: Array<any>;
    sources: Array<any>;
    geometries: {
        coordinates: number[];
        date: string;
        type: string;
    }[];
}
interface IProps {
    center: {
        lat: number;
        lng: number;
    };
    zoom: number;
    eventData: EventsData[] | undefined;
}

const Map: React.FC<IProps> = ({ eventData, center, zoom }) => {
    const [current, setCurrent] = useState<EventsData | null | undefined>(null);

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyAtSy0NYRkQBRPcXgZ0xmAUNXCWz1lb9Uo",
                }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {eventData
                    ?.filter((event) => event.categories[0].id === 8)
                    .map((event) => (
                        <LocationMarker
                            lat={event.geometries[0].coordinates[1]}
                            lng={event.geometries[0].coordinates[0]}
                            onClick={() => setCurrent(event)}
                            key={event.id}
                        />
                    ))}
            </GoogleMapReact>
            {current && (
                <LocationInfo
                    data={{
                        title: current?.title,
                        description: current?.description,
                        id: current?.id,
                    }}
                />
            )}
        </div>
    );
};

export default Map;
