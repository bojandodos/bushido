import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.aboutPage.create({
    data: {
      title: "About Us",
      content: "Welcome to Bushido Bites! We are passionate about ...",
    },
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
