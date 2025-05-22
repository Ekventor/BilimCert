import { SidebarInset } from '@/components/ui/sidebar';
import * as React from 'react';

interface AppContentProps extends React.ComponentProps<'main'> {
    variant?: 'header' | 'sidebar';
}

export function AppContent({ variant = 'header', children, ...props }: AppContentProps) {
    if (variant === 'sidebar') {
        return <SidebarInset {...props}>{children}</SidebarInset>;
    }

    return (
        <main className="container mx-auto px-4 md:px-6 flex h-full w-full max-w-screen-xl flex-1 flex-col gap-4 rounded-xl" {...props}>
            {children}
        </main>
    );
}
