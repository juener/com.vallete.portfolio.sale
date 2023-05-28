import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface GroupInterface {
  name: string
  priority?: number
}

export async function createGroup(group: GroupInterface) {
  if (!group.name)
    throw new Error('Group name is required.');

  await prisma.group.create({
    data: {
      name: group.name,
      priority: group.priority ?? null
    }
  });
}