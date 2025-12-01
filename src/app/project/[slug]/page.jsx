import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image'; // Use Next.js Image
import { ArrowLeft, ExternalLink, Github, Book } from 'lucide-react';
import { getProjectBySlug, getProjectSlugs } from '@/lib/mdx'; // Import our new utility
import ProfileSidebar from '@/components/portfolio/ProfileSidebar';
import DetailNavigation from './DetailNavigation';
import { MDXRemote } from 'next-mdx-remote/rsc'; // For App Router

// Optional: Custom components for MDX (e.g., custom H2 style)
const components = {
  h2: (props) => <h2 className="text-2xl font-bold text-white mt-8 mb-4 border-b border-gray-700 pb-2" {...props} />,
  p: (props) => <p className="text-gray-400 leading-relaxed mb-4" {...props} />,
  ul: (props) => <ul className="list-disc list-inside text-gray-400 mb-4 space-y-2" {...props} />,
  li: (props) => <li className="ml-4" {...props} />,
  // You can add a custom Badge component here for the Stack section
};

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  
  let project;
  try {
    project = getProjectBySlug(slug);
  } catch (e) {
    return notFound();
  }

  const { frontmatter, content } = project;

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center isolate">
      <div className="w-full max-w-[1200px] mt-[60px] mb-[15px] mx-auto flex flex-col lg:flex-row gap-6 px-4 lg:px-0">
        
        <aside className="w-full bg-[#1e1e1f] border border-[#2d2d2d] rounded-[20px] lg:w-[350px] shrink-0 lg:sticky lg:top-[60px] lg:self-start z-10 pt-[60px] pl-[30px] pr-[30px] pb-[30px]">
          <ProfileSidebar />
        </aside>

        <main className="flex-1 bg-[#1e1e1f] border border-[#2d2d2d] rounded-[20px] p-[30px] shadow-lg min-w-0 relative animate-fade-in">
          
          <DetailNavigation />

          <article>
            {/* Header */}
            <header className="mb-8 pt-12 lg:pt-0">
              <Link 
                href="/project" 
                className="inline-flex items-center text-gray-300 hover:text-amber-400 transition-colors mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                <span className="font-medium text-sm">Back To Project</span>
              </Link>

              <div className="space-y-4">
                <div className="text-amber-400 text-xs font-bold tracking-wider uppercase">
                  {frontmatter.category}
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  {frontmatter.title}
                </h1>

                {/* Meta Info */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="h-10 w-10 rounded-full bg-gray-800 overflow-hidden border border-white/10">
                     <Image 
                        src={frontmatter.author.avatar} 
                        alt={frontmatter.author.name} 
                        width={40} 
                        height={40} 
                        className="w-full h-full object-cover"
                     />
                  </div>
                  <div className="text-sm">
                    <div className="text-white font-medium">{frontmatter.author.name}</div>
                    <div className="text-gray-500 text-xs mt-0.5">
                        {frontmatter.startDate}
                        {frontmatter.endDate ? ` - ${frontmatter.endDate}` : ''}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-4">
                  {frontmatter.demo && <ActionLink href={frontmatter.demo} icon={ExternalLink}>Demo</ActionLink>}
                  {frontmatter.code && <ActionLink href={frontmatter.code} icon={Github}>Code</ActionLink>}
                  {frontmatter.docs && <ActionLink href={frontmatter.docs} icon={Book}>Docs</ActionLink>}
                </div>
              </div>
            </header>

            {/* MDX Content Area */}
            <div className="prose prose-invert prose-lg max-w-none text-gray-300">
               {/* Use MDXRemote to render the markdown content */}
               <MDXRemote source={content} components={components} />
            </div>

          </article>
        </main>
      </div>
    </div>
  );
}

function ActionLink({ href, icon: Icon, children }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 bg-[#2a2a2a] border border-white/10 rounded-lg text-xs font-bold text-gray-300 hover:text-white hover:border-amber-400/50 hover:bg-[#333] transition-all"
    >
      {children}
      <Icon className="w-3.5 h-3.5" />
    </a>
  );
}

export async function generateStaticParams() {
  const posts = getProjectSlugs();
  return posts.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ''),
  }));
}