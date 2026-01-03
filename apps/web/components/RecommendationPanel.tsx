'use client';

import { Lightbulb, TrendingUp, Target } from 'lucide-react';

interface Recommendation {
  type: 'insight' | 'match' | 'tip';
  title: string;
  description: string;
}

const recommendations: Recommendation[] = [
  {
    type: 'match',
    title: 'Why is this a good fit for you?',
    description: 'This role matches 84% with your profile based on your skills in JavaScript, React, and 5+ years of experience. The salary range aligns with your expectations.',
  },
  {
    type: 'insight',
    title: 'Optimize Your Interview Approach',
    description: 'Based on the job description, emphasize your experience with modern web frameworks and your ability to work in cross-functional teams during the interview.',
  },
  {
    type: 'tip',
    title: 'Top Skills Employers Want',
    description: 'JavaScript frameworks, Cloud platforms (AWS/GCP), and Agile methodologies are in high demand. Consider highlighting these in your application.',
  },
];

const iconMap = {
  insight: Lightbulb,
  match: Target,
  tip: TrendingUp,
};

const colorMap = {
  insight: 'bg-yellow-50 text-yellow-600',
  match: 'bg-green-50 text-green-600',
  tip: 'bg-blue-50 text-blue-600',
};

export default function RecommendationPanel() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-primary-50 rounded-lg">
          <Lightbulb className="h-5 w-5 text-primary-600" />
        </div>
        <h2 className="text-lg font-semibold text-gray-900">AI Recommendations</h2>
      </div>

      {recommendations.map((rec, index) => {
        const Icon = iconMap[rec.type];
        
        return (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-soft transition-shadow"
          >
            <div className="flex items-start gap-3">
              <div className={`p-2 rounded-lg ${colorMap[rec.type]}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{rec.title}</h3>
                <p className="text-sm text-gray-600">{rec.description}</p>
              </div>
            </div>
          </div>
        );
      })}

      {/* Additional CTA */}
      <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl p-6 text-white">
        <h3 className="font-semibold mb-2">Get More Personalized Tips</h3>
        <p className="text-sm text-primary-100 mb-4">
          Upgrade to premium for unlimited AI-powered career insights
        </p>
        <button className="w-full bg-white text-primary-600 rounded-lg px-4 py-2 text-sm font-semibold hover:bg-primary-50 transition">
          Upgrade Now
        </button>
      </div>
    </div>
  );
}

