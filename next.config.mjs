/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.REACT_APP_FIREBASE_API_KEY,
    AUTH_DOMAIN: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    PROJECT_ID: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    STORAGE_BUCKET: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    APP_ID: process.env.REACT_APP_FIREBASE_APP_ID,
    MEASUREMENT_ID: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  },
}

export default nextConfig;
