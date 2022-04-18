import "./styles/Map.css";

function Map({ locationName, address, phoneNumber }) {
  // Frontend only, so can't secure key in backend
  const MAPS_API_KEY = "AIzaSyBvAQiJJYTBHz93__4We_3juXkhxOzFmO0";

  return (
    <div className="location-info">
      <h3>{locationName}</h3>
      <p>{address}</p>
      <p>{phoneNumber}</p>
      <div className="map">
        <iframe
          title={locationName}
          // xwidth="400"
          // height="150"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}
    &q=Tenkatori+USA+${locationName}`}
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
