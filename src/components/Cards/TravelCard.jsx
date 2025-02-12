import LocationHeader from "../Location/LocationHeader";
import classes from './TravelCard.module.css';

function TravelCard({ destinationImg, country, googleMapsLink, title, dates, text }) {
    return (
        <article className={classes.travelCard}>
            <img className={classes.travelCardImg} src={destinationImg.src} alt={destinationImg.alt} />
            <div className="destination-container">
                <LocationHeader 
                    country={country} 
                    googleMapsLink={googleMapsLink} />
                <h2 className={classes.travelCardH2}>{title}</h2>
                <h3 className={classes.travelCardH3}>{dates}</h3>
                <p className={classes.travelCardP}>{text}</p>
            </div>
        </article>
    );
}

export default TravelCard;