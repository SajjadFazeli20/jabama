import React from 'react';
import type { Property } from '../types';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils';
import { FaHeart, FaRegHeart, FaRegStar } from "react-icons/fa";
import { LuBed, LuBath } from "react-icons/lu";
import { TbRulerMeasure } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { addToWishlist, removeFromWishlist } from "../store/wishlistSlice";



interface PropertyCardProps {
    property: Property;

}


function PropertyCard({ property }: PropertyCardProps) {
    const wishlist = useSelector((state: RootState) => state.wishlist);
    const dispatch = useDispatch();
    const isWishlisted = wishlist.some((item) => item.id === property.id);
    function handleWishlist(e: React.MouseEvent) {
        e.preventDefault();
        if (isWishlisted) {
            dispatch(removeFromWishlist(property.id));
        } else {
            dispatch(addToWishlist(property));
        }
    }

    return (
        <Link to={`/property/${property.id}`}>
            <div className='w-102.5 shadow-normal rounded-xl overflow-hidden relative'>
                <div className=''>
                    <img src={property.imageUrl} alt={property.type} />
                    <div className='size-9 rounded-full absolute top-4 right-4 bg-white flex items-center justify-center' onClick={(e) => handleWishlist(e)}>
                        {
                            isWishlisted ? <FaHeart className='size-4.5 text-red-500 ' /> : <FaRegHeart className='size-4.5 text-gray-400' />
                        }
                    </div>
                </div>
                <div className='p-5'>
                    <div className='flex items-center justify-between mb-3.5'>
                        {/* badges */}
                        <div className='flex items-center gap-x-2'>
                            <span className='bg-red-500 rounded-full font-semibold text-white text-xs px-2.5 py-1'>{property.city}</span>
                            <span className='bg-gray-700 rounded-full font-semibold text-white text-xs px-2.5 py-1'>{property.type}</span>
                        </div>
                        {/* rate */}
                        <div className='flex items-center gap-x-1'>
                            <span className='font-bold text-xs text-gray-800'>{property.rating}</span>
                            <FaRegStar className='text-yellow-500 size-5' />
                        </div>
                    </div>
                    <h3 className='text-gray-800 font-bold mb-3.5'>{property.title}</h3>
                    <div className='text-gray-500 flex items-center gap-x-4 mb-3.5'>
                        <div className='flex items-center gap-x-1.5 text-xs'>
                            <span>{property.bedrooms} اتاق</span>
                            <LuBed className='size-3.5 text-gray-500' />
                        </div>
                        <div className='flex items-center gap-x-1.5 text-xs'>
                            <span>{property.bathrooms} سرویس</span>
                            <LuBath className='size-3.5 text-gray-500' />
                        </div>
                        <div className='flex items-center gap-x-1.5 text-xs'>
                            <span>{property.area} متر</span>
                            <TbRulerMeasure className='size-3.5 text-gray-500' />
                        </div>
                    </div>
                    <div className='w-full h-px bg-gray-300 mb-3.5'></div>
                    {/* property card footer */}
                    <div className='flex items-center justify-between'>
                        <span className='text-gray-500'>شروع قیمت از</span>
                        <div className='flex items-center'>
                            <div>
                                <span className='text-red-500 text-lg font-extrabold'>{formatPrice(property.price)}</span>
                                <span className='text-red-500 text-sm'> تومان </span>
                            </div>
                            <span className='text-gray-500 text-xs'>/ هر شب </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default React.memo(PropertyCard);