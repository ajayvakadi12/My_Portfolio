const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const sendContactMessage = async ({ name, email, message }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Server error occurred while submitting message.');
    }

    return {
      success: true,
      message: data.message || 'Message sent successfully!',
    };
  } catch (error) {
    // If backend cannot be reached (e.g. running frontend-only preview), explain clearly
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      return {
        success: false,
        isNetworkError: true,
        message: 'Could not connect to the backend contact server. You can also contact me directly at vakadiajay666@gmail.com.',
      };
    }
    return {
      success: false,
      message: error.message || 'An unexpected error occurred.',
    };
  }
};

