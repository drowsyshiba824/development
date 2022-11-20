import './Item.css';

function Item({ itemData }) {
  return (
    <div className="item-container">
      {itemData.name}
      {itemData.price}
    </div>
  );
}

export default Item;
