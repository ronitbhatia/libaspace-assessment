'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Briefcase, 
  Heart, 
  FileCheck, 
  User, 
  Settings, 
  CreditCard,
  Sparkles,
  Video
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'All Jobs', href: '/jobs', icon: Briefcase },
  { name: 'Matched', href: '/jobs?status=matched', icon: Sparkles },
  { name: 'Liked', href: '/jobs?status=liked', icon: Heart },
  { name: 'Applied', href: '/jobs?status=applied', icon: FileCheck },
  { name: 'Profile', href: '/profile', icon: User },
  { name: 'Settings', href: '/settings', icon: Settings },
  { name: 'AI Avatar', href: '/avatar', icon: Video },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white border-r border-gray-200 px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <Link href="/jobs" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">J</span>
            </div>
            <span className="text-xl font-bold text-gray-900">JobNova</span>
          </Link>
        </div>
        
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => {
                  const isActive = pathname === item.href || 
                    (item.href.includes('?') && pathname + window.location.search === item.href);
                  
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          isActive
                            ? 'bg-primary-50 text-primary-600'
                            : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                        )}
                      >
                        <item.icon
                          className={cn(
                            isActive ? 'text-primary-600' : 'text-gray-400 group-hover:text-primary-600',
                            'h-6 w-6 shrink-0'
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            
            {/* Upgrade CTA */}
            <li className="mt-auto">
              <div className="rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-sm font-semibold">Upgrade Your Plan</h3>
                </div>
                <p className="text-xs text-primary-100 mb-4">
                  Get access to exclusive features and priority support
                </p>
                <button className="w-full flex items-center justify-center gap-2 bg-white text-primary-600 rounded-lg px-4 py-2 text-sm font-semibold hover:bg-primary-50 transition">
                  <CreditCard className="h-4 w-4" />
                  Subscribe
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

