import Header from './Header.jsx';
import TravelCard from './Cards/TravelCard.jsx';
import useTravelData from './hooks/useTravelData.js';

function TravelJournal() {
    const [travelData, setTravelData] = useTravelData();

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