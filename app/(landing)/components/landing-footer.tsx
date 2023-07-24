import { Facebook, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

const LandingFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-10  text-slate-300 rounded">
      <div className="grid grid-flow-col gap-4">
        <Link href={"/about"} className="link link-hover">
          About us
        </Link>
        <Link href={"/contact"} className="link link-hover">
          Contact
        </Link>
        <Link href={"/pricing"} className="link link-hover">
          Pricing
        </Link>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a className="hover:-translate-y-1 transition hover:text-white cursor-pointer">
            <Twitter />
          </a>
          <a className="hover:-translate-y-1 transition hover:text-white cursor-pointer">
            <Youtube />
          </a>
          <a className="hover:-translate-y-1 transition hover:text-white cursor-pointer">
            <Facebook />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © {currentYear} - All right reserved by Genius</p>
      </div>
    </footer>
  );
};

export default LandingFooter;
