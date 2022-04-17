import "./styles/OrderButton.css";

function OrderButton({ url, text }) {
  return (
    <a href={url}>
      <button className=" btn btn-light">
        <span className="order-button-text">{text}</span>
      </button>
    </a>
  );
}

export default OrderButton;
