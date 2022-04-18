import "./styles/MenuItem.css";

function MenuItem({ name, imagePath }) {
  return (
    <div className="menu-item">
      <h3>{name}</h3>
      <img src={imagePath} alt={name} />
    </div>
  );
}

export default MenuItem;
