"use client";

import { useEffect } from "react";

import Link from "next/link";

import { useSession } from "next-auth/react";

import { Container } from "@/components/custom/container";

import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { useRealEstate } from "./_hooks/use-real-estate";

import { DataTable } from "../_components/ui/data-table";

import type { RealEstateColumn } from "./_components/columns";

import { columns } from "./_components/columns";

export default function RealEstatePage() {
  const { data: session } = useSession();

  const { realEstate, fetchRealEstate } = useRealEstate();

  useEffect(() => {
    fetchRealEstate();
  }, [fetchRealEstate]);

  const formattedRealEstate: RealEstateColumn[] =
    realEstate?.map((estate) => ({
      ...estate,
      id: estate.id.toString(),
      balconyId: estate.balcony.name,
      conditionId: estate.condition.name,
      districtId: estate.district.name,
      floorId: estate.floor.name,
      roomId: estate.room.name,
      stroreyId: estate.strorey.name,
      typeId: estate.type.name,
    })) ?? [];

  return (
    <section className="py-12">
      <Container>
        <div className="space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2 text-center md:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                Недвижимость ({realEstate?.length})
              </h1>
              <p className="text-xl text-muted-foreground">
                Тут вы можете управлять недвижимостью.
              </p>
            </div>
            {session?.user?.role === "ceo" && (
              <Link
                href="/real-estate/create"
                className={buttonVariants({ variant: "default" })}
              >
                Создать
              </Link>
            )}
          </div>
          <Separator />
          <DataTable data={formattedRealEstate} columns={columns} />
        </div>
      </Container>
    </section>
  );
}
