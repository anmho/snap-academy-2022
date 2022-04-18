import "./styles/Footer.css";
import Map from "./Map.js";

function Footer() {
  return (
    <footer>
      <div className="contact">
        <div className="icons">
          <a
            className="link-dark"
            href="https://www.facebook.com/tenkatoriusa/"
          >
            <span className="icon">
              <i className="bi-facebook" />
            </span>
          </a>

          <a
            className="link-dark"
            href="https://www.instagram.com/tenkatoriusa1962/"
          >
            <span className="icon">
              <i className="bi-instagram" />
            </span>
          </a>

          <a
            href="https://www.yelp.com/biz/tenkatori-sawtelle-los-angeles"
            className="link-dark"
          >
            <span className="icon">
              <i className="fa fa-yelp" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </div>

      <div className="inner-footer">
        <h1 className="subtitle">LOCATIONS</h1>
        {/* <div className="grid-col" /> */}
        <div className="locations container">
          <Map
            className="location-info"
            locationName="Sawtelle"
            address="2130 Sawtelle Blvd #210B, Los Angeles, CA 90025"
            phoneNumber={"(310) 606-1002"}
          />
          <Map
            className="location-info"
            locationName="Costa Mesa"
            address="3001 Bristol St D, Costa Mesa, CA 92626"
            phoneNumber={"(714) 641-7004"}
          />
          <Map
            className="location-info"
            locationName="Gardena"
            address="1740 Artesia Blvd, Gardena, CA 90248"
            phoneNumber={"(310) 627-7822"}
          />
        </div>
        <small className="disclaimer">
          This is an unofficial demo website made for Snap Engineering Academy
          2022
        </small>
        {/* <div className="grid-col" /> */}
      </div>
    </footer>
  );
}

export default Footer;
