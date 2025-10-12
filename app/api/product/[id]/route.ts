import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


type RouteContext = {
  params: {
    id: string;
  };
};

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  return Response.json(
    await prisma.product.findUnique({
      where: { id: Number(params.id) },
    })
  );
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { title, content } = await req.json();
    const newPost = await prisma.product.update({
      where: { id: Number(params.id) },
      data: {
        title: title,
        content: content,
      },
    });
    return Response.json(newPost);
  } catch (error) {
    return console.log(error);
  }
}


export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { title, content } = await req.json();
    const newPost = await prisma.product.delete({
      where: { id: Number(params.id) },

    });
    return Response.json(newPost);
  } catch (error) {
    return console.log(error);
  }
}
