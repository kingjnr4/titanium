import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';
const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();
  const admindata = [
    {
      username: 'ayaadmin',
      password: '123456',
    },
  ];

  admindata.forEach(async (data) => {
    //console.log(data);
    try {
      const hashed = await hash(data.password, 10);
      await prisma.admin.upsert({
        where: { username: data.username },
        create: {
          username: data.username,
          password: hashed,
        },
        update: {},
      });
    } catch (e) {
      console.log(e);
    }
  });
}

main().then(() => {
  prisma.$disconnect();
});
