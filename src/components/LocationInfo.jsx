import './styles/LocationInfo.css'

const LocationInfo = ({ location }) => {
    return (
        <section className="location">
            <h2 className="location_name">{location?.name}</h2>
            <ul className="location_list flex-container">
                <li className="location_item grid-container">
                    <span className="location_label">Type:</span>
                    <span className="location_value">{location?.type}</span>
                </li>
                <li className="location_item grid-container">
                    <span className="location_label">Dimension:</span>
                    <span className="location_value">{location?.dimension}</span>
                </li>
                <li className="location_item grid-container"><span>Population:</span>
                    <span className="location_value">{location?.residents.length}</span>
                </li>
            </ul>
        </section>
    );
};

export default LocationInfo;
