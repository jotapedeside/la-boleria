export const queryGetOrders = () => {
  return `SELECT to_json(cl) as client, to_json(ca) as cake, orders.id AS "orderId", "quantity", CAST("totalPrice" AS MONEY), "createdAt"::timestamp(0)::text FROM "public.orders" as orders JOIN "public.clients" as cl ON cl.id = orders."clientId" JOIN "public.cakes" as ca ON ca.id = orders."cakeId";`;
};

export const queryGetOrdersById = (id) => {
  return `SELECT to_json(cl) as client, to_json(ca) as cake, orders.id AS "orderId", "quantity", "totalPrice", "createdAt"::timestamp(0)::text FROM "public.orders" as orders JOIN "public.clients" as cl ON cl.id = orders."clientId" JOIN "public.cakes" as ca ON ca.id = orders."cakeId" WHERE orders.id = ${id};`;
};

export const queryPostOrder = (order) => {
  return `INSERT INTO "public.orders" ("clientId", "cakeId", "quantity", "totalPrice") VALUES (${order.clientId}, ${order.cakeId}, ${order.quantity}, ${order.totalPrice})`;
};

export const getClientById = (id) => {
  return `SELECT * FROM "public.clients" WHERE id=${id}`;
};

export const getCakeById = (id) => {
  return `SELECT * FROM "public.cakes" WHERE id=${id}`;
};