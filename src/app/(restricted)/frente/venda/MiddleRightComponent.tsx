'use client'

import { useState } from "react";
import GroupsComponent from "./GroupsComponent";
import ProductsComponent from "./ProductsComponent";

export default function MiddleRightComponent() {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  return (
    <div className="flex flex-col md:w-3/4 w-1/2 bg-gradient-to-r from-purple-100 to-red-50 rounded-md m-2">
      <GroupsComponent setSelectedGroup={setSelectedGroup} />
      <ProductsComponent selectedGroup={selectedGroup} />
    </div>
  )
}