"use client";

import Image from "next/image";
import {
  LinkedinLogo,
  XLogo,
  InstagramLogo,
  GithubLogo,
} from "@phosphor-icons/react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#showcase" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: LinkedinLogo, href: "#", label: "LinkedIn" },
  { icon: XLogo, href: "#", label: "X" },
  { icon: InstagramLogo, href: "#", label: "Instagram" },
  { icon: GithubLogo, href: "#", label: "GitHub" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.getElementById(href.slice(1));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.06] bg-navy-900">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="relative w-36 h-9">
              <Image
                src="/images/triseno-logo.png"
                alt="Triseno Systems"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-text-tertiary font-mono tracking-wider">
              AI Infrastructure. Engineered Leverage.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4 tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-sm text-text-secondary hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4 tracking-wider uppercase">
              Get in Touch
            </h4>
            <a
              href="mailto:Tristen@trisenosystems.com"
              className="text-sm text-text-secondary hover:text-cyan-400 transition-colors duration-300"
            >
              Tristen@trisenosystems.com
            </a>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-text-tertiary hover:text-cyan-400 transition-colors duration-300"
                >
                  <social.icon size={20} weight="regular" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-tertiary">
            &copy; 2026 Triseno Systems. All rights reserved.
          </p>
          <p className="text-xs text-text-tertiary font-mono">
            AI Infrastructure. Engineered Leverage.
          </p>
        </div>
      </div>
    </footer>
  );
}
