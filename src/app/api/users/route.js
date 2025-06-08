import { NextResponse } from "next/server";

console.log(process.env.TOKEN);
console.log(process.env.SECRET_KEY);

export async function GET() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users?token=" +
      process.env.NEXT_PUBLIC_TOKEN
  );
  console.log(
    "https://jsonplaceholder.typicode.com/users?token=" +
      process.env.NEXT_PUBLIC_TOKEN
  );
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(request) {
  const { nombre, apellido } = await request.json();
  console.log(nombre, apellido);
  return NextResponse.json({
    massage: "publicando",
  });
}

export function PUT() {
  return NextResponse.json({
    massage: "actualizando",
  });
}

export function DELETE() {
  return NextResponse.json({
    massage: "eliminando",
  });
}
