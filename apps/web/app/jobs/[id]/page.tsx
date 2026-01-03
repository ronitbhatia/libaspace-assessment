'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';
import { 
  ArrowLeft, 
  Heart, 
  Bookmark, 
  MapPin, 
  DollarSign, 
  Building2,
  Users,
  Send,
  CheckCircle2
} from 'lucide-react';
import type { Job } from '@libaspace/shared';
import { fetchJobById, saveJob, applyToJob } from '@/lib/api';
import { cn, formatSalary, getMatchScoreColor } from '@/lib/utils';

export default function JobDetailPage() {
  const params = useParams();
  const router = useRouter();
  const jobId = params.id as string;
  
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [applying, setApplying] = useState(false);
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    loadJob();
  }, [jobId]);

  const loadJob = async () => {
    setLoading(true);
    try {
      const data = await fetchJobById(jobId);
      setJob(data);
      setApplied(data.status === 'applied');
    } catch (error) {
      console.error('Error loading job:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      await saveJob(jobId);
      setIsSaved(!isSaved);
    } catch (error) {
      console.error('Error saving job:', error);
    }
  };

  const handleApply = async () => {
    setApplying(true);
    try {
      await applyToJob(jobId);
      setApplied(true);
    } catch (error) {
      console.error('Error applying to job:', error);
    } finally {
      setApplying(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Sidebar />
        <MobileNav />
        <main className="lg:pl-72 pt-16 lg:pt-0">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-32 mb-8"></div>
              <div className="h-10 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/2 mb-8"></div>
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-24 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Sidebar />
        <MobileNav />
        <main className="lg:pl-72 pt-16 lg:pt-0">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-center text-gray-600">Job not found</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <MobileNav />

      <main className="lg:pl-72 pt-16 lg:pt-0 pb-20 lg:pb-0">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Jobs
          </button>

          {/* Header */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 mb-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                {/* Company Logo */}
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-semibold text-gray-600">
                    {job.company.name.charAt(0)}
                  </span>
                </div>
                
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {job.title}
                  </h1>
                  <p className="text-lg text-gray-600 mb-3">{job.company.name}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      <span>{formatSalary(job.salary.min, job.salary.max)}</span>
                    </div>
                    <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">
                      {job.locationType}
                    </span>
                  </div>
                </div>
              </div>

              {/* Match Score */}
              <div className={cn(
                'flex items-center justify-center w-20 h-20 rounded-xl border-2 flex-shrink-0',
                getMatchScoreColor(job.matchScore)
              )}>
                <div className="text-center">
                  <div className="text-2xl font-bold">{job.matchScore}%</div>
                  <div className="text-xs">Match</div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleApply}
                disabled={applied || applying}
                className={cn(
                  'flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition flex-1 sm:flex-initial',
                  applied
                    ? 'bg-green-50 text-green-600 cursor-not-allowed'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                )}
              >
                {applied ? (
                  <>
                    <CheckCircle2 className="h-5 w-5" />
                    Applied
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    {applying ? 'Applying...' : 'Apply Now'}
                  </>
                )}
              </button>
              
              <button
                onClick={handleSave}
                className={cn(
                  'p-3 rounded-lg border transition',
                  isSaved
                    ? 'bg-primary-50 border-primary-200 text-primary-600'
                    : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
                )}
              >
                <Bookmark className={cn('h-5 w-5', isSaved && 'fill-current')} />
              </button>
              
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={cn(
                  'p-3 rounded-lg border transition',
                  isLiked
                    ? 'bg-red-50 border-red-200 text-red-600'
                    : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
                )}
              >
                <Heart className={cn('h-5 w-5', isLiked && 'fill-current')} />
              </button>
            </div>
          </div>

          {/* Job Details */}
          <div className="space-y-6">
            {/* Overview */}
            <Section title="Overview">
              <p className="text-gray-700 leading-relaxed">{job.overview}</p>
            </Section>

            {/* Qualifications */}
            <Section title="Qualifications">
              <ul className="space-y-2">
                {job.qualifications.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* Required Skills */}
            <Section title="Required">
              <ul className="space-y-2">
                {job.required.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* Preferred Skills */}
            {job.preferred.length > 0 && (
              <Section title="Preferred">
                <ul className="space-y-2">
                  {job.preferred.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {/* Responsibilities */}
            <Section title="Responsibilities">
              <ul className="space-y-2">
                {job.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* Benefits */}
            <Section title="Benefits">
              <ul className="grid sm:grid-cols-2 gap-3">
                {job.benefits.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* Company Info */}
            <Section title="Company">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    <span>{job.company.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{job.company.size}</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{job.company.description}</p>
              </div>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
      {children}
    </div>
  );
}

