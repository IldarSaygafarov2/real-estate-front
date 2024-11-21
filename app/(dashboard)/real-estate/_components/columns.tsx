"use client";

import type { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "../../_components/ui/data-table-column-header";

import { CellActions } from "./cell-actions";

export type RealEstateColumn = {
  id: string;
  name: string;
  description: string | null;
  notes: string | null;
  price: string;
  ownerPhone: string | null;
  managerPhone: string | null;
  realtorPhone: string | null;
  balconyId: string;
  conditionId: string;
  districtId: string;
  floorId: string;
  roomId: string;
  stroreyId: string;
  typeId: string;
};

export const columns: ColumnDef<RealEstateColumn>[] = [
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Название" />
    ),
    accessorKey: "name",
    meta: {
      filterVariant: "text",
    },
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Описание" />
    ),
    accessorKey: "description",
    meta: {
      filterVariant: "text",
    },
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Заметки" />
    ),
    accessorKey: "notes",
    meta: {
      filterVariant: "text",
    },
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Цена" />
    ),
    accessorKey: "price",
    meta: {
      filterVariant: "text",
    },
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Номер владельца" />
    ),
    accessorKey: "ownerPhone",
    meta: {
      filterVariant: "text",
    },
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Номер руководителя" />
    ),
    accessorKey: "managerPhone",
    meta: {
      filterVariant: "text",
    },
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Номер риелтора" />
    ),
    accessorKey: "realtorPhone",
    meta: {
      filterVariant: "text",
    },
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Балкон" />
    ),
    accessorKey: "balconyId",
    meta: {
      filterVariant: "text",
    },
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Состояние" />
    ),
    accessorKey: "conditionId",
    meta: {
      filterVariant: "text",
    },
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Район" />
    ),
    accessorKey: "districtId",
    meta: {
      filterVariant: "text",
    },
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Этаж" />
    ),
    accessorKey: "floorId",
    meta: {
      filterVariant: "text",
    },
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Комната" />
    ),
    accessorKey: "roomId",
    meta: {
      filterVariant: "text",
    },
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Этажность" />
    ),
    accessorKey: "stroreyId",
    meta: {
      filterVariant: "text",
    },
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Тип" />
    ),
    accessorKey: "typeId",
    meta: {
      filterVariant: "text",
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <CellActions data={row.original} />,
  },
];
