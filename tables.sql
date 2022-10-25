CREATE TABLE "public.cakes" (
	"id" serial NOT NULL,
	"name" varchar(50) NOT NULL,
	"price" numeric NOT NULL,
	"image" varchar(255) NOT NULL,
	"description" TEXT NOT NULL,
	CONSTRAINT "cakes_pk" PRIMARY KEY ("id")
);


CREATE TABLE "public.clients" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"address" varchar(255) NOT NULL,
	"phone" varchar(13) NOT NULL,
	CONSTRAINT "clients_pk" PRIMARY KEY ("id")
);


CREATE TABLE "public.orders" (
	"id" serial NOT NULL,
	"clientId" integer NOT NULL,
	"cakeId" integer NOT NULL,
	"quantity" integer NOT NULL,
	"createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
	"totalPrice" numeric NOT NULL,
	CONSTRAINT "orders_pk" PRIMARY KEY ("id")
);


ALTER TABLE "public.orders" ADD CONSTRAINT "orders_fk0" FOREIGN KEY ("clientId") REFERENCES "public.clients"("id");
ALTER TABLE "public.orders" ADD CONSTRAINT "orders_fk1" FOREIGN KEY ("cakeId") REFERENCES "public.cakes"("id");