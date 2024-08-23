

-- CreateTable
CREATE TABLE "new_cities" (
    "id" SERIAL NOT NULL,
    "zip" VARCHAR(10) NOT NULL,
    "lat" DECIMAL(10,7),
    "lng" DECIMAL(10,7),
    "city" VARCHAR(100) NOT NULL,
    "state_id" CHAR(2) NOT NULL,
    "state_name" VARCHAR(100) NOT NULL,
    "geog_point" TEXT,

    CONSTRAINT "new_cities_pkey" PRIMARY KEY ("id")
);

