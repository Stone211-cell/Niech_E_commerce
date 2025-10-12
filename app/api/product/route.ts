import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


type RouteContext = {
  params: {
    id: string;
  };
};
export async function GET() {
  return Response.json(await prisma.product.findMany());
}

export async function POST(req: Request) {
  try {
    const { title, content } = await req.json();
    const newPost = await prisma.product.create({
      data: {
        title: title,
        content: content,
      },
    })
    return Response.json(newPost);
  } catch (error) {
      return console.log(error);
  }

}
