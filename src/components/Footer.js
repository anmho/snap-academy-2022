import "./styles/Footer.css";

function Footer() {
  const MAPS_API_KEY = "AIzaSyAjghdkXAJ9E6c3bJTPCWI29tYdHaU1oxA";
  return (
    <footer>
      <div className="container"></div>
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
        <div className="locations container">
          <div className="container"></div>
          <div className="location-info">
            <h3>Sawtelle</h3>
            <p>2130 Sawtelle Blvd #210B, Los Angeles, CA 90025</p>
            <p>(310) 606-1002</p>
            <iframe
              title="location"
              width="450"
              height="150"
              style={{ border: 0 }}
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}
    &q=Tenkatori+USA+Sawtelle`}
            ></iframe>
          </div>

          <div className="location-info">
            <h3>Costa Mesa</h3>
            <p>3001 Bristol St D, Costa Mesa, CA 92626</p>
            <p>(714) 641-7004</p>
            <iframe
              title="location"
              width="450"
              height="150"
              style={{ border: 0 }}
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}
    &q=Tenkatori+USA+Sawtelle`}
            ></iframe>
          </div>

          <div className="location-info">
            <h3>Gardena</h3>
            <p>1740 Artesia Blvd, Gardena, CA 90248</p>
            <p>(310) 627-7822</p>
            <iframe
              title="location"
              width="450"
              height="150"
              style={{ border: 0 }}
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}
    &q=Tenkatori+USA+Sawtelle`}
            ></iframe>
          </div>
        </div>
        <small className="disclaimer">
          This is an unofficial demo website made for Snap Engineering Academy
          2022
        </small>
      </div>
    </footer>
  );
}

export default Footer;
