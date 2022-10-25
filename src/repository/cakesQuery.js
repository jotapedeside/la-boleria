export const queryGetCakes = () => {
  return `SELECT * FROM "public.cakes"`;
};

export const queryPostCake = (cake) => {
  return `INSERT INTO "public.cakes" (name, price, image, description) VALUES ('${cake.name}', ${cake.price}, '${cake.image}', '${cake.description}')`;
};

export const queryGetCakeByName = (name) => {
  return `SELECT * FROM "public.cakes" WHERE name ILIKE '%${name}%'`;
};