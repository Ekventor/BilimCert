import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function H1({ children, className }: TypographyProps) {
  return (
    <h1 
      className={cn(
        "scroll-m-20 text-4xl font-bold tracking-tight text-primary lg:text-5xl mb-6",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className }: TypographyProps) {
  return (
    <h2 
      className={cn(
        "scroll-m-20 text-3xl font-semibold tracking-tight text-primary mb-4",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className }: TypographyProps) {
  return (
    <h3 
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight text-primary mb-3",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function H4({ children, className }: TypographyProps) {
  return (
    <h4 
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight text-primary mb-2",
        className
      )}
    >
      {children}
    </h4>
  );
}

export function Paragraph({ children, className }: TypographyProps) {
  return (
    <p 
      className={cn(
        "leading-7 text-base text-foreground mb-4",
        className
      )}
    >
      {children}
    </p>
  );
}

export function Lead({ children, className }: TypographyProps) {
  return (
    <p 
      className={cn(
        "text-xl text-foreground leading-7 mb-4",
        className
      )}
    >
      {children}
    </p>
  );
}

export function Large({ children, className }: TypographyProps) {
  return (
    <p 
      className={cn(
        "text-lg font-semibold text-foreground",
        className
      )}
    >
      {children}
    </p>
  );
}

export function Small({ children, className }: TypographyProps) {
  return (
    <small 
      className={cn(
        "text-sm font-medium leading-none",
        className
      )}
    >
      {children}
    </small>
  );
}

export function Subtle({ children, className }: TypographyProps) {
  return (
    <p 
      className={cn(
        "text-sm text-muted-foreground",
        className
      )}
    >
      {children}
    </p>
  );
}

export function Blockquote({ children, className }: TypographyProps) {
  return (
    <blockquote 
      className={cn(
        "mt-6 border-l-2 border-primary pl-6 italic text-foreground",
        className
      )}
    >
      {children}
    </blockquote>
  );
}

export function List({ children, className }: TypographyProps) {
  return (
    <ul 
      className={cn(
        "my-6 ml-6 list-disc [&>li]:mt-2 text-foreground",
        className
      )}
    >
      {children}
    </ul>
  );
}

export function ListItem({ children, className }: TypographyProps) {
  return (
    <li 
      className={cn(
        "text-foreground",
        className
      )}
    >
      {children}
    </li>
  );
}

export function InlineCode({ children, className }: TypographyProps) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground",
        className
      )}
    >
      {children}
    </code>
  );
}
