export default function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://quran-academy-two.vercel.app';
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Quran Academy",
    "alternateName": "Online Quran Academy",
    "description": "Best Online Quran Academy offering Quran classes for kids and adults worldwide. Learn Quran Reading, Tajweed, Hifz, Translation & Tafseer, and Islamic Studies with certified teachers.",
    "url": baseUrl,
    "logo": `${baseUrl}/assets/img/logo/logo.png`,
    "image": `${baseUrl}/assets/img/logo/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Arabic", "Urdu"]
    },
    "areaServed": ["US", "GB", "CA", "AU", "SA", "Worldwide"],
    "educationalCredentialAwarded": "Quran Certification",
    "sameAs": [
      // Add social media links when available
    ]
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Online Quran Learning Courses",
    "description": "Comprehensive Quran learning courses including Quran Reading, Tajweed, Hifz (Memorization), Translation & Tafseer, and Islamic Studies for kids and adults.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Quran Academy",
      "url": baseUrl
    },
    "courseMode": "online",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
      "audienceType": "Kids and Adults"
    },
    "availableLanguage": ["English", "Arabic", "Urdu"],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Quran Academy",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
