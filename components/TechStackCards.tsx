'use client';

import Image from 'next/image';
import { getAssetPath } from '@/lib/assetPath';

interface TechStackItem {
  name: string;
  icon: string;
}

interface TechStackCardsProps {
  techStack: TechStackItem[];
}

export default function TechStackCards({ techStack }: TechStackCardsProps) {
  const totalCards = techStack.length;
  
  return (
    <div 
      className="relative flex items-center justify-center"
      style={{ 
        height: '120px', 
        width: '120px',
      }}
    >
      {techStack.map((tech, index) => {
        const zIndex = index + 1;
        
        return (
          <div
            key={tech.name}
            className={`tech-card-${index} bg-bg-light dark:bg-bg-dark border border-accent-muted/20 rounded-lg shadow-lg flex items-center justify-center overflow-hidden absolute transition-all duration-500 ease-out`}
            style={{
              width: '86px',
              height: '86px',
              zIndex,
              left: '50%',
              top: '50%',
              marginLeft: '-28px',
              marginTop: '-28px',
            }}
          >
            <div className="relative w-10 h-10">
              <Image
                src={getAssetPath(tech.icon)}
                alt={`${tech.name} icon`}
                fill
                className="object-contain"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
