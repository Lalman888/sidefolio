import { StreamChat } from 'stream-chat';
import {NextRequest, NextResponse} from "next/server";



export async function POST(request: Request) {
  const serverClient = StreamChat.getInstance(
    'yj4dqj8bnbck',
   'rbgcfh5k3tq38v6pmjt4u7npchtvmg7rx7rwkfjnfgdag3whnrxm4k7w4jnv79zq'
  );
  const body = await request.json();
  console.log('[/api/token] Body:', body);

  const userId = body?.userId;

  if (!userId) {
    return Response.error();
  }

  const token = serverClient.createToken(userId);

  const response = {
    userId: userId,
    token: token,
  };

  return Response.json(response);
}


export async function GET (request: NextRequest, { params }: { params: { slug: string } }){
  const greeting = "Hello World!!"
  const json = {
      greeting
  };
  
  return NextResponse.json(json);
}