'use client';

import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';
import { Bell, Lock, Palette, Globe } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <MobileNav />

      <main className="lg:pl-72 pt-16 lg:pt-0 pb-20 lg:pb-0">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Settings</h1>

          <div className="space-y-6">
            {/* Notifications */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Bell className="h-6 w-6 text-primary-600" />
                <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
              </div>
              <div className="space-y-3">
                {[
                  'Email notifications for new job matches',
                  'Weekly job recommendations digest',
                  'Application status updates',
                  'Messages from employers',
                ].map((setting, index) => (
                  <label key={index} className="flex items-center justify-between cursor-pointer">
                    <span className="text-gray-700">{setting}</span>
                    <input
                      type="checkbox"
                      defaultChecked={index < 2}
                      className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Privacy */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-primary-600" />
                <h2 className="text-xl font-semibold text-gray-900">Privacy</h2>
              </div>
              <div className="space-y-3">
                {[
                  'Make my profile visible to employers',
                  'Allow anonymous profile viewing',
                  'Share application analytics',
                ].map((setting, index) => (
                  <label key={index} className="flex items-center justify-between cursor-pointer">
                    <span className="text-gray-700">{setting}</span>
                    <input
                      type="checkbox"
                      defaultChecked={index === 0}
                      className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Appearance */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Palette className="h-6 w-6 text-primary-600" />
                <h2 className="text-xl font-semibold text-gray-900">Appearance</h2>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Theme
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System</option>
                </select>
              </div>
            </div>

            {/* Language */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-6 w-6 text-primary-600" />
                <h2 className="text-xl font-semibold text-gray-900">Language & Region</h2>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Language
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>English (US)</option>
                  <option>English (UK)</option>
                  <option>Español</option>
                  <option>Français</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

