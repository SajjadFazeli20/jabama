import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPropertiesFromId } from '../services/propertyService';
import type { Property } from '../types';
import PropertyDetailsHeader from '../components/PropertyDetailsHeader';
import PropertyQuickInfo from '../components/PropertyQuickInfo';
import Header from '../layouts/Header';
function PropertyDetails() {
    const [property, setProperty] = useState<Property | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        async function fetchProperty() {
            setIsLoading(true);
            const data = await getPropertiesFromId(Number(id));
            setProperty(data ?? null);
            setIsLoading(false);
        }
        fetchProperty();
    }, [id]);
    return (
        <>
            <Header />
            <section>
                <div className="container">
                    {isLoading ? (
                        <p>در حال بارگذاری...</p>
                    ) : property ? (
                        <div>
                            <PropertyDetailsHeader property={property} />
                            <PropertyQuickInfo property={property} />
                        </div>
                    ) : (
                        <p>اقامتگاه یافت نشد</p>
                    )}
                </div>
            </section>
        </>
    );
}

export default PropertyDetails;