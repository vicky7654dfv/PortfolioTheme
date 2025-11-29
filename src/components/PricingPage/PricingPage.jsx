import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./PricingPage.module.css";

export default function PricingPage() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: ""
  });

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plans = [
    {
      id: 1,
      name: "Basic Plan",
      price: "25",
      features: [
        "Static Web Development",
        "Basic Graphic Design",
        "3 Revisions",
        "Email Support",
        "Mobile Responsive",
        "Basic SEO Setup"
      ],
      unavailable: ["Mobile App Development", "Advertising", "AI Integration", "E-commerce Features"]
    },
    {
      id: 2,
      name: "Standard Plan",
      price: "75",
      isPopular: true,
      features: [
        "Dynamic Web Applications",
        "Mobile App Development (React Native)",
        "Advanced Graphic Design",
        "10 Revisions",
        "Priority Email Support",
        "Database Integration"
      ],
      unavailable: ["Advertising Management", "AI Integration", "Enterprise Features"]
    },
    {
      id: 3,
      name: "Gold Plan",
      price: "125",
      features: [
        "Full Stack Development",
        "Mobile Development (iOS & Android)",
        "Advertising & SEO Setup",
        "Project Management",
        "Unlimited Revisions",
        "API Integration"
      ],
      unavailable: ["Custom AI Integration", "Dedicated Server"]
    },
    {
      id: 4,
      name: "Platinum Plan",
      price: "250",
      features: [
        "Enterprise Web Solutions",
        "Custom AI Integration",
        "Full Advertising Campaign",
        "Dedicated Project Manager",
        "24/7 Priority Support",
        "Cloud Infrastructure Setup",
        "Custom Analytics Dashboard"
      ],
      unavailable: []
    }
  ];

  const openModal = (planName) => {
    setSelectedPlan(planName);
    setFormData(prev => ({ ...prev, plan: planName }));
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
    document.body.style.overflow = 'auto';
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    
    if (id === 'phone') {
      // Allow only numbers and limit to 10 digits
      const numbersOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [id]: numbersOnly }));
    } else {
      setFormData(prev => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate phone number
    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    // Show success popup first
    setShowSuccessPopup(true);
    closeModal();
    
    // Redirect to error page after 2 seconds
    setTimeout(() => {
      setShowSuccessPopup(false);
      navigate("/Error");
    }, 2000);
  };

  return (
    <>
      {/* Outer Wrapper with Gradient */}
      <div className={Style.pricingWrapper}>
        <div className={Style.container}>
          
          {/* Header Section */}
          <div className={Style.headerSection}>
            <h4 className={Style.subTitle}>Transparent Pricing</h4>
            <h1 className={Style.mainTitle}>
              Choose Your <span className={Style.highlight}>Perfect Plan</span>
            </h1>
            <p className={Style.description}>
              Whether you need a simple portfolio or a complex AI-driven enterprise solution, 
              I have a package that fits your needs. No hidden fees, just high-quality code 
              and professional service. All plans include free initial consultation and 
              detailed project documentation.
            </p>
            <div className={Style.trustBadges}>
              <div className={Style.trustItem}>
                <i className="fa-solid fa-shield"></i>
                <span>Secure Payment</span>
              </div>
              <div className={Style.trustItem}>
                <i className="fa-solid fa-clock-rotate-left"></i>
                <span>30-Day Support</span>
              </div>
              <div className={Style.trustItem}>
                <i className="fa-solid fa-file-contract"></i>
                <span>Clear Contract</span>
              </div>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className={Style.pricingGrid}>
            {plans.map((plan) => (
              <div key={plan.id} className={`${Style.card} ${plan.isPopular ? Style.popularCard : ''}`}>
                {plan.isPopular && (
                  <div className={Style.popularTag}>
                    <i className="fa-solid fa-crown"></i>
                    Most Popular
                  </div>
                )}
                
                <div className={Style.cardHeader}>
                  <div className={Style.planIcon}>
                    {plan.id === 1 && <i className="fa-solid fa-rocket"></i>}
                    {plan.id === 2 && <i className="fa-solid fa-star"></i>}
                    {plan.id === 3 && <i className="fa-solid fa-gem"></i>}
                    {plan.id === 4 && <i className="fa-solid fa-trophy"></i>}
                  </div>
                  <h3 className={Style.planName}>{plan.name}</h3>
                  <div className={Style.priceWrapper}>
                    <span className={Style.currency}>$</span>
                    <span className={Style.price}>{plan.price}</span>
                    <span className={Style.period}>/month</span>
                  </div>
                  <p className={Style.taxNote}>*10% taxes applicable • Cancel anytime</p>
                </div>

                <div className={Style.featuresSection}>
                  <h4 className={Style.featuresTitle}>What's Included:</h4>
                  <ul className={Style.featureList}>
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className={Style.featureItem}>
                        <i className={`fa-solid fa-check ${Style.checkIcon}`}></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                    {plan.unavailable.map((feature, idx) => (
                      <li key={`un-${idx}`} className={`${Style.featureItem} ${Style.unavailable}`}>
                        <i className={`fa-solid fa-xmark ${Style.crossIcon}`}></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={Style.cardFooter}>
                  <button 
                    className={Style.chooseBtn} 
                    onClick={() => openModal(plan.name)}
                  >
                    <i className="fa-solid fa-cart-shopping"></i>
                    Choose Plan
                  </button>
                  <p className={Style.planNote}>
                    {plan.id === 1 && "Perfect for startups & personal brands"}
                    {plan.id === 2 && "Ideal for growing businesses"}
                    {plan.id === 3 && "Best for established companies"}
                    {plan.id === 4 && "Enterprise-grade solutions"}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className={Style.additionalInfo}>
            <div className={Style.infoCard}>
              <i className="fa-solid fa-question-circle"></i>
              <h3>Need Custom Solution?</h3>
              <p>Contact us for tailored pricing based on your specific requirements and project scope.</p>
            </div>
            <div className={Style.infoCard}>
              <i className="fa-solid fa-handshake"></i>
              <h3>Flexible Payment</h3>
              <p>Pay in installments or choose annual billing for 15% discount on all plans.</p>
            </div>
            <div className={Style.infoCard}>
              <i className="fa-solid fa-headset"></i>
              <h3>24/7 Support</h3>
              <p>Get dedicated support throughout your project lifecycle and beyond.</p>
            </div>
          </div>

        </div>

        {/* Modal Popup */}
        {isModalOpen && (
          <div className={Style.modalOverlay} onClick={closeModal}>
            <div className={Style.modalContent} onClick={(e) => e.stopPropagation()}>
              <div className={Style.modalHeader}>
                <div className={Style.modalTitleSection}>
                  <i className="fa-solid fa-file-invoice-dollar"></i>
                  <div className={Style.modalTitleText}>
                    <h2>Finalize Your Plan</h2>
                    <p>Complete your {selectedPlan} subscription</p>
                  </div>
                </div>
                <button className={Style.closeBtn} onClick={closeModal}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
              
              <form className={Style.modalForm} onSubmit={handleSubmit}>
                <div className={Style.formRow}>
                  <div className={Style.inputGroup}>
                    <label htmlFor="name" className={Style.inputLabel}>
                      <i className="fa-solid fa-user"></i>
                      FULL NAME <span className={Style.required}>*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      className={Style.formInput}
                      required 
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      autoComplete="name"
                    />
                  </div>

                  <div className={Style.inputGroup}>
                    <label htmlFor="email" className={Style.inputLabel}>
                      <i className="fa-solid fa-envelope"></i>
                      EMAIL ADDRESS <span className={Style.required}>*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      className={Style.formInput}
                      required 
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className={Style.formRow}>
                  <div className={Style.inputGroup}>
                    <label htmlFor="phone" className={Style.inputLabel}>
                      <i className="fa-solid fa-mobile-screen"></i>
                      PHONE NUMBER <span className={Style.required}>*</span>
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      className={Style.formInput}
                      required 
                      placeholder="Enter 10-digit number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      maxLength="10"
                      pattern="[0-9]{10}"
                      autoComplete="tel"
                    />
                    <div className={Style.phoneHint}>
                      {formData.phone.length}/10 digits • Numbers only
                    </div>
                  </div>

                  <div className={Style.inputGroup}>
                    <label htmlFor="plan" className={Style.inputLabel}>
                      <i className="fa-solid fa-cube"></i>
                      SELECTED PLAN <span className={Style.required}>*</span>
                    </label>
                    <select 
                      id="plan" 
                      name="plan"
                      className={Style.formSelect}
                      value={formData.plan}
                      onChange={handleInputChange}
                      required
                      autoComplete="off"
                    >
                      <option value="">Choose your plan</option>
                      {plans.map(p => (
                        <option key={p.id} value={p.name}>
                          {p.name} - ${p.price}/month
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={Style.formFooter}>
                  <div className={Style.termsAgreement}>
                    <input 
                      type="checkbox" 
                      id="terms" 
                      name="terms"
                      className={Style.termsCheckbox} 
                      required 
                      autoComplete="off"
                    />
                    <label htmlFor="terms" className={Style.termsLabel}>
                      I agree to the <a href="/Error" className={Style.termsLink}>terms of service</a> and <a href="/Error" className={Style.termsLink}>privacy policy</a>
                    </label>
                  </div>
                  
                  <button type="submit" className={Style.submitBtn}>
                    <i className="fa-solid fa-lock"></i>
                    Proceed to Payment
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Success Popup */}
        {showSuccessPopup && (
          <div className={Style.successOverlay}>
            <div className={Style.successContent}>
              <div className={Style.successIcon}>
                <i className="fa-solid fa-check"></i>
              </div>
              <h3 className={Style.successTitle}>Request Submitted Successfully!</h3>
              <p className={Style.successMessage}>
                Thank you for choosing {selectedPlan}. We're processing your request 
                and will contact you shortly with the next steps.
              </p>
              <div className={Style.loadingBar}>
                <div className={Style.loadingProgress}></div>
              </div>
              <p className={Style.redirectText}>Redirecting to confirmation page...</p>
            </div>
          </div>
        )}

      </div>
    </>
  );
}