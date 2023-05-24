'use client'

import { useState } from "react";
import GroupsComponent from "./GroupsComponent";
import ProductsComponent from "./ProductsComponent";
import Row from "./elements/Row";

interface ProductInterface {
  id: string;
  name: string;
}

export default function MiddleRightComponent() {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<ProductInterface[]>([]);

  return (
    <>
      <div className="flex flex-col m-2 md:w-1/4 w-1/2 bg-gradient-to-br from-indigo-50 to-fuchsia-100 rounded-md overflow-auto" style={{ maxHeight: 'calc(100vh - 145px)' }}>
        <Row selectedProducts={selectedProducts} odd >
        </Row >
      </div>

      <div className="flex flex-col md:w-3/4 w-1/2 bg-gradient-to-r from-purple-100 to-red-50 rounded-md m-2">
        <GroupsComponent setSelectedGroup={setSelectedGroup} />
        <ProductsComponent selectedGroup={selectedGroup} setSelectedProducts={setSelectedProducts} selectedProducts={selectedProducts} />
      </div>
    </>
  )
}