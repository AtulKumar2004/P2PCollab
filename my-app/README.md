
# P2PCollab - My App

## Project Overview
P2PCollab is a collaborative platform designed to facilitate communication and management between students, faculty, mentors, and recruiters. This project is built using Next.js and React, with a focus on modular components and a modern UI.

## Features
- Responsive Navbar with green-black gradient
- Multiple user portals: Admin/Faculty, Recruiter, Mentor, Student
- Chat system
- Mentor assignment and request system
- Dashboards for each user type
- Authentication (Login/Signup)

## Folder Structure
```
my-app/
├── app/
│   ├── AnimatedIntro.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── Navbar.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   └── ui/
│       └── button.tsx
├── lib/
│   └── utils.ts
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── components.json
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v18 or above recommended)
- npm or yarn

### Installation
1. Clone the repository:
	```bash
	git clone <repo-url>
	cd my-app
	```
2. Install dependencies:
	```bash
	npm install
	# or
	yarn install
	```
3. Run the development server:
	```bash
	npm run dev
	# or
	yarn dev
	```
4. Open [http://localhost:3000](http://localhost:3000) to view the app.

## Scripts
- `dev` - Start the development server
- `build` - Build for production
- `start` - Start the production server
- `lint` - Run ESLint

## Customization
- Edit `components/Navbar.tsx` to update navigation links or styles.
- Add new pages/components in the `app/` or `components/` folders.
- Update global styles in `app/globals.css`.

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License.

## Contact
For questions or support, please open an issue or contact the maintainer.
