import { useState, useEffect } from "react";
import Map from "./components/Map";

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

function App() {
    const [eventData, setEventData] = useState<EventsData[] | undefined>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchEvents = async () => {
            setIsLoading(true);
            const res = await fetch(
                "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
            );
            const { events } = await res.json();
            setIsLoading(false);
            setEventData(events);
            return events;
        };
        fetchEvents();
    }, []);

    return !isLoading ? (
        <Map
            center={{ lat: 42.3265, lng: -122.8756 }}
            zoom={6}
            eventData={eventData}
        />
    ) : (
        <div className="loader">
            <div className="loader-text">LOADING...</div>
        </div>
    );
}

export default App;
