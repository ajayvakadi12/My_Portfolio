import express from 'express';
import { handleContactForm } from '../controllers/contactController.js';
import { contactLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

// POST /api/contact - send contact email
router.post('/contact', contactLimiter, handleContactForm);

// GET /api/github/calendar - optional backend proxy for GitHub GraphQL contribution calendar
router.get('/github/calendar', async (req, res) => {
  const username = req.query.username || 'ajayvakadi12';
  const token = process.env.GITHUB_TOKEN?.trim();

  if (!token) {
    return res.status(200).json({
      success: false,
      message: 'No server-side GITHUB_TOKEN configured; client fallback active.',
    });
  }

  const query = `
    query($userName:String!) {
      user(login: $userName){
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
                color
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'ajayvakadi-portfolio-backend',
      },
      body: JSON.stringify({ query, variables: { userName: username } }),
    });

    const data = await response.json();
    return res.status(200).json({
      success: true,
      calendar: data?.data?.user?.contributionsCollection?.contributionCalendar || null,
    });
  } catch (error) {
    console.error('Failed to proxy GitHub calendar:', error);
    return res.status(500).json({ success: false, message: 'Failed to fetch contribution data' });
  }
});

export default router;

