import { useState } from 'react';
import Header from './Header.jsx';
import DATA from '../data.js';
import TravelCard from './Cards/TravelCard.jsx';

function TravelJournal() {
    const [travelData, setTravelData] = useState(DATA);

    return (
        <section>
            <Header />
            {travelData.map((destination) => (
                <TravelCard key={destination.id} 
                            destinationImg={destination.img} 
                            country={destination.country}
                            googleMapsLink={destination.googleMapsLink}
                            title={destination.title}
                            dates={destination.dates}
                            text={destination.text} />
            ))}
        </section>
    );
}

export default TravelJournal;