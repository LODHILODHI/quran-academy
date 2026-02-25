'use client';

export default function WhatsAppButton() {
  const phoneNumber = '923285285744';
  const message = encodeURIComponent('Hello! I want to learn Quran online. Please provide me with more information.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes whatsapp-pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
            }
            70% {
              box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
            }
          }
          @keyframes whatsapp-bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .whatsapp-button {
            animation: whatsapp-pulse 2s infinite, whatsapp-bounce 3s infinite;
          }
          .whatsapp-button:hover {
            animation: none;
          }
        `
      }} />
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        style={{
          position: 'fixed',
          bottom: '25px',
          right: '25px',
          width: '70px',
          height: '70px',
          backgroundColor: '#25D366',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 20px rgba(37, 211, 102, 0.5)',
          zIndex: 9999,
          transition: 'all 0.3s ease',
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.15)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.7)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.5)';
        }}
        aria-label="Contact us on WhatsApp"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 0C7.164 0 0 7.164 0 16c0 2.829.744 5.485 2.041 7.785L0 32l8.447-2.041C10.747 32.256 13.403 33 16 33c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.5c-2.344 0-4.55-.641-6.447-1.756L4.5 29.5l1.756-5.053C5.141 22.55 4.5 20.344 4.5 18c0-6.343 5.157-11.5 11.5-11.5S27.5 11.657 27.5 18 22.343 29.5 16 29.5z"
            fill="white"
          />
          <path
            d="M23.5 18.5c-.3-.15-1.75-.862-2.025-.958-.275-.096-.475-.144-.675.144-.2.288-.775.958-.95 1.15-.175.193-.35.217-.65.072-.3-.144-1.267-.467-2.412-1.488-.892-.795-1.496-1.78-1.671-2.08-.175-.3-.019-.463.131-.613.135-.135.3-.35.45-.525.15-.175.2-.3.3-.488.1-.188.05-.35-.025-.525-.075-.175-.675-1.625-.925-2.225-.24-.58-.483-.5-.675-.51-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.125 3.238 5.15 4.538.725.3 1.3.488 1.75.625.725.225 1.388.193 1.913.118.575-.088 1.75-.712 2-1.4.25-.688.25-1.275.175-1.4-.075-.125-.275-.2-.575-.35z"
            fill="white"
          />
        </svg>
      </a>
    </>
  );
}
