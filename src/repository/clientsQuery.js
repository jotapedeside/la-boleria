export const queryGetClients = () => {
  return `SELECT * FROM "public.clients"`;
};

export const queryPostClient = (client) => {
  return `INSERT INTO "public.clients" (name, address, phone) VALUES ('${client.name}', '${client.address}', '${client.phone}')`;
};

export const queryGetClientOrders = (id) => {
  //return `SELECT * FROM "public.orders" WHERE "clientId" = ${id}`;
  //return `SELECT id as "orderId", quantity, "createdAt", "totalPrice", "cakeId" FROM "public.orders" WHERE "clientId" = ${id}`;
  return `SELECT orders.id AS "orderId", "quantity", CAST("totalPrice" AS MONEY), "createdAt"::timestamp(0)::text, ca.name as cakeName FROM "public.orders" as orders JOIN "public.clients" as cl ON cl.id = orders."clientId" JOIN "public.cakes" as ca ON ca.id = orders."cakeId" WHERE cl.id = ${id};`;
};