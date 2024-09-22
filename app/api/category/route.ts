export async function GET() {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  const payload = await response.json();

  return Response.json(payload);
}
