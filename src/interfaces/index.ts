import { StaticImageData } from "next/image";

export interface BookDashboardCards {
    image: StaticImageData;
    heading: string;
    results: string;
}