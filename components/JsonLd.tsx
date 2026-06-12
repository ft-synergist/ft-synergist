export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "FT Synergist",
        "image": "https://www.ftsynergist.com/ft_synergist_logo_wo_background.png",
        "description": "Premium SME Management Consultant & EDG Grant Advisor in Singapore. We help businesses scale through strategic consulting and government grants.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "7 Temasek Boulevard, #12-07 Suntec Tower One",
            "addressLocality": "Singapore",
            "postalCode": "038987",
            "addressCountry": "SG"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 1.2936,
            "longitude": 103.8584
        },
        "url": "https://www.ftsynergist.com",
        "telephone": "+6598628906",
        "priceRange": "$$$",
        "areaServed": ["Singapore", "Indonesia", "Vietnam"],
        "founder": {
            "@type": "Person",
            "name": "Frederick Tan"
        },
"sameAs": [
      "https://www.linkedin.com/company/ftsynergist",
      "https://www.linkedin.com/in/tanfrederick/",
      "https://www.facebook.com/ftsynergist"
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
