export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ConsultingService",
        "name": "FT Synergist",
        "image": "https://www.ftsynergist.com/ft_synergist_logo_wo_background.png",
        "description": "Premium SME Management Consultant & EDG Grant Advisor in Singapore. We help businesses scale through strategic consulting and government grants.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "6 Eu Tong Sen St, #10-20 The Central",
            "addressLocality": "Singapore",
            "postalCode": "059817",
            "addressCountry": "SG"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 1.2895,
            "longitude": 103.8465
        },
        "url": "https://www.ftsynergist.com",
        "telephone": "+6562222222",
        "priceRange": "$$$",
        "areaServed": ["Singapore", "Indonesia", "Vietnam"],
        "founder": {
            "@type": "Person",
            "name": "Frederick Tan"
        },
        "sameAs": [
            "https://www.linkedin.com/company/ftsynergist"
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

        </>
    );
}
