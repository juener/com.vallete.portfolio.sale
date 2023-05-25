import { ProductsContext } from '@/app/utils/ProductsContext';
import { useContext } from 'react';

import Button from "./elements/Button"
import menu from "./_cardapio.js";

export default function ProductsComponent({ selectedGroup }: any) {

  const { addProduct } = useContext(ProductsContext);

  const filteredProducts = selectedGroup
    ? menu.groups.find((group) => group.id === selectedGroup)?.products || []
    : [];

  return (
    <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-2 grid-cols-1  gap-4 p-2 overflow-auto" style={{ maxHeight: 'calc(100vh - 29vh)' }}>
      {filteredProducts.map((product) => (
        <Button key={product.id} name={product.name} onClick={() => { addProduct(product); }} product />
      ))}
    </div>
  )
}