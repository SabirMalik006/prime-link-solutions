import React from 'react';

export default function PolicyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in duration-300">
      <div
        className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl transform transition-all animate-scale-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-slate-800 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white tracking-wide uppercase">
            Our Policies
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
          <section>
            <h3 className="text-primary-400 font-semibold text-lg mb-3 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-primary-500 rounded-full"></span>
              Terms & Conditions
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              Welcome to <span className="text-white font-medium">Prime Link Solutions</span>. By using our services, you agree to follow our terms and policies. Please make sure all information provided by you is correct. We reserve the right to update products, prices, and policies at any time without prior notice.
            </p>
          </section>

          <section>
            <h3 className="text-accent-400 font-semibold text-lg mb-3 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-accent-500 rounded-full"></span>
              Shipping Policy
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              We process and ship orders as quickly as possible. Delivery times may vary depending on your location and courier service. Customers will receive order updates after confirmation. If you face any issue with shipping, feel free to contact our support team.
            </p>
          </section>
        </div>

        <div className="p-6 border-t border-slate-800 bg-slate-950/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-black font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/35 text-sm uppercase tracking-wider"
          >
            Got it
          </button>
        </div>
      </div>

      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
}
