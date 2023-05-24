'use client'

import { useEffect, useState } from "react"
import Button from "./elements/Button"
import menu from "./_cardapio";

interface Group {
  id: string,
  name: string
}

export default function GroupsComponent({ setSelectedGroup }: any) {
  const [groups, setGroups] = useState<Group[]>([]);
  useEffect(() => {
    const allGroups = menu.groups.map<Group>(group => ({
      id: group.id,
      name: group.name
    }));
    setGroups(allGroups);
  }, []);

  const handleGroupClick = (groupId: any) => {
    setSelectedGroup(groupId);
  };

  return (
    <>
      <div className="grid grid-flow-col gap-4 p-2 bg-gradient-to-r from-red-100 to-cyan-50 rounded-md overflow-auto">
        {groups.map(group => (
          <><Button key={group.id} name={group.name} onClick={() => handleGroupClick(group.id)} group /></>
        ))}
      </div>
    </>
  )
}