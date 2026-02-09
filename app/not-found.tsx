import Link from 'next/link';
import Section from '@/components/Section';
import { Heading1, BodyText } from '@/components/Typography';

export default function NotFound() {
  return (
    <Section>
      <div className="max-w-content mx-auto text-center space-y-4">
        <Heading1>404</Heading1>
        <BodyText className="text-text-light/70 dark:text-text-dark/70">
          Page not found
        </BodyText>
        <Link
          href="/"
          className="inline-block text-accent hover:underline mt-4"
        >
          Return home
        </Link>
      </div>
    </Section>
  );
}
