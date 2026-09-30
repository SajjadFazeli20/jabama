import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";
import type { Property, SearchFilters } from "../types";
import { useState } from "react";
import HeroSection from "./HeroSection";
import { useCallback } from "react";

function Home() {
    const [filters, setFilter] = useState<SearchFilters>({
        city: "",
        type: "",
        maxPrice: undefined,
    })

    const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);

    const handleSearch = useCallback(() => {
        const result = properties.filter((p) => {
            const cityMatch = !filters.city || p.city === filters.city;
            const typeMatch = !filters.type || p.type === filters.type;
            const priceMatch = !filters.maxPrice || p.price <= filters.maxPrice;
            return cityMatch && typeMatch && priceMatch;
        });
        setFilteredProperties(result);
    }, [filters]);

    return (
        <>
            <HeroSection filters={filters} onFilterChange={setFilter} onSearch={handleSearch}/>
            <main>
                <div className="container">
                    <section>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 lg:gap-6 mb-16">
                            {
                                filteredProperties.map((property) => {
                                    return <PropertyCard key={property.id} property={property} />
                                })
                            }
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default Home;