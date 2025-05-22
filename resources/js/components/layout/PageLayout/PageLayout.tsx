import React, { ReactNode } from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  breadcrumbs?: Array<{
    label: string;
    href?: string;
    translationKey?: string;
  }>;
  showBreadcrumbs?: boolean;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  title,
  breadcrumbs = [],
  showBreadcrumbs = true,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {showBreadcrumbs && breadcrumbs.length > 0 && (
          <div className="bg-gray-50 py-3">
            <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
              <Breadcrumbs items={breadcrumbs} />
            </div>
          </div>
        )}

        {title && (
          <div className="bg-blue-800 text-white py-6 md:py-8">
            <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
              <h1 className="text-3xl font-bold">{title}</h1>
            </div>
          </div>
        )}

        <div className="container mx-auto px-4 md:px-6 py-6 md:py-8 max-w-screen-xl">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};
