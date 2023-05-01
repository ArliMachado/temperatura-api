-- CreateTable
CREATE TABLE "temperatura" (
    "id" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "temperatura_pkey" PRIMARY KEY ("id")
);
