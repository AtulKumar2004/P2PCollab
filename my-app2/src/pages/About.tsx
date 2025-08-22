import type React from "react"

const About: React.FC = () => {
  return (
    <div style={{ padding: "4rem 0", minHeight: "80vh" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            About Our Platform
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              opacity: 0.8,
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Empowering the next generation through collaborative learning and mentorship
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            marginBottom: "4rem",
          }}
        >
          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              padding: "2rem",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "#8b5cf6",
              }}
            >
              Our Mission
            </h3>
            <p style={{ opacity: 0.8, lineHeight: "1.6" }}>
              To create a collaborative ecosystem where students, faculty, alumni, and industry professionals come
              together to share knowledge, work on meaningful projects, and build lasting connections.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              padding: "2rem",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "#8b5cf6",
              }}
            >
              Our Vision
            </h3>
            <p style={{ opacity: 0.8, lineHeight: "1.6" }}>
              To bridge the gap between academic learning and industry requirements through hands-on project
              collaboration and personalized mentorship programs.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              padding: "2rem",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "#8b5cf6",
              }}
            >
              Our Values
            </h3>
            <p style={{ opacity: 0.8, lineHeight: "1.6" }}>
              We believe in collaborative learning, inclusive growth, practical skill development, and creating
              opportunities for everyone to succeed in their chosen field.
            </p>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "2rem",
            }}
          >
            Ready to Get Started?
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              opacity: 0.8,
              marginBottom: "2rem",
            }}
          >
            Join our community and start your journey of collaborative learning today.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <a href="/signup" className="btn btn-primary">
              Join Now
            </a>
            <a href="#" className="btn btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
