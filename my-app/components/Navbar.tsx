"use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const navOptions = [
  { label: "Admin/Faculty Tools", href: "#" },
  { label: "Chat System", href: "#" },
  { label: "Recruiter Portal", href: "#" },
  { label: "Mentor Assignments", href: "#" },
  { label: "Request Mentorship", href: "#" },
  { label: "Mentor Dashboard", href: "#" },
  { label: "Recruiter Dashboard", href: "#" },
  { label: "Faculty Dashboard", href: "#" },
  { label: "Signup", href: "#" },
  { label: "Student Dashboard", href: "#" },
  { label: "Login / Signup", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Top bar for desktop */}
      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 pt-8 w-full flex justify-center">
        <div className="sm:hidden absolute left-4 top-8">
          <button
            aria-label="Open menu"
            className="text-blue-400 text-2xl p-2 rounded hover:bg-blue-900/30 transition"
            onClick={() => setOpen(true)}
          >
            <FaBars />
          </button>
        </div>
        <ul className="hidden sm:flex flex-row gap-8 bg-black/70 rounded-2xl px-10 py-4 shadow-2xl border border-blue-700 animate-fade-in animate-slide-in-down animate-duration-1000 animate-ease-in-out backdrop-blur-md max-w-fit items-center">
          {navOptions.map((opt, i) => (
            <li key={opt.label} className={`animate-fade-in animate-duration-700 animate-delay-[${i * 100}ms] animate-ease-in-out`}>
              <a
                href={opt.href}
                className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors duration-200 animate-pulse hover:animate-none"
              >
                {opt.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Sidebar for mobile */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex">
          <div className="w-64 bg-black border-r border-blue-700 h-full flex flex-col p-6 animate-slide-in-left">
            <button
              aria-label="Close menu"
              className="self-end mb-8 text-blue-400 text-2xl p-2 rounded hover:bg-blue-900/30 transition"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
            <ul className="flex flex-col gap-6">
              {navOptions.map((opt) => (
                <li key={opt.label}>
                  <a
                    href={opt.href}
                    className="text-blue-400 hover:text-blue-300 font-semibold text-base transition-colors duration-200"
                    onClick={() => setOpen(false)}
                  >
                    {opt.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1" onClick={() => setOpen(false)} />
        </div>
      )}
    </>
  );
}
