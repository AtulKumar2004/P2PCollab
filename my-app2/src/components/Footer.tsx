import type React from "react"
import { Link } from "react-router-dom"

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        background: "rgba(30, 58, 138, 0.8)",
        padding: "3rem 0 1rem",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                background: "linear-gradient(135deg, #8b5cf6, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              P2P Network
            </h3>
            <p style={{ opacity: 0.8, lineHeight: "1.6" }}>
              Connecting learners, mentors, and industry professionals for collaborative growth and success.
            </p>
          </div>

          <div>
            <h4 style={{ fontWeight: "bold", marginBottom: "1rem" }}>Platform</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <Link to="#" style={{ color: "white", textDecoration: "none", opacity: 0.8 }}>
                Projects
              </Link>
              <Link to="#" style={{ color: "white", textDecoration: "none", opacity: 0.8 }}>
                Mentorship
              </Link>
              <Link to="#" style={{ color: "white", textDecoration: "none", opacity: 0.8 }}>
                Courses
              </Link>
              <Link to="#" style={{ color: "white", textDecoration: "none", opacity: 0.8 }}>
                Community
              </Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontWeight: "bold", marginBottom: "1rem" }}>Support</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <Link to="#" style={{ color: "white", textDecoration: "none", opacity: 0.8 }}>
                Help Center
              </Link>
              <Link to="#" style={{ color: "white", textDecoration: "none", opacity: 0.8 }}>
                Contact Us
              </Link>
              <Link to="#" style={{ color: "white", textDecoration: "none", opacity: 0.8 }}>
                Privacy Policy
              </Link>
              <Link to="#" style={{ color: "white", textDecoration: "none", opacity: 0.8 }}>
                Terms of Service
              </Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontWeight: "bold", marginBottom: "1rem" }}>Connect</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <Link to="#" style={{ color: "white", textDecoration: "none", opacity: 0.8 }}>
                LinkedIn
              </Link>
              <Link to="#" style={{ color: "white", textDecoration: "none", opacity: 0.8 }}>
                Twitter
              </Link>
              <Link to="#" style={{ color: "white", textDecoration: "none", opacity: 0.8 }}>
                GitHub
              </Link>
              <Link to="#" style={{ color: "white", textDecoration: "none", opacity: 0.8 }}>
                Discord
              </Link>
            </div>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            opacity: 0.6,
          }}
        >
          <p>© 2025 P2P Mentorship Network. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
