"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const BlogPost2 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumbs */}
      <section className="mt-20 pt-8 pb-4 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center space-x-2 text-sm">
              <Link
                href="/"
                className="text-neutral-600 hover:text-primary-600 transition-colors"
              >
                Home
              </Link>
              <span className="text-neutral-400">/</span>
              <Link
                href="/blog"
                className="text-neutral-600 hover:text-primary-600 transition-colors"
              >
                Blog
              </Link>
              <span className="text-neutral-400">/</span>
              <span className="text-neutral-900 font-medium">
                Digital Quoting Systems
              </span>
            </nav>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="bg-secondary-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                Process Automation
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-neutral-900 leading-tight mb-6">
              How Digital Quoting Systems Save Time and Win More Projects
            </h1>
            <div className="flex items-center justify-between text-neutral-600 mb-8">
              <div className="flex items-center space-x-4">
                <span>May 28, 2023</span>
                <span>•</span>
                <span className="flex items-center">
                  <i className="fa-solid fa-clock mr-1"></i>6 min read
                </span>
              </div>
              <div className="flex space-x-2">
                <button className="text-neutral-400 hover:text-primary-600 transition-colors">
                  <i className="fa-solid fa-share"></i>
                </button>
                <button className="text-neutral-400 hover:text-primary-600 transition-colors">
                  <i className="fa-solid fa-bookmark"></i>
                </button>
              </div>
            </div>
            <p className="text-xl text-neutral-700 leading-relaxed">
              Discover how automating your quoting process can improve accuracy,
              speed, and conversion rates for your construction business. Learn
              about the tools and systems that can transform your estimation
              workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <Image
              src="/assets/blog-quoting.jpg"
              alt="Construction worker using digital tablet for quoting"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
              width={800}
              height={384}
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                In the construction industry, the ability to provide accurate,
                professional quotes quickly can make the difference between
                winning and losing projects. Traditional manual quoting
                processes are not only time-consuming but also prone to errors
                that can cost your business money and reputation. Digital
                quoting systems are revolutionizing how construction companies
                handle estimates and proposals.
              </p>

              <h2 className="text-3xl font-bold font-heading text-neutral-900 mb-6 mt-12">
                The Problem with Traditional Quoting Methods
              </h2>

              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Manual quoting processes in construction have several inherent
                problems that can significantly impact your business efficiency
                and profitability. From time-consuming calculations to
                inconsistent pricing, these issues can cost you both time and
                money.
              </p>

              <div className="bg-secondary-50 border-l-4 border-secondary-600 p-6 my-8 rounded-r-lg">
                <p className="text-secondary-800 font-medium">
                  <strong>Key Insight:</strong> Construction companies using
                  digital quoting systems report 60% faster quote generation and
                  40% higher win rates compared to manual processes.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-neutral-900 mb-4 mt-8">
                Common Issues with Manual Quoting:
              </h3>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="text-neutral-700">
                  Time-consuming calculations and data entry
                </li>
                <li className="text-neutral-700">
                  Inconsistent pricing across different estimators
                </li>
                <li className="text-neutral-700">
                  Difficulty tracking changes and revisions
                </li>
                <li className="text-neutral-700">
                  Limited ability to include detailed specifications
                </li>
                <li className="text-neutral-700">
                  Poor presentation quality to clients
                </li>
              </ul>

              <h2 className="text-3xl font-bold font-heading text-neutral-900 mb-6 mt-12">
                Benefits of Digital Quoting Systems
              </h2>

              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Digital quoting systems offer construction companies a
                comprehensive solution that addresses the limitations of manual
                processes while providing additional benefits that can give you
                a competitive edge in the market.
              </p>

              <h3 className="text-2xl font-semibold text-neutral-900 mb-4 mt-8">
                Key Advantages:
              </h3>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="text-neutral-700">
                  Automated calculations reduce errors and save time
                </li>
                <li className="text-neutral-700">
                  Consistent pricing across all estimates
                </li>
                <li className="text-neutral-700">
                  Professional, branded quote presentations
                </li>
                <li className="text-neutral-700">
                  Easy revision and change tracking
                </li>
                <li className="text-neutral-700">
                  Integration with project management systems
                </li>
              </ul>

              <h2 className="text-3xl font-bold font-heading text-neutral-900 mb-6 mt-12">
                Essential Features of Digital Quoting Systems
              </h2>

              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                When selecting a digital quoting system for your construction
                business, it&apos;s important to understand the key features
                that will provide the most value and help you win more projects.
              </p>

              <h3 className="text-2xl font-semibold text-neutral-900 mb-4 mt-8">
                Must-Have Features:
              </h3>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="text-neutral-700">
                  Template-based quoting for consistency
                </li>
                <li className="text-neutral-700">
                  Material and labor cost databases
                </li>
                <li className="text-neutral-700">
                  Professional quote presentation options
                </li>
                <li className="text-neutral-700">
                  Digital signature capabilities
                </li>
                <li className="text-neutral-700">
                  Integration with accounting systems
                </li>
              </ul>

              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 my-8 rounded-r-lg">
                <p className="text-primary-800 font-medium">
                  <strong>Pro Tip:</strong> Look for systems that offer mobile
                  accessibility, allowing your team to generate quotes on-site
                  and immediately present them to clients.
                </p>
              </div>

              <h2 className="text-3xl font-bold font-heading text-neutral-900 mb-6 mt-12">
                Implementation Strategy
              </h2>

              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Successfully implementing a digital quoting system requires
                careful planning and a phased approach to ensure smooth
                transition and maximum adoption by your team.
              </p>

              <h3 className="text-2xl font-semibold text-neutral-900 mb-4 mt-8">
                Implementation Steps:
              </h3>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="text-neutral-700">
                  Assess current quoting processes and pain points
                </li>
                <li className="text-neutral-700">
                  Research and select the right system for your needs
                </li>
                <li className="text-neutral-700">
                  Set up templates and pricing databases
                </li>
                <li className="text-neutral-700">
                  Train your team on the new system
                </li>
                <li className="text-neutral-700">
                  Implement gradually with pilot projects
                </li>
              </ul>

              <h2 className="text-3xl font-bold font-heading text-neutral-900 mb-6 mt-12">
                Measuring Success and ROI
              </h2>

              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                To justify the investment in a digital quoting system, it&apos;s
                essential to track key metrics that demonstrate the value and
                return on investment for your construction business.
              </p>

              <h3 className="text-2xl font-semibold text-neutral-900 mb-4 mt-8">
                Important Metrics to Track:
              </h3>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="text-neutral-700">
                  Time saved per quote generation
                </li>
                <li className="text-neutral-700">Increase in quote accuracy</li>
                <li className="text-neutral-700">Improvement in win rates</li>
                <li className="text-neutral-700">
                  Reduction in quote revision requests
                </li>
                <li className="text-neutral-700">
                  Client satisfaction with quote presentations
                </li>
              </ul>

              <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 my-12">
                <h3 className="text-2xl font-bold font-heading text-neutral-900 mb-4">
                  Ready to Transform Your Quoting Process?
                </h3>
                <p className="text-lg text-neutral-700 mb-6">
                  Let HaulHype help you implement digital quoting systems that
                  will streamline your estimation process and help you win more
                  projects.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                >
                  Get Your Free Process Audit
                  <i className="fa-solid fa-arrow-right ml-2"></i>
                </Link>
              </div>

              <h2 className="text-3xl font-bold font-heading text-neutral-900 mb-6 mt-12">
                Conclusion
              </h2>

              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                Digital quoting systems represent a significant opportunity for
                construction companies to improve efficiency, accuracy, and
                competitiveness. By automating your quoting process, you can
                reduce errors, save time, and present more professional
                proposals that help you win more projects.
              </p>

              <p className="text-lg text-neutral-700 leading-relaxed">
                The key to success is choosing the right system for your
                specific needs and implementing it effectively with proper
                training and support. With the right digital quoting solution,
                your construction business can operate more efficiently and
                compete more effectively in today&apos;s market.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold font-heading text-neutral-900 mb-8">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link href="/blog/digital-marketing-strategies" className="group">
                <div className="bg-white rounded-lg border border-neutral-200 p-6 hover:shadow-md transition duration-300">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                    5 Digital Marketing Strategies for Construction Companies
                  </h4>
                  <p className="text-neutral-600 text-sm">
                    Learn how to leverage digital channels to generate more
                    leads and grow your construction business.
                  </p>
                </div>
              </Link>
              <Link href="/blog/website-analytics" className="group">
                <div className="bg-white rounded-lg border border-neutral-200 p-6 hover:shadow-md transition duration-300">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                    Website Analytics That Matter for Construction Companies
                  </h4>
                  <p className="text-neutral-600 text-sm">
                    Focus on the metrics that actually drive business growth and
                    help you make data-driven decisions.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost2;
