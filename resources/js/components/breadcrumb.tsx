import React from 'react';
import { Link } from '@inertiajs/react';
import { TranslatedText } from './multilingual/TranslatedText/TranslatedText';
import { useLanguage } from '../hooks/useLanguage';

interface BreadcrumbItem {
  title: string;
  href: string;
  translationKey?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const { t } = useLanguage();

  return (
    <nav className="flex py-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span className="sr-only">
              <TranslatedText textKey="header.home" />
            </span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
            <Link
              href={item.href}
              className={`ml-2 text-sm font-medium ${index === items.length - 1 ? "text-[#003366] hover:text-[#004080]" : "text-gray-500 hover:text-gray-700"
                } transition-colors`}
              aria-current={index === items.length - 1 ? "page" : undefined}
            >
              {item.translationKey ? (
                <TranslatedText textKey={item.translationKey} />
              ) : (
                item.title
              )}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
