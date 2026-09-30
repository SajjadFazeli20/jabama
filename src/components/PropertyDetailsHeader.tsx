import { FiMapPin } from "react-icons/fi";
import { formatPrice } from "../utils";
import type { Property } from "../types";

interface PropertyDetailsHeaderProps {
    property: Property;
}

function PropertyDetailsHeader({ property }: PropertyDetailsHeaderProps) {
    return (
        <>
            <div className="flex items-center justify-between w-full mt-10 overflow-hidden">
                <div className="flex flex-col gap-2 text-right">
                    <h1 className="font-black text-[28px] text-gray-800">
                        {property.title}
                    </h1>
                    <div className="flex items-center gap-1.5">
                        <FiMapPin className="text-gray-500 size-4" />
                        <span className="text-gray-500 text-[15px]">
                            {property.address}
                        </span>
                    </div>
                </div>

                <div className="flex flex-col gap-2.5">
                    <div className="flex items-baseline gap-1.5">
                        <span className="text-red-500 font-black text-[28px]">
                            {formatPrice(property.price)}
                        </span>
                        <span className="text-red-500 font-medium text-base">تومان</span>
                        <span className="text-gray-500 text-sm">/ هر شب</span>
                    </div>
                    <div className="flex gap-2 items-center justify-between">
                        <span className="bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                            {property.province}، {property.city}
                        </span>
                        <span className="bg-gray-700 text-white text-sm font-bold px-4 py-2 rounded-full">
                            {property.type}
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex gap-3 h-100 overflow-hidden w-full mt-8">
                
                <div className="grid grid-cols-2 gap-3 flex-1 h-full">
                    {property.images.slice(1, 5).map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`${property.title} ${index + 2}`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    ))}
                </div>

                <div className="w-194 h-full shrink-0 rounded-2xl overflow-hidden   ">
                    <img
                        src={property.images[0]}
                        alt={property.title}
                        className="w-full h-full object-cover"
                    />
                </div>

            </div>
        </>
    );
}

export default PropertyDetailsHeader;