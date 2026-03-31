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
    'Angular', 'Ionic', 'TypeScript', 'RxJS', 'PrimeNG', 'Tailwind CSS',
    'Django', 'Python', 'Celery', 'PostgreSQL', 'AWS S3', 'CloudFront',
    'OpenStreetMap', 'MoEngage', 'Sentry', 'REST APIs'
  ];

  const unisysTechTags = [
    'React', 'Bootstrap', 'NodeJs', 'Java', 'Vert.x', 'SQL', 'MongoDb', 'Selenium', 'Cucumber'
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
          {/* Role 1 — Current */}
          <div className="relative p-6 md:p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800" data-aos="fade-up">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Software Engineer</h3>
                <p className="text-accent-600 dark:text-accent-400 font-medium text-sm">Rozana Rural Commerce Pvt Ltd</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Bangalore, India &middot; Full-time</p>
              </div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-semibold whitespace-nowrap border border-green-500/20">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                Oct 2025 – Present
              </span>
            </div>

            {/* POS System */}
            <ProjectBlock icon="fas fa-shopping-cart" title="Point of Sale (POS) System – Angular / Ionic">
              <SubProject title="Rozana Delayed Wheels – Scheduled Delivery System" items={[
                'Developed end-to-end scheduled delivery feature with PrimeNG DatePicker integration for future delivery dates',
                'Implemented priority-based order-type logic: Delayed Wheels > Regular Wheels > Normal orders',
                'Designed three-stage fulfilment workflow (Placed → Ready for Dispatch → Delivered) with manual delivery confirmation',
                'Extended data model with eta_data field for facility-specific ETA tracking',
                'Optimised App Pay payment flow, reducing checkout friction for scheduled orders',
              ]} />
              <SubProject title="Rozana Wheels – Mobile Van Sales Platform" items={[
                'Implemented automatic marketplace detection using real-time GPS (100m threshold) with manual Store/Van override',
                'Integrated Capacitor Geolocation API for high-accuracy position tracking with distance calculation',
                'Built complete Vehicle Management module with CRUD operations and daily user-to-vehicle assignments',
                'Extended order creation with vehicle metadata and customer GPS coordinates for delivery tracking',
              ]} />
              <SubProject title="MoEngage Analytics Integration" items={[
                'Integrated MoEngage Web SDK to track complete order lifecycle with structured event payloads',
                'Designed non-blocking analytics layer with Sentry-backed error handling',
              ]} />
              <SubProject title="Consignment Tracking Module – TMS Integration" items={[
                'Built full consignment details page with 8 tabbed sections integrated with TMS REST APIs',
                'Integrated OpenStreetMap for visual route tracking with dynamic bounding-box calculation',
                'Implemented timeline-based status history with color-coded badges and multi-source event aggregation',
              ]} />
            </ProjectBlock>

            {/* Shipper */}
            <ProjectBlock icon="fas fa-server" title="Rozana Shipper – Seller Onboarding & Analytics – Django / Python">
              <ul className="space-y-1 ml-4">
                <BulletItem>Built end-to-end KYC verification system with multi-step onboarding and encrypted field storage</BulletItem>
                <BulletItem>Developed secure document upload pipeline using AWS S3 with three-tier approval workflow</BulletItem>
                <BulletItem>Built asynchronous supplier reporting with Celery batch processing (1,000 records/batch) handling 10,000+ orders</BulletItem>
                <BulletItem>Resolved N+1 query performance issues through Django ORM optimization and database indexing</BulletItem>
              </ul>
            </ProjectBlock>

            {/* Marketplace */}
            <ProjectBlock icon="fas fa-store" title="Marketplace Application – Sole Developer – Angular">
              <ul className="space-y-1 ml-4">
                <BulletItem>Sole architect and developer – conceived, designed, and delivered entire marketplace platform from scratch</BulletItem>
                <BulletItem>Built responsive product catalog with search, filtering, shopping cart, and checkout workflow</BulletItem>
                <BulletItem>Designed RESTful APIs, database schema, and business logic for order processing</BulletItem>
                <BulletItem>Integrated payment gateway and developed admin dashboard for end-to-end management</BulletItem>
              </ul>
            </ProjectBlock>

            {/* CMS */}
            <ProjectBlock icon="fas fa-cogs" title="CMS Dashboard – React">
              <ul className="space-y-1 ml-4">
                <BulletItem>Added User Type Management with configurable minimum purchase amounts and cancellation policies per facility</BulletItem>
                <BulletItem>Built Channel Management System with conditional UI rendering across product and facility modules</BulletItem>
                <BulletItem>Enhanced Pricing Management by unlocking BP and MRP fields for direct inline editing</BulletItem>
                <BulletItem>Led CDN migration from AWS S3 to CloudFront, improving image delivery performance</BulletItem>
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

          {/* Role 2 — Unisys */}
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

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  <i className="fas fa-code text-accent-500 text-xs" /> Frontend Development
                </h5>
                <ul className="space-y-1">
                  <BulletItem>Boosted user experience through responsive UI design with React.js</BulletItem>
                  <BulletItem>Reduced coding time by 15 hours per project with reusable components</BulletItem>
                  <BulletItem>Integrated CSS modules for improved code maintainability</BulletItem>
                  <BulletItem>Implemented modern UI/UX patterns and best practices</BulletItem>
                </ul>
              </div>
              <div>
                <h5 className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  <i className="fas fa-database text-accent-500 text-xs" /> Backend & Testing
                </h5>
                <ul className="space-y-1">
                  <BulletItem>Developed scalable microservices with Java and Vertx</BulletItem>
                  <BulletItem>Reduced testing time by 30% through automation</BulletItem>
                  <BulletItem>Implemented testing with Java, Selenium, and Cucumber</BulletItem>
                </ul>
              </div>
            </div>

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
