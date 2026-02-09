'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { prefersReducedMotion } from '@/lib/animations';
import JsonVisual from './JsonVisual';
import Image from 'next/image';
import { getAssetPath } from '@/lib/assetPath';
import { Heading2, BodyText, InlineCode } from '@/components/Typography';

interface ScrollRevealCardProps {
  title: string;
  description: string;
  tags?: string[];
  jsonPath?: string;
  imageSrc?: string;
  visualPosition: 'left' | 'right';
  animationStyle?: 'slide' | 'scale' | 'blur' | 'rotate' | 'translateUp';
}

export default function ScrollRevealCard({
  title,
  description,
  tags,
  jsonPath,
  imageSrc,
  visualPosition,
  animationStyle = 'slide',
}: ScrollRevealCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });
  const shouldReduceMotion = prefersReducedMotion();

  const getAnimationVariants = () => {
    if (shouldReduceMotion) {
      return {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      };
    }

    switch (animationStyle) {
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 },
        };
      case 'blur':
        return {
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 },
        };
      case 'rotate':
        return {
          hidden: { opacity: 0, rotate: 2 },
          visible: { opacity: 1, rotate: 0 },
        };
      case 'translateUp':
        return {
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        };
      case 'slide':
      default:
        return {
          hidden: { opacity: 0, x: visualPosition === 'left' ? -40 : 40 },
          visible: { opacity: 1, x: 0 },
        };
    }
  };

  const textVariants = shouldReduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      };

  const variants = getAnimationVariants();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="py-12 md:py-16"
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 ${
          visualPosition === 'right' ? '' : 'md:grid-flow-dense'
        }`}
      >
        {/* Visual */}
        <div
          className={`${visualPosition === 'right' ? 'md:col-start-2 md:row-start-1' : 'md:col-start-1 md:row-start-1'} flex items-center justify-center`}
        >
          <motion.div
            variants={variants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ filter: 'none' }}
          >
            {jsonPath ? (
              <JsonVisual
                jsonPath={jsonPath}
                alt={`${title} visualization`}
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg glass elevation-2 p-2 sm:p-3 md:p-4 overflow-hidden"
              />
            ) : imageSrc ? (
              <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg glass elevation-2 p-2 sm:p-3 md:p-4 overflow-hidden flex items-center justify-center">
                <Image
                  src={getAssetPath(imageSrc)}
                  alt={`${title} visualization`}
                  width={800}
                  height={600}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : null}
          </motion.div>
        </div>

        {/* Content */}
        <motion.div
          variants={textVariants}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className={`space-y-4 flex flex-col justify-center ${visualPosition === 'right' ? 'md:col-start-1 md:row-start-1' : 'md:col-start-2 md:row-start-1'}`}
        >
          <Heading2>{title}</Heading2>

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <InlineCode key={tag}>{tag}</InlineCode>
              ))}
            </div>
          )}

          <BodyText>{description}</BodyText>
        </motion.div>
      </div>
    </motion.div>
  );
}
