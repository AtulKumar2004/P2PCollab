import type React from "react"
import Body from "../components/Body"

const Home: React.FC = () => {
  return (
    <main>
      <Body />
      <footer className="bg-gray-900 py-4 text-center">
        <p className="text-gray-400 text-sm">© 2025 P2P Collab. All rights reserved.</p>
      </footer>
    </main>
  )
}

export default Home
