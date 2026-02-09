import { notFound } from 'next/navigation';
import { serialize } from 'next-mdx-remote/serialize';
import { getCaseStudyContent, getAllCaseStudySlugs } from '@/lib/utils';
import Section from '@/components/Section';
import CaseStudyContent from '@/components/case-studies/CaseStudyContent';

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  // Exclude MDX pages with complex JSX props that can't be serialized during static export
  // Exclude slugs that have dedicated static route pages (no MDX); [slug] would 404 for them
  const staticSlugs = slugs.filter(
    (slug) =>
      !['automation-pipeline', 'data-quality-system', 'property-management-platform'].includes(slug)
  );
  return staticSlugs.map((slug) => ({ slug }));
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
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
      development: false,
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
