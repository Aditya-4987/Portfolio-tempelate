"use client";

import { useState } from "react";
import Modal from "./Modal";
import AboutModal from "./AboutModal";
import ContactModal from "./ContactModal";

interface ContactSectionProps {
  aboutModalOpen: boolean;
  setAboutModalOpen: (open: boolean) => void;
  contactModalOpen: boolean;
  setContactModalOpen: (open: boolean) => void;
  aboutAnimating: boolean;
  contactAnimating: boolean;
  onAboutClick: () => void;
  onContactClick: () => void;
}

export default function ContactSection({
  aboutModalOpen,
  setAboutModalOpen,
  contactModalOpen,
  setContactModalOpen,
  aboutAnimating,
  contactAnimating,
  onAboutClick,
  onContactClick,
}: ContactSectionProps) {
  return (
    <div className="contact-area">
      {/* About Section */}
      <section
        className={`card primary-bg p-6 interactive-card ${aboutAnimating ? "about-card-expand" : ""}`}
        onClick={onAboutClick}
        style={{
          width: "448px",
          height: "351px",
          left: "24px",
          top: "649px",
        }}
      >
        {/* Top Bar with Icon and Arrow */}
        <div
          className="about-top-bar flex justify-between items-start"
          style={{
            position: "absolute",
            left: "24px",
            top: "32px",
            width: "400px",
            height: "38px",
          }}
        >
          {/* Decorative Icon */}
          <svg
            className="decorative-icon"
            style={{
              width: "38px",
              height: "38px",
            }}
            viewBox="0 0 38 39"
            fill="none"
          >
            <g clipPath="url(#clip0_0_20)">
              <path
                d="M32.2437 6.10183C31.8757 7.12813 31.6812 8.15144 31.6662 9.18073C31.6513 10.21 31.8128 11.2393 32.1539 12.2746L32.2736 12.6307L31.9176 12.511C30.9032 12.1729 29.8829 12.0083 28.8566 12.0203C27.8273 12.0352 26.792 12.2267 25.7448 12.5977L25.3708 12.7294L25.5054 12.3554C25.8735 11.3321 26.068 10.3058 26.0829 9.27648C26.0979 8.24719 25.9363 7.2179 25.5952 6.18262L25.4785 5.82656L25.8346 5.94624C26.8489 6.28435 27.8692 6.44892 28.8955 6.43695C29.9218 6.42199 30.9601 6.23049 32.0043 5.85947L32.3783 5.72782L32.2437 6.10183Z"
                fill="#F8AFA6"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_20">
                <rect
                  width="38"
                  height="38"
                  fill="white"
                  transform="translate(0.000183105 0.222321)"
                />
              </clipPath>
            </defs>
          </svg>

          {/* Arrow Icon */}
          <svg
            className="arrow-icon cursor-pointer"
            style={{
              width: "38px",
              height: "38px",
            }}
            viewBox="0 0 38 39"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.23768 28.9847C8.743 28.4899 8.743 27.6879 9.23768 27.1934L26.0754 10.3556H15.2C14.5005 10.3556 13.9333 9.78846 13.9333 9.0889C13.9333 8.38935 14.5005 7.82224 15.2 7.82224H29.1333C29.4693 7.82224 29.7915 7.95569 30.0291 8.19324C30.2665 8.43079 30.4 8.75296 30.4 9.0889V23.0223C30.4 23.7218 29.8328 24.2889 29.1333 24.2889C28.4339 24.2889 27.8667 23.7218 27.8667 23.0223V12.1469L11.029 28.9847C10.5343 29.4792 9.73234 29.4792 9.23768 28.9847Z"
              fill="black"
            />
          </svg>
        </div>

        <div
          className="about-text-container relative"
          style={{
            position: "absolute",
            left: "24px",
            top: "155px",
            width: "296px",
            height: "150px",
            overflow: "hidden",
          }}
        >
          <p className="text-xl leading-relaxed">
            Julia Huang is an innovative AI artist, renowned for blending
            cutting-edge technology with creative expression. Based in LA, she
            crafts unique digital art experiences accessible globally.
          </p>

          {/* Fade Effect Overlay */}
          <div
            className="fade-overlay"
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              right: "0",
              height: "60px",
              background:
                "linear-gradient(to bottom, transparent 0%, var(--Primary) 70%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section
        className={`card secondary-bg p-6 interactive-card ${contactAnimating ? "contact-card-expand" : ""}`}
        onClick={onContactClick}
        style={{
          width: "448px",
          height: "351px",
          left: "496px",
          top: "649px",
        }}
      >
        {/* Top Bar */}
        <div
          className="contact-top-bar flex justify-between items-end"
          style={{
            position: "absolute",
            left: "24px",
            top: "30px",
            width: "400px",
            height: "38px",
          }}
        >
          <p className="text-base font-light">
            Have some
            <br />
            questions?
          </p>

          <svg
            className="arrow-icon cursor-pointer"
            style={{
              width: "38px",
              height: "38px",
            }}
            viewBox="0 0 38 39"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.23768 28.9847C8.743 28.4899 8.743 27.6879 9.23768 27.1934L26.0754 10.3556H15.2C14.5005 10.3556 13.9333 9.78846 13.9333 9.0889C13.9333 8.38935 14.5005 7.82224 15.2 7.82224H29.1333C29.4693 7.82224 29.7915 7.95569 30.0291 8.19324C30.2665 8.43079 30.4 8.75296 30.4 9.0889V23.0223C30.4 23.7218 29.8328 24.2889 29.1333 24.2889C28.4339 24.2889 27.8667 23.7218 27.8667 23.0223V12.1469L11.029 28.9847C10.5343 29.4792 9.73234 29.4792 9.23768 28.9847Z"
              fill="black"
            />
          </svg>
        </div>

        <h2
          className="contact-title text-5xl font-medium"
          style={{
            position: "absolute",
            left: "24px",
            top: "259px",
          }}
        >
          Contact me
        </h2>
      </section>

      {/* Socials Section */}
      <section
        className="card primary-bg flex items-center justify-center"
        style={{
          width: "448px",
          height: "101px",
          left: "968px",
          top: "899px",
        }}
      >
        <div className="social-links flex justify-between w-80">
          <a
            href="#"
            className="nav-link text-base font-light uppercase tracking-wide transition-all duration-300 relative"
          >
            INSTAGRAM
          </a>
          <a
            href="#"
            className="nav-link text-base font-light uppercase tracking-wide transition-all duration-300 relative"
          >
            TWITTER
          </a>
          <a
            href="#"
            className="nav-link text-base font-light uppercase tracking-wide transition-all duration-300 relative"
          >
            LINKEDIN
          </a>
        </div>
      </section>

      {/* Modals */}
      <Modal isOpen={aboutModalOpen} onClose={() => setAboutModalOpen(false)}>
        <AboutModal />
      </Modal>

      <Modal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      >
        <ContactModal />
      </Modal>
    </div>
  );
}
