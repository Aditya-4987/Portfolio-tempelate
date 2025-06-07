export default function AboutModal() {
  return (
    <div className="about-modal-content">
      {/* Header with decorative icon */}
      <div className="flex items-center gap-4 mb-8">
        <svg
          className="decorative-icon"
          style={{
            width: "48px",
            height: "48px",
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
        <h2 className="text-3xl font-medium">About Julia Huang</h2>
      </div>

      {/* Full content */}
      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          Julia Huang is an innovative AI artist, renowned for blending
          cutting-edge technology with creative expression. Based in LA, she
          crafts unique digital art experiences accessible globally.
        </p>

        <p>
          With over a decade of experience in digital art and emerging
          technologies, Julia has pioneered new approaches to AI-driven design
          that challenge traditional boundaries between human creativity and
          machine intelligence.
        </p>

        <p>
          Her work has been featured in major galleries across Los Angeles, New
          York, and Tokyo, earning recognition for its thoughtful integration of
          artificial intelligence into the creative process. Julia's
          installations often explore themes of human-machine collaboration,
          questioning what it means to be creative in an age of artificial
          intelligence.
        </p>

        <p>
          Through her studio practice, Julia develops custom AI models trained
          on diverse datasets, creating tools that amplify rather than replace
          human creativity. Her collaborative approach with technologists,
          architects, and other artists has resulted in groundbreaking projects
          that redefine the possibilities of digital art.
        </p>

        <div className="border-t border-gray-300 pt-6 mt-8">
          <h3 className="text-xl font-medium mb-4">Education & Background</h3>
          <ul className="space-y-2">
            <li>
              <strong>MFA Digital Art</strong> - California Institute of the
              Arts, 2018
            </li>
            <li>
              <strong>BS Computer Science</strong> - Stanford University, 2015
            </li>
            <li>
              <strong>Certified AI Ethics Practitioner</strong> - MIT, 2020
            </li>
          </ul>
        </div>

        <div className="border-t border-gray-300 pt-6 mt-6">
          <h3 className="text-xl font-medium mb-4">Recent Exhibitions</h3>
          <ul className="space-y-2">
            <li>
              <strong>2024:</strong> "Digital Consciousness" - LACMA, Los
              Angeles
            </li>
            <li>
              <strong>2023:</strong> "AI & Human" - MoMA PS1, New York
            </li>
            <li>
              <strong>2023:</strong> "Future Forms" - Tokyo National Museum
            </li>
            <li>
              <strong>2022:</strong> "Synthetic Dreams" - Venice Biennale
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
