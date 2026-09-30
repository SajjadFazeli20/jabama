// src/components/PropertyQuickInfo.tsx
import { LuBed, LuBath } from "react-icons/lu";
import { TbRulerMeasure } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import type { Property } from "../types";

interface PropertyQuickInfoProps {
    property: Property;
}

function PropertyQuickInfo({ property }: PropertyQuickInfoProps) {
    return (
        <div className="flex flex-col gap-8 mt-8">

            {/* Quick Stats Card */}
            <div className="bg-white rounded-2xl shadow-normal p-6 flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-700">
                    <FiUsers className="size-5" />
                    <span className="font-semibold text-sm">{property.maxGuests} مهمان</span>
                </div>

                <div className="w-px h-8 bg-gray-200" />

                <div className="flex items-center gap-2 text-gray-700">
                    <LuBed className="size-5" />
                    <span className="font-semibold text-sm">{property.bedrooms} اتاق خواب</span>
                </div>

                <div className="w-px h-8 bg-gray-200" />

                <div className="flex items-center gap-2 text-gray-700">
                    <LuBath className="size-5" />
                    <span className="font-semibold text-sm">{property.bathrooms} سرویس بهداشتی</span>
                </div>

                <div className="w-px h-8 bg-gray-200" />

                <div className="flex items-center gap-2 text-gray-700">
                    <TbRulerMeasure className="size-5" />
                    <span className="font-semibold text-sm">{property.area} متر مربع</span>
                </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-3 text-right">
                <h2 className="font-extrabold text-xl text-gray-800">درباره این اقامتگاه</h2>
                <div className="w-full h-px bg-gray-300" />
                <p className="text-gray-600 text-[15px] leading-8">
                    {property.description}
                </p>
            </div>

        </div>
    );
}

export default PropertyQuickInfo;