export default async function fetchServer(endpoint: string, body?: Object) {
  const res = await fetch(`http://localhost:3000/${endpoint}`, {
    method: body ? "POST" : "GET",
    ...(body && {
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    }),
  });

  return await res.json();
}
