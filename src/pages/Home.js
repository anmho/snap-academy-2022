import OrderButton from "../components/OrderButton";
import "./styles/Home.css";

function Home() {
  return (
    <div>
      <div className="home-image">
        <div className="container">
          <h1 className="greeting-text">ORDER DELIVERY</h1>
          <div className="order-buttons">
            <OrderButton
              url={
                "https://www.grubhub.com/restaurant/tenkatori-2130-sawtelle-blvd-unit-210b-los-angeles/2875359"
              }
              text={"GRUBHUB"}
            />
            <OrderButton
              url={"https://www.yelp.com/biz/tenkatori-karaage-costa-mesa-2"}
              text={"DOORDASH"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
