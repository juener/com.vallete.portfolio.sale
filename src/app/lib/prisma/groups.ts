import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createGroup(group: any) {
  try {
    await prisma.group.create({
      data: group,
    });
  } catch (error) {
    return { error }
  }
}