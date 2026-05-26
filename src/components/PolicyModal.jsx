import React from 'react';

export default function PolicyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="bg-[#0a1c30] border border-white/10 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl transform transition-all animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/5 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white tracking-wide uppercase">
            Our Policies
          </h2>
          <button 
            onClick={onClose}
            className="text-white/40 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
          {/* Terms & Conditions */}
          <section>
            <h3 className="text-[#c9a84c] font-semibold text-lg mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#c9a84c] rounded-full"></span>
              Terms & Conditions
            </h3>
            <p className="text-white/70 leading-relaxed text-sm sm:text-base">
              Welcome to <span className="text-white font-medium">Vector Integrated Solutions</span>. By using our services, you agree to follow our terms and policies. Please make sure all information provided by you is correct. We reserve the right to update products, prices, and policies at any time without prior notice.
            </p>
          </section>

          {/* Shipping Policy */}
          <section>
            <h3 className="text-[#c9a84c] font-semibold text-lg mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#c9a84c] rounded-full"></span>
              Shipping Policy
            </h3>
            <p className="text-white/70 leading-relaxed text-sm sm:text-base">
              We process and ship orders as quickly as possible. Delivery times may vary depending on your location and courier service. Customers will receive order updates after confirmation. If you face any issue with shipping, feel free to contact our support team.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/5 bg-white/[0.02] flex justify-end">
          <button 
            onClick={onClose}
            className="bg-[#c9a84c] hover:bg-[#b39540] text-black font-bold py-2.5 px-8 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] text-sm uppercase tracking-wider"
          >
            Got it
          </button>
        </div>
      </div>
      
      {/* Background click to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
}
