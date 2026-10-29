import hero from '../assets/images/background/header_image.jpg'
import { properties } from '../data/properties';
import type { SearchFilters } from '../types';
import { CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";

interface HeroSectionProps {
    filters: SearchFilters;
    onFilterChange: (filters: SearchFilters) => void;
    onSearch: () => void;
}

function HeroSection({ filters, onFilterChange, onSearch }: HeroSectionProps) {
    return (
        <section className="relative aspect-360/112.5 bg-no-repeat mb-12 bg-cover bg-center " style={{ backgroundImage: `url(${hero})` }}>
            <div className='absolute inset-0 bg-black/30 '>
                <div className="container flex items-center justify-center h-full">
                    <div
                        dir="rtl"
                        className="w-223 h-30 bg-transparent backdrop-blur-2xl rounded-2xl p-6 flex items-end gap-4 shadow-[0_10px_15px_rgba(0,0,0,0.15)]"
                    >
                        <div className="w-60 h-18 shrink-0 flex flex-col gap-1.5 items-start">
                            <label
                                htmlFor="city"
                                className="h-5 text-sm font-semibold text-[#f8f8f8]"
                            >
                                مقصد
                            </label>

                            <div className="relative w-full h-12">
                                <select
                                    name="city"
                                    id="city"
                                    value={filters.city}
                                    onChange={(e) =>
                                        onFilterChange({ ...filters, city: e.target.value })
                                    }
                                    className="appearance-none w-full h-full bg-white border border-[#D1D5DB] rounded-lg px-4 text-sm text-[#1F2937] text-right outline-none cursor-pointer"
                                >
                                    <option value="">همه شهر ها</option>

                                    {[...new Set(properties.map((p) => p.city))].map((city) => (
                                        <option key={city} value={city}>
                                            {city}
                                        </option>
                                    ))}
                                </select>

                                <FaChevronDown
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] text-[#1F2937] pointer-events-none"
                                />
                            </div>
                        </div>

                        {/* نوع اقامتگاه */}
                        <div className="w-50 h-18 shrink-0 flex flex-col gap-1.5 items-start">
                            <label
                                htmlFor="type"
                                className="h-5 text-sm font-semibold text-[#f8f8f8]"
                            >
                                نوع اقامتگاه
                            </label>

                            <div className="relative w-full h-12">
                                <select
                                    name="type"
                                    id="type"
                                    value={filters.type}
                                    onChange={(e) =>
                                        onFilterChange({ ...filters, type: e.target.value })
                                    }
                                    className="appearance-none w-full h-full bg-white border border-[#D1D5DB] rounded-lg px-4 text-sm text-[#1F2937] text-right outline-none cursor-pointer"
                                >
                                    <option value="">همه موارد</option>

                                    {[...new Set(properties.map((p) => p.type))].map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>

                                <FaChevronDown
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] text-[#1F2937] pointer-events-none"
                                />
                            </div>
                        </div>

                        {/* بودجه هر شب */}
                        <div className="w-55 h-18 shrink-0 flex flex-col gap-1.5 items-start">
                            <label
                                htmlFor="price"
                                className="h-5 text-sm font-semibold text-[#f8f8f8]"
                            >
                                بودجه هر شب
                            </label>

                            <div className="relative w-full h-12">
                                <select
                                    name="price"
                                    id="price"
                                    value={filters.maxPrice ?? ""}
                                    onChange={(e) =>
                                        onFilterChange({
                                            ...filters,
                                            maxPrice: Number(e.target.value) || undefined,
                                        })
                                    }
                                    className="appearance-none w-full h-full bg-white border border-[#D1D5DB] rounded-lg px-4 text-sm text-[#1F2937] text-right outline-none cursor-pointer"
                                >
                                    <option value="">همه قیمت ها</option>
                                    <option value="2000000">تا ۲ میلیون تومان</option>
                                    <option value="5000000">تا ۵ میلیون تومان</option>
                                    <option value="10000000">تا ۱۰ میلیون تومان</option>
                                </select>

                                <FaChevronDown
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] text-[#1F2937] pointer-events-none"
                                />
                            </div>
                        </div>

                        {/* دکمه جستجو */}
                        <button
                            onClick={onSearch}
                            className="w-34 h-12 shrink-0 bg-[#EF4444] rounded-lg px-8 flex items-center justify-center gap-2 text-white text-base font-bold hover:bg-[#DC2626] transition-colors"
                        >
                            <span>جستجو</span>
                            <CiSearch className="text-xl" />
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default HeroSection;

