import "./styles/MenuItem.css";

function MenuItem({item}) {
  return (
    <div className="menu-item">
      <h3>{item.name}</h3>
      <img src={`../images/${item.imagePath}`} alt={item.name} />
      <p className="description">{item.description}</p>
    </div>
  );
}

export default MenuItem;
