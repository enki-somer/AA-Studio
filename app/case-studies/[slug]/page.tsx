import { notFound } from 'next/navigation';
import { serialize } from 'next-mdx-remote/serialize';
import { getCaseStudyContent, getAllCaseStudySlugs } from '@/lib/utils';
import Section from '@/components/Section';
import CaseStudyContent from '@/components/case-studies/CaseStudyContent';

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const content = await getCaseStudyContent(params.slug);

  if (!content) {
    notFound();
  }

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  });

  return (
    <Section>
      <div className="max-w-wide mx-auto">
        <CaseStudyContent content={mdxSource} />
      </div>
    </Section>
  );
}
