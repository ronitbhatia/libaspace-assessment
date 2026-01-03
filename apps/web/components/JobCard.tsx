'use client';

import Link from 'next/link';
import { Heart, Bookmark, MapPin, DollarSign } from 'lucide-react';
import type { Job } from '@libaspace/shared';
import { cn, formatSalary, getMatchScoreColor } from '@/lib/utils';
import { useState } from 'react';
import { saveJob } from '@/lib/api';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleSave = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await saveJob(job.id);
      setIsSaved(!isSaved);
    } catch (error) {
      console.error('Error saving job:', error);
    }
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLiked(!isLiked);
  };

  return (
    <Link href={`/jobs/${job.id}`}>
      <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-soft transition-shadow cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {/* Match Score */}
            <div className={cn(
              'flex items-center justify-center w-16 h-16 rounded-full border-2',
              getMatchScoreColor(job.matchScore)
            )}>
              <div className="text-center">
                <div className="text-2xl font-bold">{job.matchScore}%</div>
              </div>
            </div>
            
            {/* Company Logo Placeholder */}
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-lg font-semibold text-gray-600">
                {job.company.name.charAt(0)}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleLike}
              className={cn(
                'p-2 rounded-lg transition',
                isLiked ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:bg-gray-100'
              )}
            >
              <Heart className={cn('h-5 w-5', isLiked && 'fill-current')} />
            </button>
            <button
              onClick={handleSave}
              className={cn(
                'p-2 rounded-lg transition',
                isSaved ? 'text-primary-600 bg-primary-50' : 'text-gray-400 hover:bg-gray-100'
              )}
            >
              <Bookmark className={cn('h-5 w-5', isSaved && 'fill-current')} />
            </button>
          </div>
        </div>

        {/* Job Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>

        {/* Company Name */}
        <p className="text-gray-600 mb-3">{job.company.name}</p>

        {/* Location and Salary */}
        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="h-4 w-4" />
            <span>{formatSalary(job.salary.min, job.salary.max)}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">
            {job.locationType}
          </span>
          {job.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
          {job.tags.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
              +{job.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Posted Date */}
        <p className="text-xs text-gray-400">{job.posted}</p>
      </div>
    </Link>
  );
}

