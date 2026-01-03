/**
 * Job Listing Page Component
 * Displays all available jobs with filtering by status (All, Matched, Liked, Applied)
 * Includes sidebar navigation, job cards, and AI recommendation panel
 */

'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';
import JobCard from '@/components/JobCard';
import JobCardSkeleton from '@/components/JobCardSkeleton';
import RecommendationPanel from '@/components/RecommendationPanel';
import EmptyState from '@/components/EmptyState';
import { fetchJobs } from '@/lib/api';
import type { Job } from '@libaspace/shared';
import { Sparkles, Heart, FileCheck, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define tab configuration for job status filters
const tabs = [
  { name: 'All Jobs', value: '', icon: Briefcase },
  { name: 'Matched', value: 'matched', icon: Sparkles },
  { name: 'Liked', value: 'liked', icon: Heart },
  { name: 'Applied', value: 'applied', icon: FileCheck },
];

export default function JobsPage() {
  // Get status parameter from URL query string
  const searchParams = useSearchParams();
  const statusParam = searchParams.get('status') || '';
  
  // Component state management
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(statusParam);

  // Update active tab when URL changes
  useEffect(() => {
    setActiveTab(statusParam);
  }, [statusParam]);

  // Reload jobs when filter changes
  useEffect(() => {
    loadJobs();
  }, [activeTab]);

  // Fetch jobs from API based on current filter
  const loadJobs = async () => {
    setLoading(true);
    try {
      const response = await fetchJobs(activeTab || undefined);
      setJobs(response.jobs);
    } catch (error) {
      console.error('Error loading jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <MobileNav />

      <main className="lg:pl-72 pt-16 lg:pt-0 pb-20 lg:pb-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Header */}
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Dream Job</h1>
                <p className="text-gray-600">
                  {jobs.length} opportunities matched to your profile
                </p>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.value;
                  
                  return (
                    <button
                      key={tab.value}
                      onClick={() => {
                        setActiveTab(tab.value);
                        window.history.pushState(
                          {},
                          '',
                          tab.value ? `/jobs?status=${tab.value}` : '/jobs'
                        );
                      }}
                      className={cn(
                        'flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition',
                        isActive
                          ? 'bg-primary-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      )}
                    >
                      <tab.icon className="h-4 w-4" />
                      {tab.name}
                    </button>
                  );
                })}
              </div>

              {/* Job List */}
              {loading ? (
                <div className="grid gap-4">
                  {[...Array(3)].map((_, i) => (
                    <JobCardSkeleton key={i} />
                  ))}
                </div>
              ) : jobs.length === 0 ? (
                <EmptyState
                  title="No jobs found"
                  description="We couldn't find any jobs matching your criteria. Try adjusting your filters or check back later for new opportunities."
                  action={{
                    label: 'View All Jobs',
                    onClick: () => {
                      setActiveTab('');
                      window.history.pushState({}, '', '/jobs');
                    },
                  }}
                />
              ) : (
                <div className="grid gap-4">
                  {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              )}
            </div>

            {/* Right Sidebar - Recommendations */}
            <div className="hidden xl:block w-96 flex-shrink-0">
              <div className="sticky top-8">
                <RecommendationPanel />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

