import type { Property } from "../types";
import { properties } from "../data/properties";

export async function getPropertiesFromId(id : number): Promise<Property | undefined> {

    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve(properties.find((p) => p.id === id));
        }, 1000);
    });
}