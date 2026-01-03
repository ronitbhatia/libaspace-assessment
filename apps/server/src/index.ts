/**
 * Main Express server entry point
 * Configures middleware, routes, and error handling for the LibaSpace API
 */

import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jobRoutes from './routes/jobs';
import livekitRoutes from './routes/livekit';
import avatarRoutes from './routes/avatar';

// Load environment variables from .env file
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 4000;

// Configure CORS to allow requests from the frontend
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || 'http://localhost:3000',
  credentials: true
}));

// Parse JSON request bodies
app.use(express.json());

// Parse URL-encoded request bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));

// Log all incoming requests with timestamp for debugging
app.use((req, _res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Health check endpoint to verify server is running
app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Register API route handlers
app.use('/api/jobs', jobRoutes);
app.use('/api/livekit', livekitRoutes);
app.use('/api/avatar', avatarRoutes);

// Handle 404 errors for undefined routes
app.use((_req: Request, res: Response) => {
  res.status(404).json({ success: false, error: 'Route not found' });
});

// Global error handler for unhandled exceptions
app.use((err: Error, _req: Request, res: Response, _next: any) => {
  console.error('Error:', err);
  res.status(500).json({ 
    success: false, 
    error: 'Internal server error',
    // Only expose error details in development mode for security
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start the Express server and listen on the configured port
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

