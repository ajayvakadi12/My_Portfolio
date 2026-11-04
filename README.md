# Ajay Vakadi - Personal Developer Portfolio

Production-ready full-stack portfolio application for Ajay Vakadi, Full Stack Developer. The system comprises a React-based single-page frontend bundled with Vite and Tailwind CSS, and a Node.js/Express backend service handling email delivery via Nodemailer and secure proxying to the GitHub GraphQL API.

## Architecture and Stack

### Client
- Framework: React 18
- Build Tool: Vite 5
- Styling: Tailwind CSS 3 (Dark theme default)
- Icons: Lucide React
- Routing: Single-page layout with IntersectionObserver scroll spying

### Server
- Runtime: Node.js (ES Modules)
- Framework: Express 4
- Mail Transport: Nodemailer (SMTP / Gmail App Password)
- Rate Limiting: express-rate-limit
- Security: CORS origin filtering, payload size constraints, input sanitization

### Integrations
- GitHub REST API v3: Public repository stats, languages, follower counts
- GitHub GraphQL API v4: Authenticated user contribution calendar data
- WhatsApp Direct URI: Direct messaging link

## Repository Structure

```
portfolio/
├── backend/
│   ├── controllers/
│   │   └── contactController.js     # Request validation, sanitization, mail dispatch
│   ├── middleware/
│   │   └── rateLimiter.js           # IP rate limiting configurations
│   ├── routes/
│   │   └── contactRoutes.js         # Endpoint definitions
│   ├── utils/
│   │   └── emailTransporter.js      # Nodemailer client factory
│   ├── .env.example                 # Backend environment variable template
│   ├── package.json                 # Backend dependencies
│   └── server.js                    # Express app initialization, CORS, middleware
├── public/
│   ├── favicon.svg                  # Monogram vector favicon
│   ├── images/
│   │   ├── profile/                 # Profile photographs (PNG and WebP)
│   │   └── projects/                # Project screenshots (PNG and WebP)
│   └── resume/
│       └── ajay-vakadi-resume.pdf   # Verified resume PDF
├── src/
│   ├── components/
│   │   ├── About.jsx                # Background narrative and quick facts card
│   │   ├── BackToTop.jsx            # Scroll-triggered viewport reset button
│   │   ├── Connect.jsx              # External network profiles
│   │   ├── Contact.jsx              # Message submission form with client validation
│   │   ├── Footer.jsx               # Navigation, socials, and dynamic copyright
│   │   ├── GitHubActivity.jsx       # Contribution heatmap and language distributions
│   │   ├── Hero.jsx                 # Dynamic typing headline and primary actions
│   │   ├── Journey.jsx              # Chronological education and training timeline
│   │   ├── Navbar.jsx               # Sticky navigation with active section detection
│   │   ├── Preloader.jsx            # Initial asset loading display
│   │   ├── Projects.jsx             # Project case studies with live and repo links
│   │   ├── Skills.jsx               # Categorized competencies and active study areas
│   │   ├── Statistics.jsx           # Animated numeric indicators
│   │   └── WhatsAppButton.jsx       # Fixed direct chat trigger
│   ├── context/
│   │   └── ThemeContext.jsx         # Theme provider
│   ├── data/
│   │   ├── journeyData.js           # Education and transition milestones
│   │   └── portfolioData.js         # Projects, skills, and personal information
│   ├── hooks/
│   │   ├── useGitHubData.js         # GitHub API fetching with session caching
│   │   └── useScrollReveal.js       # Viewport intersection observer hook
│   ├── services/
│   │   ├── api.js                   # Client-side HTTP requests
│   │   └── github.js                # GitHub data transformation and calculation
│   ├── App.jsx                      # Component composition
│   ├── index.css                    # Tailwind directives and utility classes
│   └── main.jsx                     # Application bootstrap
├── .env.example                     # Frontend environment variable template
├── index.html                       # Entry HTML with OpenGraph metadata
├── package.json                     # Frontend dependencies and scripts
├── tailwind.config.js               # Theme configuration and custom colors
├── vercel.json                      # Vercel deployment directives
└── vite.config.js                   # Vite configuration
```

## Setup and Installation

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Frontend Configuration

1. Install root dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables (optional for local development):
   ```bash
   copy .env.example .env
   ```
   Define `VITE_API_URL` if connecting to an external backend instance (defaults to `http://localhost:5000`).

3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   The client will serve on `http://localhost:5173`.

### Backend Configuration

1. Navigate to the backend directory and install dependencies:
   ```bash
   cd backend
   npm install
   ```

2. Create the environment file:
   ```bash
   copy .env.example .env
   ```

3. Populate `backend/.env` with required parameters:
   ```env
   PORT=5000
   NODE_ENV=development
   CLIENT_URL=http://localhost:5173

   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-character-app-password
   CONTACT_EMAIL=vakadiajay666@gmail.com

   GITHUB_TOKEN=your_personal_access_token
   ```

   Note on Gmail SMTP: Standard account passwords are not accepted by Google SMTP. A 16-character App Password must be generated under Google Account Security settings with 2-Step Verification enabled.

4. Start the backend service:
   ```bash
   npm start
   ```
   The service binds to port 5000.

## API Specification

### Health Check
- Method: `GET`
- Path: `/api/health`
- Response: `200 OK`
  ```json
  {
    "status": "ok",
    "uptime": 120.45,
    "timestamp": "2026-11-04T10:00:00.000Z"
  }
  ```

### Contact Form Submission
- Method: `POST`
- Path: `/api/contact`
- Rate Limit: 5 requests per 15 minutes per IP
- Request Headers: `Content-Type: application/json`
- Request Body:
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "message": "Inquiry regarding Full Stack Developer positions."
  }
  ```
- Validation Rules:
  - `name`: String, minimum 2 characters.
  - `email`: Valid RFC 5322 email string.
  - `message`: String, minimum 10 characters.
- Response: `200 OK` on delivery, `400 Bad Request` on invalid input, `429 Too Many Requests` on rate limit breach.

### GitHub Contribution Proxy
- Method: `GET`
- Path: `/api/github/calendar?username=ajayvakadi12`
- Authentication: Uses backend `GITHUB_TOKEN` server-side to query GitHub GraphQL API.
- Response: `200 OK`
  ```json
  {
    "success": true,
    "calendar": {
      "totalContributions": 32,
      "weeks": [...]
    }
  }
  ```

## Production Build

To compile and optimize the client application for production:

```bash
npm run build
```

Compiled assets are generated in the `dist/` directory, minified, and fingerprinted.

## Deployment

### Frontend (Vercel)
1. Import repository into Vercel.
2. Build Command: `npm run build`
3. Output Directory: `dist`
4. Set Environment Variable: `VITE_API_URL` pointing to the deployed backend URL.

### Backend (Render)
1. Create a new Web Service pointing to the repository root.
2. Root Directory: `backend`
3. Build Command: `npm install`
4. Start Command: `node server.js`
5. Configure all variables defined in `backend/.env.example`.
6. Set `CLIENT_URL` to the production Vercel frontend URL for CORS access control.
