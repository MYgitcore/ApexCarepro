import { motion } from 'motion/react';

export default function FloatingCallButton() {
  return (
    <motion.a
      href="https://wa.me/16089250728?text=Hello%2C%20I%27m%20interested%20in%20your%20duct%20cleaning%20services"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-[20px] right-[20px] z-[60] w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-colors hover:bg-blue-700"
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp SVG icon (white) */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        width="32" 
        height="32" 
        fill="currentColor"
      >
        <path d="M12.031 2.008c-5.53 0-10 4.47-10 10 0 1.78.47 3.52 1.36 5.02l-1.36 4.97 5.12-1.35c1.45.84 3.12 1.29 4.88 1.29 5.53 0 10-4.47 10-10s-4.47-10-10-10zm0 18c-1.47 0-2.91-.38-4.17-1.1l-.3-.18-3.02.8.8-2.97-.2-.31a8.07 8.07 0 0 1-1.11-4.16c0-4.42 3.6-8 8-8s8 3.58 8 8-3.6 8-8 8z"/>
        <path d="M11.5 7.5v4.5l3 2" stroke="white" strokeWidth="1.5" fill="none"/>
      </svg>
      <span className="absolute right-full mr-4 bg-slate-900 text-white px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}
