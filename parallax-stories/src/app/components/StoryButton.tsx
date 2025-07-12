'use client';

import { useRef } from 'react';
import Link from 'next/link';

type StoryButtonProps = {
  title: string;
  href: string;
};

export function StoryButton({ title, href }: StoryButtonProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = linkRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      linkRef.current?.style.setProperty('--mouse-x', `${x}px`);
      linkRef.current?.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  return (
    <Link
      ref={linkRef}
      href={href}
      onMouseMove={handleMouseMove}
      className="
        story-button-final /* Use the new, correct class */
        inline-block
        font-hand-black
        text-4xl
        m-8 
        p-6 
        border 
        border-zinc-500
        rounded-lg
        w-fit
        bg-transparent /* The button itself starts as transparent */
        text-zinc-200
        hover:text-black /* Text color changes on hover */
        font-bold
        transition-colors duration-300 ease-in-out
      "
    >
      {/* The span is still needed to keep the text on top */ }
      <span>{title}</span>
    </Link>
  );
}