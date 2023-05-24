import Button from "./elements/Button"
import menu from "./_cardapio.js";

export default function ProductsComponent({ selectedGroup, setSelectedProducts, selectedProducts }: any) {
  const filteredProducts = selectedGroup
    ? menu.groups.find((group) => group.id === selectedGroup)?.products || []
    : [];

  const handleAddToCart = (product: any) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  return (
    <div className="grid grid-cols-4 gap-4 p-2 overflow-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
      {filteredProducts.map((product) => (
        <Button key={product.id} name={product.name} onClick={() => handleAddToCart(product)} />
      ))}
    </div>
  )
}