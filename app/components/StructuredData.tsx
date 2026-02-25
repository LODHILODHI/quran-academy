export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Quran Academy",
    "description": "Best Online Quran Academy offering Quran classes for kids and adults worldwide. Learn Quran Reading, Tajweed, Hifz, Translation & Tafseer, and Islamic Studies with certified teachers.",
    "url": "https://quranacademy.com",
    "logo": "https://quranacademy.com/assets/img/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Arabic", "Urdu"]
    },
    "areaServed": ["US", "GB", "CA", "AU", "SA", "Worldwide"],
    "educationalCredentialAwarded": "Quran Certification"
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Online Quran Learning Courses",
    "description": "Comprehensive Quran learning courses including Quran Reading, Tajweed, Hifz (Memorization), Translation & Tafseer, and Islamic Studies for kids and adults.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Quran Academy"
    },
    "courseMode": "online",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
      "audienceType": "Kids and Adults"
    },
    "availableLanguage": ["English", "Arabic", "Urdu"]
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
    </>
  );
}
