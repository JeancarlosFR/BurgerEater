import { MenuItem } from "../types"

type menuItemsProps = {
  item : MenuItem,
  addItem: (item: MenuItem) => void
}

export default function MenuItems({item, addItem}: menuItemsProps) {
  return (
    <button className="border-yellow-200 border-2 hover:bg-yellow-200 p-3 rounded-md font-black w-full flex justify-between" 
    onClick={() => addItem(item)}>
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
)
}
