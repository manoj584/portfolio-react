import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { animationConfig } from './animations';
  
const Experience = () => {
  useEffect(() => {
    AOS.init({
      ...animationConfig.fadeUp
    });
  }, []);
  return (
    <section id="experience" className="full-page-section bg-light page-transition" data-aos="fade-up">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="display-4 fw-bold text-dark mb-3">Work Experience</h2>
          <div className="bg-primary mx-auto section-title-underline" style={{width: '80px', height: '4px'}}></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card-wrapper mb-5">
              <div className="card border-0 shadow-lg card-hover experience-card" data-aos="fade-up">
                <div className="card-body p-5">
                  <div className="row mb-4">
                    <div className="col-md-8">
                      <h3 className="h2 fw-bold text-dark">Full Stack Developer</h3>
                      <h4 className="h4 text-primary fw-semibold">Software Developer – POS, CMS, Shipper & Marketplace Applications</h4>
                      <p className="text-muted">Angular / Ionic / TypeScript</p>
                    </div>
                    <div className="col-md-4 text-md-end">
                      <span className="badge bg-success bg-opacity-10 text-success fs-6">
                        <i className="fas fa-calendar me-2"></i>Oct 2025 - Present
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="fw-semibold text-primary mb-3">
                      <i className="fas fa-shopping-cart me-2"></i>Point of Sale (POS) System – Angular / Ionic
                    </h5>

                    <div className="mb-4">
                      <h6 className="fw-semibold text-dark mb-2">Rozana Delayed Wheels – Scheduled Delivery System</h6>
                      <ul className="list-unstyled ms-3">
                        <li className="d-flex align-items-start mb-2" data-aos="fade-up" data-aos-delay="100">
                          <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                          <span className="text-muted">Developed end-to-end scheduled delivery feature with PrimeNG DatePicker integration for future delivery dates</span>
                        </li>
                        <li className="d-flex align-items-start mb-2" data-aos="fade-up" data-aos-delay="100">
                          <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                          <span className="text-muted">Implemented priority-based order-type logic: Delayed Wheels &gt; Regular Wheels &gt; Normal orders</span>
                        </li>
                        <li className="d-flex align-items-start mb-2" data-aos="fade-up" data-aos-delay="100">
                          <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                          <span className="text-muted">Designed three-stage fulfilment workflow (Placed → Ready for Dispatch → Delivered) with manual delivery confirmation</span>
                        </li>
                        <li className="d-flex align-items-start mb-2" data-aos="fade-up" data-aos-delay="100">
                          <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                          <span className="text-muted">Extended data model with eta_data field for facility-specific ETA tracking</span>
                        </li>
                        <li className="d-flex align-items-start mb-2" data-aos="fade-up" data-aos-delay="100">
                          <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                          <span className="text-muted">Optimised App Pay payment flow, reducing checkout friction for scheduled orders</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h6 className="fw-semibold text-dark mb-2">Rozana Wheels – Mobile Van Sales Platform</h6>
                      <ul className="list-unstyled ms-3">
                        <li className="d-flex align-items-start mb-2" data-aos="fade-up" data-aos-delay="100">
                          <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                          <span className="text-muted">Implemented automatic marketplace detection using real-time GPS (100m threshold) with manual Store/Van override</span>
                        </li>
                        <li className="d-flex align-items-start mb-2" data-aos="fade-up" data-aos-delay="100">
                          <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                          <span className="text-muted">Integrated Capacitor Geolocation API for high-accuracy position tracking with distance calculation</span>
                        </li>
                        <li className="d-flex align-items-start mb-2" data-aos="fade-up" data-aos-delay="100">
                          <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                          <span className="text-muted">Built complete Vehicle Management module with CRUD operations and daily user-to-vehicle assignments</span>
                        </li>
                        <li className="d-flex align-items-start mb-2" data-aos="fade-up" data-aos-delay="100">
                          <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                          <span className="text-muted">Extended order creation with vehicle metadata and customer GPS coordinates for delivery tracking</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h6 className="fw-semibold text-dark mb-2">MoEngage Analytics Integration</h6>
                      <ul className="list-unstyled ms-3">
                        <li className="d-flex align-items-start mb-2" data-aos="fade-up" data-aos-delay="100">
                          <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                          <span className="text-muted">Integrated MoEngage Web SDK to track complete order lifecycle with structured event payloads</span>
                        </li>
                        <li className="d-flex align-items-start mb-2" data-aos="fade-up" data-aos-delay="100">
                          <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                          <span className="text-muted">Designed non-blocking analytics layer with Sentry-backed error handling</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h6 className="fw-semibold text-dark mb-2">Consignment Tracking Module – TMS Integration</h6>
                      <ul className="list-unstyled ms-3">
                        <li className="d-flex align-items-start mb-2" data-aos="fade-up" data-aos-delay="100">
                          <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                          <span className="text-muted">Built full consignment details page with 8 tabbed sections integrated with TMS REST APIs</span>
                        </li>
                        <li className="d-flex align-items-start mb-2" data-aos="fade-up" data-aos-delay="100">
                          <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                          <span className="text-muted">Integrated OpenStreetMap for visual route tracking with dynamic bounding-box calculation</span>
                        </li>
                        <li className="d-flex align-items-start mb-2" data-aos="fade-up" data-aos-delay="100">
                          <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                          <span className="text-muted">Implemented timeline-based status history with color-coded badges and multi-source event aggregation</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="fw-semibold text-primary mb-3">
                      <i className="fas fa-server me-2"></i>Rozana Shipper – Seller Onboarding & Analytics - Django / Python
                    </h5>
                    <ul className="list-unstyled ms-3">
                      <li className="d-flex align-items-start mb-2" data-aos="fade-up" data-aos-delay="100">
                        <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                        <span className="text-muted">Built end-to-end KYC verification system with multi-step onboarding and encrypted field storage</span>
                      </li>
                      <li className="d-flex align-items-start mb-2" data-aos="fade-up" data-aos-delay="100">
                        <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                        <span className="text-muted">Developed secure document upload pipeline using AWS S3 with three-tier approval workflow</span>
                      </li>
                      <li className="d-flex align-items-start mb-2" data-aos="fade-up" data-aos-delay="100">
                        <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                        <span className="text-muted">Built asynchronous supplier reporting with Celery batch processing (1,000 records/batch) handling 10,000+ orders</span>
                      </li>
                      <li className="d-flex align-items-start mb-2" data-aos="fade-up" data-aos-delay="100">
                        <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                        <span className="text-muted">Resolved N+1 query performance issues through Django ORM optimization and database indexing</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h5 className="fw-semibold text-primary mb-3">
                      <i className="fas fa-store me-2"></i>Marketplace Application – Sole Developer - Angular
                    </h5>
                    <ul className="list-unstyled ms-3">
                      <li className="d-flex align-items-start mb-2" data-aos="fade-up" data-aos-delay="100">
                        <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                        <span className="text-muted">Sole architect and developer – conceived, designed, and delivered entire marketplace platform from scratch</span>
                      </li>
                      <li className="d-flex align-items-start mb-2" data-aos="fade-up" data-aos-delay="100">
                        <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                        <span className="text-muted">Built responsive product catalog with search, filtering, shopping cart, and checkout workflow</span>
                      </li>
                      <li className="d-flex align-items-start mb-2" data-aos="fade-up" data-aos-delay="100">
                        <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                        <span className="text-muted">Designed RESTful APIs, database schema, and business logic for order processing</span>
                      </li>
                      <li className="d-flex align-items-start mb-2" data-aos="fade-up" data-aos-delay="100">
                        <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                        <span className="text-muted">Integrated payment gateway and developed admin dashboard for end-to-end management</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h5 className="fw-semibold text-primary mb-3">
                      <i className="fas fa-cogs me-2"></i>CMS Dashboard - React
                    </h5>
                    <ul className="list-unstyled ms-3">
                      <li className="d-flex align-items-start mb-2" data-aos="fade-up" data-aos-delay="100">
                        <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                        <span className="text-muted">Added User Type Management with configurable minimum purchase amounts and cancellation policies per facility</span>
                      </li>
                      <li className="d-flex align-items-start mb-2" data-aos="fade-up" data-aos-delay="100">
                        <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                        <span className="text-muted">Built Channel Management System with conditional UI rendering across product and facility modules</span>
                      </li>
                      <li className="d-flex align-items-start mb-2" data-aos="fade-up" data-aos-delay="100">
                        <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                        <span className="text-muted">Enhanced Pricing Management by unlocking BP and MRP fields for direct inline editing</span>
                      </li>
                      <li className="d-flex align-items-start mb-2" data-aos="fade-up" data-aos-delay="100">
                        <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                        <span className="text-muted">Led CDN migration from AWS S3 to CloudFront, improving image delivery performance</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h6 className="fw-semibold text-dark mb-3">Technologies:</h6>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-primary">Angular</span>
                      <span className="badge bg-primary">Ionic</span>
                      <span className="badge bg-primary">TypeScript</span>
                      <span className="badge bg-primary">RxJS</span>
                      <span className="badge bg-primary">PrimeNG</span>
                      <span className="badge bg-primary">Tailwind CSS</span>
                      <span className="badge bg-info">Django</span>
                      <span className="badge bg-info">Python</span>
                      <span className="badge bg-info">Celery</span>
                      <span className="badge bg-info">PostgreSQL</span>
                      <span className="badge bg-warning text-dark">AWS S3</span>
                      <span className="badge bg-warning text-dark">CloudFront</span>
                      <span className="badge bg-secondary">OpenStreetMap</span>
                      <span className="badge bg-secondary">MoEngage</span>
                      <span className="badge bg-secondary">Sentry</span>
                      <span className="badge bg-secondary">REST APIs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-wrapper">
              <div className="card border-0 shadow-lg card-hover experience-card" data-aos="fade-up">
                <div className="card-body p-5">
                  <div className="row mb-4">
                    <div className="col-md-8">
                      <h3 className="h2 fw-bold text-dark">Software Engineer</h3>
                      <h4 className="h4 text-primary fw-semibold">Unisys India Pvt Ltd</h4>
                      <p className="text-muted">Bangalore, India</p>
                      <span class="badge bg-success bg-opacity-10 text-success fs-6">Full-time</span>
                    </div>
                    <div className="col-md-4 text-md-end">
                      <span className="badge bg-primary bg-opacity-10 text-primary fs-6">
                        <i className="fas fa-calendar me-2"></i>Sep 2023 - May 2024
                      </span>
                    </div>
                  </div>

                  <div className="row g-4">
                    <div className="col-md-6">
                      <h5 className="fw-semibold text-primary mb-3">Frontend Development</h5>
                      <ul className="list-unstyled">
                        <li className="d-flex align-items-start mb-3" data-aos="fade-up" data-aos-delay="100">  
                          <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                          <span className="text-muted">Boosted user experience through responsive UI design with React.js</span>
                        </li>
                        <li className="d-flex align-items-start mb-3" data-aos="fade-up" data-aos-delay="100">  
                          <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                          <span className="text-muted">Reduced coding time by 15 hours per project with reusable components</span>
                        </li>
                        <li className="d-flex align-items-start mb-3" data-aos="fade-up" data-aos-delay="100">  
                          <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                          <span className="text-muted">Integrated CSS modules for improved code maintainability</span>
                        </li>
                        <li className="d-flex align-items-start mb-3" data-aos="fade-up" data-aos-delay="100">  
                          <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                          <span className="text-muted">Implemented modern UI/UX patterns and best practices</span>
                        </li>
                      </ul>
                    </div>

                    <div className="col-md-6">
                      <h5 className="fw-semibold text-primary mb-3">Backend & Testing</h5>
                      <ul className="list-unstyled">
                        <li className="d-flex align-items-start mb-3" data-aos="fade-up" data-aos-delay="100">  
                          <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                          <span className="text-muted">Developed scalable microservices with Java and Vertx</span>
                        </li>
                        <li className="d-flex align-items-start mb-3" data-aos="fade-up" data-aos-delay="100">  
                          <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                          <span className="text-muted">Reduced testing time by 30% through automation</span>
                        </li>
                        <li className="d-flex align-items-start mb-3" data-aos="fade-up" data-aos-delay="100">  
                          <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                          <span className="text-muted">Implemented testing with Java, Selenium, and Cucumber</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
