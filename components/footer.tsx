import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-xs text-slate-500">
          &copy; 2026 HB Digital. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-slate-400">
          <a href="#" className="hover:text-slate-600 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-slate-600 transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
