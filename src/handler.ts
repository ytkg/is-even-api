export async function handleRequest(request: Request): Promise<Response> {
  const { pathname } = new URL(request.url)
  const value = Number(pathname.split("/")[1])
  const data = { iseven: value % 2 == 0 }

  return new Response(JSON.stringify(data, null, 2), {
    headers: { "content-type": "application/json;charset=UTF-8" },
  })
}
