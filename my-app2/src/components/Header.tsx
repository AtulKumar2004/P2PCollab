"use client"

import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      style={{
        background: "#0f172a",
        borderBottom: "1px solid #1e293b",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.75rem 2rem",
          width: "100%",
          minHeight: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
          className="desktop-nav-left"
        >
          <Link
            to="/about"
            style={{
              color: "#60a5fa",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "500",
              transition: "color 0.3s ease",
            }}
          >
            About
          </Link>
          <Link
            to="/contact"
            style={{
              color: "#60a5fa",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "500",
              transition: "color 0.3s ease",
            }}
          >
            Contact
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
          className="desktop-nav-right"
        >
          <Link
            to="/signin"
            style={{
              color: "#60a5fa",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "500",
              transition: "color 0.3s ease",
            }}
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            style={{
              color: "#60a5fa",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "500",
              transition: "color 0.3s ease",
              padding: "0.5rem 1rem",
              border: "1px solid #60a5fa",
              borderRadius: "0.375rem",
            }}
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#60a5fa",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
          className="mobile-menu-btn"
        >
          ☰
        </button>
      </nav>

      {isMenuOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "1rem 2rem",
            borderTop: "1px solid #1e293b",
          }}
          className="mobile-nav"
        >
          <Link to="/about" style={{ color: "#60a5fa", textDecoration: "none", padding: "0.5rem" }}>
            About
          </Link>
          <Link to="/contact" style={{ color: "#60a5fa", textDecoration: "none", padding: "0.5rem" }}>
            Contact
          </Link>
          <Link to="/signin" style={{ color: "#60a5fa", textDecoration: "none", padding: "0.5rem" }}>
            Sign In
          </Link>
          <Link to="/signup" style={{ color: "#60a5fa", textDecoration: "none", padding: "0.5rem" }}>
            Sign Up
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav-left, .desktop-nav-right {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        
        /* Hover effects */
        .desktop-nav-left a:hover, .desktop-nav-right a:hover {
          color: #93c5fd !important;
          transform: translateY(-1px);
        }
      `}</style>
    </header>
  )
}

export default Header
