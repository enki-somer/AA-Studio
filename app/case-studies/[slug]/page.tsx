import { notFound } from 'next/navigation';
import { serialize } from 'next-mdx-remote/serialize';
import { getCaseStudyContent } from '@/lib/utils';
import Section from '@/components/Section';
import CaseStudyContent from '@/components/case-studies/CaseStudyContent';

export async function generateStaticParams() {
  // Only build placeholder so this dynamic route is valid for static export.
  // Dedicated static pages: property-management-platform, camunda-jump-effect, erp-financial-system.
  // MDX slugs automation-pipeline, data-quality-system fail prerender (undefined component in MDX).
  return [{ slug: '__static_export_placeholder' }];
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
