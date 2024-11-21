export type Image = {
  id: number;
  url: string;
};

export type RealEstate = {
  id: number;
  name: string;
  description: string | null;
  notes: string | null;
  price: string;
  ownerPhone: string | null;
  managerPhone: string | null;
  realtorPhone: string | null;
  balconyId: number;
  conditionId: number;
  districtId: number;
  floorId: number;
  roomId: number;
  stroreyId: number;
  typeId: number;
  images: Image[];
};
