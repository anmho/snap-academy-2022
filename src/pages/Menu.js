import "./styles/Menu.css";

function Menu() {
  const items = [
    {
      name: "Karaage",
      imageUrl:
        "https://s3-media0.fl.yelpcdn.com/bphoto/WwcgtFLgkbmui_9Wr7cVPA/o.jpg",
      pageUrl:
        "https://www.yelp.com/biz_photos/tenkatori-sawtelle-los-angeles?select=WwcgtFLgkbmui_9Wr7cVPA",
      description: "Japanese Fried Chicken",
    },
    {
      name: "Karaage",
      imageUrl:
        "https://s3-media0.fl.yelpcdn.com/bphoto/VXilcExcGT1qMbVCzZdusw/o.jpg",
      pageUrl:
        "https://www.yelp.com/biz_photos/tenkatori-sawtelle-los-angeles?select=VXilcExcGT1qMbVCzZdusw",
      description: "Japanese Fried Chicken",
    },
    {
      name: "Karaage",
      imageUrl:
        "https://s3-media0.fl.yelpcdn.com/bphoto/rfHbJXeix7d0qMjY9rWJrQ/o.jpg",
      pageUrl:
        "https://www.yelp.com/biz_photos/tenkatori-sawtelle-los-angeles?select=rfHbJXeix7d0qMjY9rWJrQ",
      description: "Japanese Fried Chicken",
    },
    {
      name: "Karaage",
      imageUrl:
        "https://s3-media0.fl.yelpcdn.com/bphoto/RfJpLQyuigr2lbOAOW4JsA/o.jpg",
      pageUrl:
        "https://www.yelp.com/biz_photos/tenkatori-sawtelle-los-angeles?select=gMuvDCSxWyKmSRK2yRKrpA",
      description: "Japanese Fried Chicken",
    },
    {
      name: "Karaage",
      imageUrl:
        "https://s3-media0.fl.yelpcdn.com/bphoto/gMuvDCSxWyKmSRK2yRKrpA/o.jpg",
      pageUrl:
        "https://www.yelp.com/biz_photos/tenkatori-sawtelle-los-angeles?select=gMuvDCSxWyKmSRK2yRKrpA",
      description: "Japanese Fried Chicken",
    },
    {
      name: "Karaage",
      imageUrl:
        "https://s3-media0.fl.yelpcdn.com/bphoto/OKJ8yrYYHgFyhrYMhP4H9Q/o.jpg",
      pageUrl:
        "https://www.yelp.com/biz_photos/tenkatori-sawtelle-los-angeles?select=OKJ8yrYYHgFyhrYMhP4H9Q",
      description: "Japanese Fried Chicken",
    },
  ];

  const renderImage = (item) => {
    return (
      <span className="image-wrapper">
        <a href={item.pageUrl}>
          <img className="item-image" src={item.imageUrl} alt={item.name} />
        </a>
      </span>
    );
  };

  return (
    <div>
      <h1>Menu</h1>
      <div className="container menu-sections">
        <div className="grid">{items.map((item) => renderImage(item))}</div>
        <div className="menu-section">
          <img
            src={require("../images/menu-chicken.jpeg")}
            alt="chicken-menu"
          />
        </div>
        <div className="menu-section">
          <img src={require("../images/menu-other.jpeg")} alt="chicken-menu" />
        </div>
      </div>
    </div>
  );
}

export default Menu;
