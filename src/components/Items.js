import Item from './Item';
import './Items.css';

function Items({ itemsData }) {
  return (
    <div className="items-container">
      {itemsData.map((itemData, index) => <Item key={index} itemData={itemData}/>)}
    </div>
  );
}

export default Items;
