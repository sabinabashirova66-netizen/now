type ItemProps = {
  id: number;
  name: string;
  price: number;
  onDelete: (id: number) => void;
};

function Item(props: ItemProps) {
  return (
    <li>
      <span>{props.name}</span>
      <span>{props.price} сом</span>
      <button onClick={() => props.onDelete(props.id)}>Удалить</button>
    </li>
  );
}

export default Item;
