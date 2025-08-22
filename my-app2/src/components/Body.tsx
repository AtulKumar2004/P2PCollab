"use client"

import type React from "react"
import { Link } from "react-router-dom"

const Body: React.FC = () => {
  return (
    <section
      style={{
        padding: "8rem 2rem",
        textAlign: "center",
        background: "#000000",
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.1) 0%, rgba(0, 0, 0, 1) 70%)",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "200px",
          height: "200px",
          background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), transparent)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "5%",
          width: "150px",
          height: "150px",
          background: "linear-gradient(45deg, rgba(147, 197, 253, 0.08), transparent)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", width: "100%" }}>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: "bold",
            marginBottom: "2rem",
            lineHeight: "1.2",
            color: "#60a5fa",
            letterSpacing: "-0.02em",
          }}
        >
          Peer-to-Peer Project Collaboration &{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #3b82f6, #60a5fa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Mentorship Network
          </span>
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            marginBottom: "3rem",
            maxWidth: "700px",
            margin: "0 auto 3rem",
            opacity: 0.9,
            lineHeight: "1.6",
            color: "#cbd5e1",
          }}
        >
          Connect students, faculty, alumni, and recruiters for collaboration, mentorship, and project-based learning.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "3rem",
          }}
        >
          <Link
            to="#"
            className="btn btn-primary"
            style={{
              padding: "1rem 2rem",
              fontSize: "1rem",
              minWidth: "180px",
              background: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "8px",
              textDecoration: "none",
              display: "inline-block",
              transform: "translateY(0)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)"
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(59, 130, 246, 0.3)"
              e.currentTarget.style.background = "#2563eb"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "none"
              e.currentTarget.style.background = "#3b82f6"
            }}
          >
            Explore Projects
          </Link>
          <Link
            to="#"
            className="btn btn-secondary"
            style={{
              padding: "1rem 2rem",
              fontSize: "1rem",
              minWidth: "180px",
              background: "transparent",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
              display: "inline-block",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)"
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)"
              e.currentTarget.style.transform = "translateY(-2px)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent"
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)"
              e.currentTarget.style.transform = "translateY(0)"
            }}
          >
            Get Mentorship
          </Link>
          <Link
            to="#"
            className="btn btn-primary"
            style={{
              padding: "1rem 2rem",
              fontSize: "1rem",
              minWidth: "180px",
              background: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "8px",
              textDecoration: "none",
              display: "inline-block",
              transform: "translateY(0)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)"
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(59, 130, 246, 0.3)"
              e.currentTarget.style.background = "#2563eb"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "none"
              e.currentTarget.style.background = "#3b82f6"
            }}
          >
            Recruit Talent
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Body
