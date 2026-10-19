import { useState } from "react";
import Item from "./Item";

type Product = {
  id: number;
  name: string;
  price: number;
};

function App() {
  const [items, setItems] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function addItem() {
    if (name === "" || price === "") {
      alert("Заполните все поля");
      return;
    }

    const newItem: Product = {
      id: Date.now(),
      name: name,
      price: Number(price),
    };

    setItems([...items, newItem]);
    setName("");
    setPrice("");
  }

  function deleteItem(id: number) {
    setItems(items.filter((item) => item.id !== id));
  }

  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }

  return (
    <div className="container">
      <h1>Список покупок</h1>

      <input
        type="text"
        placeholder="Название"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Цена"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={addItem}>Добавить</button>

      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            onDelete={deleteItem}
          />
        ))}
      </ul>

      <div className="total">Общая стоимость: {total} сом</div>
    </div>
  );
}

export default App;
