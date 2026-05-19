// src/components/WhatsAppButton.jsx (without react-icons)
import React from 'react';

export default function WhatsAppButton() {
  const phoneNumber = '923215366666'; // 0321-5366666 → 923215366666
  const message = encodeURIComponent('Hello! I would like to get more information about your services.');

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulsing effect */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></div>
        
        {/* Button */}
        <div className="relative bg-[#25D366] hover:bg-[#20bd5a] w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="white"
          >
            <path d="M12.032 2.003c-5.514 0-9.986 4.467-9.986 9.976 0 1.78.474 3.505 1.371 5.024L2.25 22.002l5.184-1.315c1.44.78 3.076 1.192 4.739 1.192h.003c5.514 0 9.987-4.468 9.987-9.977 0-2.664-1.038-5.17-2.923-7.054-1.886-1.886-4.39-2.924-7.055-2.924h-.003zm0 18.399c-1.492 0-2.958-.398-4.235-1.146l-.305-.176-3.076.782.803-2.968-.192-.311c-.859-1.373-1.312-2.966-1.312-4.614 0-4.636 3.774-8.408 8.413-8.408 2.247 0 4.358.877 5.945 2.464 1.588 1.588 2.464 3.699 2.464 5.945 0 4.639-3.773 8.412-8.41 8.412z"/>
            <path d="M17.757 14.591c-.234-.117-1.383-.682-1.597-.761-.214-.079-.37-.117-.525.117-.155.234-.602.761-.739.917-.136.156-.273.176-.507.059-.234-.117-.987-.364-1.88-1.16-.695-.618-1.164-1.382-1.301-1.616-.136-.234-.015-.361.103-.477.105-.105.234-.273.351-.41.117-.136.156-.234.234-.39.078-.156.039-.293-.02-.41-.059-.117-.525-1.267-.72-1.735-.19-.455-.383-.394-.525-.401-.137-.006-.293-.006-.45-.006-.156 0-.41.058-.625.293-.214.234-.819.8-.819 1.95 0 1.151.839 2.264.957 2.421.117.156 1.652 2.523 4.001 3.537.559.241.995.385 1.335.492.561.179 1.071.154 1.475.093.45-.068 1.383-.565 1.578-1.111.195-.546.195-1.014.137-1.111-.059-.098-.215-.156-.449-.273z"/>
          </svg>
        </div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with us on WhatsApp
      </div>
    </button>
  );
}