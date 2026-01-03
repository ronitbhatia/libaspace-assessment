import { Router, Request, Response } from 'express';
import { ApiResponse, JobListResponse } from '@libaspace/shared';
import { getAllJobs, getJobById, getJobsByStatus } from '../data/mockJobs';

const router = Router();

// Get all jobs or filter by status
router.get('/', (req: Request, res: Response) => {
  try {
    const { status, page = '1', pageSize = '10' } = req.query;
    
    let jobs = status ? getJobsByStatus(status as string) : getAllJobs();
    
    const pageNum = parseInt(page as string);
    const size = parseInt(pageSize as string);
    const total = jobs.length;
    
    // Pagination
    const startIndex = (pageNum - 1) * size;
    const endIndex = startIndex + size;
    jobs = jobs.slice(startIndex, endIndex);
    
    const response: ApiResponse<JobListResponse> = {
      success: true,
      data: {
        jobs,
        total,
        page: pageNum,
        pageSize: size
      }
    };
    
    res.json(response);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch jobs' 
    });
  }
});

// Get single job by ID
router.get('/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const job = getJobById(id);
    
    if (!job) {
      return res.status(404).json({ 
        success: false, 
        error: 'Job not found' 
      });
    }
    
    const response: ApiResponse = {
      success: true,
      data: job
    };
    
    res.json(response);
  } catch (error) {
    console.error('Error fetching job:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch job' 
    });
  }
});

// Save/like a job
router.post('/:id/save', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const job = getJobById(id);
    
    if (!job) {
      return res.status(404).json({ 
        success: false, 
        error: 'Job not found' 
      });
    }
    
    // In a real app, this would update the database
    // For now, just return success
    res.json({ 
      success: true, 
      message: 'Job saved successfully',
      data: { jobId: id, saved: true }
    });
  } catch (error) {
    console.error('Error saving job:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to save job' 
    });
  }
});

// Apply to a job
router.post('/:id/apply', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const job = getJobById(id);
    
    if (!job) {
      return res.status(404).json({ 
        success: false, 
        error: 'Job not found' 
      });
    }
    
    // In a real app, this would update the database and possibly send notifications
    res.json({ 
      success: true, 
      message: 'Application submitted successfully',
      data: { jobId: id, applied: true }
    });
  } catch (error) {
    console.error('Error applying to job:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to submit application' 
    });
  }
});

export default router;

