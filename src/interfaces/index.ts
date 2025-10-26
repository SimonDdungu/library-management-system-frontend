import { StaticImageData } from "next/image";


export interface refetchData {
  triggerRefetch: () => void
}

export interface BookDashboardCards {
    image: StaticImageData;
    heading: string;
    results: string;
}

export interface BookAttributes {
  id?: string;
  title: string;
  author: string;
  published_year: number | string;
  isbn?: string;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
}

export const BookinitialValues = {
  title: "The Matrix",
  author: "Neil",
  published_year: "2025",
  isbn: "ISBN783438",
} as BookAttributes