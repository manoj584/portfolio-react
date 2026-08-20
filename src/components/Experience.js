import React from 'react';

const BulletItem = ({ children }) => (
  <li className="flex items-start gap-3 py-1">
    <i className="fas fa-check text-accent-500 mt-1.5 text-xs flex-shrink-0" />
    <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{children}</span>
  </li>
);

const ProjectBlock = ({ icon, title, children }) => (
  <div className="mb-6">
    <h5 className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white mb-3">
      <i className={`${icon} text-accent-500 text-xs`} />
      {title}
    </h5>
    {children}
  </div>
);

const SubProject = ({ title, items }) => (
  <div className="ml-4 mb-4 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
    <h6 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">{title}</h6>
    <ul className="space-y-1">{items.map((item, i) => <BulletItem key={i}>{item}</BulletItem>)}</ul>
  </div>
);

const Experience = () => {
   const rozanaTechTags = [
    'Angular', 'React', 'TypeScript', 'RxJS', 'PrimeNG', 'Django', 'Python', 
    'Django REST Framework', 'Celery', 'PostgreSQL', 'AWS S3', 'CloudFront', 'REST APIs'
  ];

  const headrunTechTags = [
    'Angular', 'Ionic', 'TypeScript', 'PrimeNG', 'RxJS', 'OpenStreetMap', 
    'MoEngage SDK', 'Sentry', 'Playwright', 'Claude Code', 'Cursor'
  ];

  const unisysTechTags = [
    'React.js', 'Java', 'Vert.x', 'Selenium', 'Cucumber', 'AWS S3', 'CloudFront'
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-accent-500 font-semibold text-sm tracking-widest uppercase mb-3">Career</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Work Experience</h2>
        </div>

        <div className="space-y-8">
          {/* Role 1 — Rozana */}
          <div className="relative p-6 md:p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800" data-aos="fade-up">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Software Developer (Full Stack)</h3>
                <p className="text-accent-600 dark:text-accent-400 font-medium text-sm">Rozana Rural Commerce Pvt Ltd</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Bangalore, India &middot; Full-time</p>
              </div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-semibold whitespace-nowrap">
                Oct 2025 – Apr 2026
              </span>
            </div>

            {/* Shipper */}
            <ProjectBlock icon="fas fa-server" title="Rozana Shipper – Seller Onboarding & Analytics – Django / Python">
              <ul className="space-y-1 ml-4">
                <BulletItem>Built end-to-end KYC verification system with secure AWS S3 document-upload pipeline (custom storage backends) and three-tier approval workflow (Pending → Verified → Rejected) with rejection-reason tracking and audit logging</BulletItem>
                <BulletItem>Developed asynchronous supplier reporting with Celery batch processing (1,000 records/batch) over 10,000+ orders, generating 20+ column CSV reports delivered via S3 presigned URLs</BulletItem>
                <BulletItem>Created advanced order filtering (status, SKU, courier, phone, AWB, date range, cancellation reason) and supplier dashboard with task-status tracking and report history</BulletItem>
                <BulletItem>Resolved N+1 query issues via Django ORM optimization and database indexing, significantly reducing report-generation overhead; used AI-assisted code review (Claude Code) to surface sensitive debug logs and missing null-safety checks, then hardened the codebase before release</BulletItem>
              </ul>
            </ProjectBlock>

            {/* Marketplace */}
            <ProjectBlock icon="fas fa-store" title="Marketplace Application – Sole Developer – Angular">
              <ul className="space-y-1 ml-4">
                <BulletItem>Sole architect and developer – designed and delivered entire marketplace platform from scratch including product catalog with search/filtering, cart, checkout, authentication, and profile management</BulletItem>
                <BulletItem>Designed REST APIs, database schema, and order/inventory business logic; integrated payment gateway and built admin dashboard for end-to-end management</BulletItem>
              </ul>
            </ProjectBlock>

            {/* CMS */}
            <ProjectBlock icon="fas fa-cogs" title="CMS Dashboard – React / TypeScript">
              <ul className="space-y-1 ml-4">
                <BulletItem>Added User Type Management to facility workflows – per-user-type minimum purchase amounts and cancellation policies with dynamic form controls and API integration</BulletItem>
                <BulletItem>Built Channel Management System (Channel entity, getChannels() service, channel selection across product/facility modules with conditional rendering); unlocked BP/MRP fields for direct inline pricing edits, removing two-step workflow</BulletItem>
              </ul>
            </ProjectBlock>

            {/* Tech tags */}
            <div className="pt-5 border-t border-gray-200 dark:border-gray-800">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Technologies</p>
              <div className="flex flex-wrap gap-1.5">
                {rozanaTechTags.map((tag, i) => (
                  <span key={i} className="px-2.5 py-1 text-xs font-medium rounded-md bg-accent-500/10 text-accent-600 dark:text-accent-400 border border-accent-500/15">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Role 2 — Headrun */}
          <div className="relative p-6 md:p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800" data-aos="fade-up">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Software Engineer (Full Stack)</h3>
                <p className="text-accent-600 dark:text-accent-400 font-medium text-sm">Headrun</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Bangalore, India &middot; Full-time</p>
              </div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-semibold whitespace-nowrap">
                Jun 2024 – Oct 2025
              </span>
            </div>

            {/* POS System */}
            <ProjectBlock icon="fas fa-shopping-cart" title="Point of Sale (POS) System – Angular / Ionic">
              <SubProject title="Core POS Development" items={[
                'Developed and enhanced POS system with scheduled deliveries (Delayed Wheels), priority-based order handling, and real-time validation using PrimeNG',
                'Built Rozana Wheels – mobile van sales platform with GPS-based marketplace detection, vehicle management, and location-aware order processing',
                'Developed consignment tracking module with TMS API integration – shipment tracking, status timelines, and OpenStreetMap route visualization',
                'Integrated MoEngage analytics for order-lifecycle tracking with structured event payloads and non-blocking error handling via Sentry',
                'Shipped coupon-code support in order pipeline and fixed search-filter state persistence across pagination in Invoices'
              ]} />
            </ProjectBlock>

            {/* Test Automation */}
            <ProjectBlock icon="fas fa-vial" title="POS E2E Test Automation – Playwright / TypeScript">
              <ul className="space-y-1 ml-4">
                <BulletItem>Built Playwright framework with Page Object Model architecture covering Billing, Invoices, Move Inventory, and Location Management modules, with reusable flows and page objects</BulletItem>
                <BulletItem>Automated critical workflows – OTP login, SKU/barcode scanning, inter-warehouse inventory moves, stock validation, and invoice printing with native dialog handling – plus edge cases (invalid locations, duplicate scans, locked locations, permission-gated routes)</BulletItem>
                <BulletItem>Implemented environment-driven configuration (dotenv) for UAT/Production with configurable test data, workers, and retry strategies</BulletItem>
                <BulletItem>Accelerated framework development using AI coding assistants (Claude Code, Cursor) to scaffold page objects, generate edge-case test data, and draft selectors – with manual review and refactoring of all generated code before merge</BulletItem>
              </ul>
            </ProjectBlock>

            {/* Tech tags */}
            <div className="pt-5 border-t border-gray-200 dark:border-gray-800">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Technologies</p>
              <div className="flex flex-wrap gap-1.5">
                {headrunTechTags.map((tag, i) => (
                  <span key={i} className="px-2.5 py-1 text-xs font-medium rounded-md bg-accent-500/10 text-accent-600 dark:text-accent-400 border border-accent-500/15">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Role 3 — Unisys */}
          <div className="relative p-6 md:p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800" data-aos="fade-up">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Associate Software Engineer</h3>
                <p className="text-accent-600 dark:text-accent-400 font-medium text-sm">Unisys India Pvt Ltd</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Bangalore, India &middot; Full-time</p>
              </div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-semibold whitespace-nowrap">
                Sep 2023 – May 2024
              </span>
            </div>

            <ProjectBlock icon="fas fa-shield-alt" title="Stealth Identity">
              <ul className="space-y-1 ml-4">
                <BulletItem>Designed responsive UIs with React.js and built reusable component libraries (props & composition), cutting per-project coding time by ~15 hours and eliminating styling conflicts via scoped CSS modules</BulletItem>
                <BulletItem>Developed scalable microservices with Java & Vert.x, improving backend reliability in high-traffic environments</BulletItem>
                <BulletItem>Automated UI testing with Java, Selenium, and Cucumber, reducing testing time by 30%</BulletItem>
                <BulletItem>Led CDN migration from direct AWS S3 URLs to CloudFront, improving image delivery performance</BulletItem>
              </ul>
            </ProjectBlock>

             {/* Tech tags */}
            <div className="pt-5 border-t border-gray-200 dark:border-gray-800">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Technologies</p>
              <div className="flex flex-wrap gap-1.5">
                {unisysTechTags.map((tag, i) => (
                  <span key={i} className="px-2.5 py-1 text-xs font-medium rounded-md bg-accent-500/10 text-accent-600 dark:text-accent-400 border border-accent-500/15">{tag}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
