import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import PropertyCard from '../components/PropertyCard';
function Wishlist() {
    const wishlist = useSelector((state: RootState) => state.wishlist);
    return (
        <section>
            <div className="container">
                <div className='mb-8 pt-12'>
                    <h1 className='text-3xl font-black mb-2'>
                        علاقه‌مندی‌های من
                    </h1>
                    <p className='text-gray-500'>لیست اقامتگاه‌هایی که برای سفرهای بعدی خود ذخیره کرده‌اید</p>
                </div>
                {wishlist.length === 0 ? (
                    <p className="text-gray-500 text-center py-20">هنوز اقامتگاهی ذخیره نکردی</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {wishlist.map(wishCard => (
                            <PropertyCard key={wishCard.id} property={wishCard} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Wishlist;