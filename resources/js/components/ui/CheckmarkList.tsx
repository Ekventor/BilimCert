import React from 'react';
import { cn } from '@/lib/utils';

interface CheckmarkListProps {
  items: string[];
  className?: string;
  checkmarkColor?: string;
  textColor?: string;
}

/**
 * A reusable component for displaying lists with checkmarks
 * Ensures proper contrast between text and background
 */
export function CheckmarkList({
  items,
  className,
  checkmarkColor = 'text-[#FF6600]',
  textColor = 'text-gray-800',
}: CheckmarkListProps) {
  return (
    <ul className={cn('space-y-2 outcome-list', className)}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cn('h-5 w-5 mr-2 mt-0.5', checkmarkColor)}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className={cn('text-base', textColor)}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default CheckmarkList;
