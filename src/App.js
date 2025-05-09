import React, { useState, useEffect } from "react";
import "./index.css";

// Simple animated element component
const AnimatedSection = ({ children, className, delay = 0 }) => {
  return (
    <div
      className={`${className} opacity-100 transform translate-y-0 transition-all duration-700`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleSection, setVisibleSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll events for nav highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 300;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setVisibleSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Experience data based on resume
  const experiences = [
    {
      title: "Data Science Intern",
      company: "Corizo",
      period: "December 2022 – March 2023",
      logo: "/images/corizo-logo.png",
      color: "#0070f3",
      achievements: [
        "Cleaned and structured 50K rows of user data, reducing inconsistencies by 30% and streamlining analysis",
        "Engineered features from course feedback and logs to support retention models",
        "Optimized logistic regression and random forest models to predict user drop-off, improving precision by 15%",
      ],
    },
    {
      title: "Data Analyst Intern",
      company: "Gulf Marketing Group",
      period: "January 2022 – July 2022",
      logo: "/images/gmg-logo.png",
      color: "#0070f3",
      achievements: [
        "Conducted attrition analysis on 1,600+ employees using Python for data manipulation and cleaning",
        "Analyzed gender, tenure, and grade data across 7 countries and 10 business units to identify patterns",
        "Created detailed Excel reports with pivot tables, charts, and conditional formatting to highlight trends",
        "Assisted in developing retention strategies that led to a 7% reduction in overall attrition rates",
      ],
    },
    {
      title: "IT Intern",
      company: "Power Grid Corporation",
      period: "June 2020 – August 2020",
      logo: "/images/powergrid-logo.png",
      color: "#ff4000",
      achievements: [
        "Analyzed outage data using Python (pandas, NumPy) to identify trends in downtime and energy losses",
        "Built a time series model with ARIMA to predict short-term energy demand with 80% accuracy",
        "Created Tableau dashboards to visualize transmission efficiency and load distribution metrics",
        "Streamlined reporting processes by automating data cleaning tasks, reducing manual effort by 15%",
      ],
    },
  ];

  // Skills data with logos
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "SQL", "R"],
    },
    {
      name: "Python Libraries",
      skills: [
        "PyTorch",
        "TensorFlow",
        "Scikit-Learn",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "NLTK",
      ],
    },
    {
      name: "Databases",
      skills: ["MySQL", "Pinecone"],
    },
    {
      name: "Tools",
      skills: [
        "Git",
        "Tableau",
        "Microsoft Excel",
        "Power BI",
        "aiXplain",
        "SPSS",
      ],
    },
    {
      name: "AWS",
      skills: [
        "Lambda",
        "Textract",
        "S3",
        "Bedrock",
        "API Gateway",
        "Sagemaker",
      ],
    },
  ];

  // Professional interests
  const interests = [
    {
      title: "AI Ethics & Governance",
      description:
        "Interested in the ethical implications of AI and establishing proper governance frameworks",
    },
    {
      title: "MLOps & Deployment",
      description:
        "Passionate about streamlining ML operations and production deployment pipelines",
    },
    {
      title: "Serverless Architecture",
      description:
        "Focused on building scalable, cost-effective cloud solutions with serverless technologies",
    },
    {
      title: "Production‑Ready AI Solutions",
      description:
        "Converting cutting‑edge AI research into scalable, maintainable software systems.",
    },
  ];

  // Project data from resume
  const projects = [
    {
      id: 1,
      title: "Emotion Detection and Text Transformation System",
      description:
        "Fine-tuned DistilBERT on the Hugging Face Emotion Dataset with 16,000 examples and six emotion categories.",
      image: "/images/project1.jpg",
      link: "https://github.com/sayantan6720/CS6120-Emotion-Detection",
      category: "AI & ML",
      tech: ["DistilBERT", "nlpaug", "openAI"],
    },
    {
      id: 2,
      title: "BlogSmith - AI Blog Generator",
      description:
        "Built an AI-powered blog generation platform using Streamlit, AWS Lambda, and API Gateway.",
      image: "/images/project2.jpg",
      link: "https://github.com/sayantan6720/BlogSmith---A-cloud-based-AI-blog-generator",
      category: "Cloud",
      tech: ["AWS Lambda", "AWS Bedrock", "Streamlit", "API Gateway"],
    },
    {
      id: 3,
      title: "YouTube InsightBot: AI-Powered Video Q&A",
      description:
        "Built an AI-powered YouTube search system using Retrieval-Augmented Generation (RAG).",
      image: "/images/project3.jpg",
      link: "https://github.com/sayantan6720/YouTube-Insight-Bot",
      category: "AI & ML",
      tech: ["RAG", "Pinecone", "FAISS", "GPT-3.5-Turbo"],
    },
    {
      id: 4,
      title: "SafeNest - Real Estate Search",
      description:
        "Developed a property search app using geolocation, crime data visualization, and Haversine distance.",
      image: "/images/project4.jpg",
      link: "https://github.com/sayantan6720",
      category: "AI & ML",
      tech: ["Streamlit", "Pinecone DB", "aiXplain"],
    },
    {
      id: 5,
      title: "Anomaly detection in Spacecraft Telemetry",
      description:
        "Built deep learning models using Convolutional Autoencoders and Temporal Convolutional Networks.",
      image: "/images/project5.jpg",
      link: "https://github.com/sayantan6720/Anomaly-Detection-in-Spacecraft-Telemetry",
      category: "AI & ML",
      tech: ["TensorFlow", "Keras", "CAE", "TCN"],
    },
    {
      id: 6,
      title: "SplitTracker - Smart bill splitting tool",
      description:
        "Built an AI-driven bill-splitting tool using AWS Textract with a 98% parsing accuracy.",
      image: "/images/project6.jpg",
      link: "https://github.com/sayantan6720/SplitTracker",
      category: "Cloud",
      tech: ["Streamlit", "AWS Textract", "aiXplain"],
    },
    {
      id: 7,
      title: "Mobile price classification using AWS Sagemaker",
      description:
        "Developed a machine learning model on AWS SageMaker to classify mobile prices into different ranges.",
      image: "/images/project7.jpg",
      link: "https://github.com/sayantan6720/Mobile-Price-Classification-using-AWS-Sagemaker",
      category: "Cloud",
      tech: ["Python", "AWS Sagemaker", "S3", "scikit-learn"],
    },
  ];

  // Filter projects
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // Education data
  const education = [
    {
      degree: "MS in Computer Science",
      institution: "Northeastern University",
      location: "Arlington, VA",
      period: "April 2025",
      details: "GPA: 4.0/4.0",
      courses:
        "Database Management Systems, Program Design Paradigm, Unsupervised Machine Learning, Natural Language Processing, Foundations of AI",
    },
    {
      degree: "B.E. in Computer Science",
      institution: "Birla Institute of Technology and Science Pilani",
      location: "Dubai, UAE",
      period: "July 2022",
      details: "CGPA: 8.74/10",
      courses:
        "Data Mining, Machine Learning, Artificial Intelligence, Applied Statistical Methods",
    },
  ];

  // Certifications
  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "August 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800/90 shadow-md backdrop-blur-sm border-b border-gray-700/50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#hero" className="text-xl font-bold">
            <span className="text-teal-400">Sayantan</span> Datta
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className={`hover:text-teal-400 transition-colors ${
                visibleSection === "about" ? "text-teal-400" : ""
              }`}
            >
              About
            </a>
            <a
              href="#experience"
              className={`hover:text-teal-400 transition-colors ${
                visibleSection === "experience" ? "text-teal-400" : ""
              }`}
            >
              Experience
            </a>
            <a
              href="#projects"
              className={`hover:text-teal-400 transition-colors ${
                visibleSection === "projects" ? "text-teal-400" : ""
              }`}
            >
              Projects
            </a>
            <a
              href="#skills"
              className={`hover:text-teal-400 transition-colors ${
                visibleSection === "skills" ? "text-teal-400" : ""
              }`}
            >
              Skills
            </a>
            <a
              href="#education"
              className={`hover:text-teal-400 transition-colors ${
                visibleSection === "education" ? "text-teal-400" : ""
              }`}
            >
              Education
            </a>
            <a
              href="#contact"
              className={`hover:text-teal-400 transition-colors ${
                visibleSection === "contact" ? "text-teal-400" : ""
              }`}
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-800 py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-3">
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className={`hover:text-teal-400 transition-colors ${
                  visibleSection === "about" ? "text-teal-400" : ""
                }`}
              >
                About
              </a>
              <a
                href="#experience"
                onClick={() => setMenuOpen(false)}
                className={`hover:text-teal-400 transition-colors ${
                  visibleSection === "experience" ? "text-teal-400" : ""
                }`}
              >
                Experience
              </a>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className={`hover:text-teal-400 transition-colors ${
                  visibleSection === "projects" ? "text-teal-400" : ""
                }`}
              >
                Projects
              </a>
              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className={`hover:text-teal-400 transition-colors ${
                  visibleSection === "skills" ? "text-teal-400" : ""
                }`}
              >
                Skills
              </a>
              <a
                href="#education"
                onClick={() => setMenuOpen(false)}
                className={`hover:text-teal-400 transition-colors ${
                  visibleSection === "education" ? "text-teal-400" : ""
                }`}
              >
                Education
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className={`hover:text-teal-400 transition-colors ${
                  visibleSection === "contact" ? "text-teal-400" : ""
                }`}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-28 pb-20 md:pt-36 md:pb-32 flex items-center min-h-screen relative overflow-hidden"
      >
        {/* Dark themed background */}
        <div className="absolute inset-0 bg-gray-900">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-900/30 blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-blue-900/30 blur-3xl"></div>
            <div className="absolute top-2/3 left-1/2 w-64 h-64 rounded-full bg-teal-900/30 blur-3xl"></div>
            <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-indigo-900/30 blur-3xl"></div>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="text-center">
            <AnimatedSection delay={100}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 relative text-white">
                Sayantan Datta
                <div className="h-1 w-24 mt-4 mx-auto bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"></div>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative overflow-hidden mb-12 mx-auto w-full max-w-2xl p-6 rounded-xl bg-gradient-to-r from-gray-800/50 via-gray-800/70 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600"></div>
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-5">
                  <div className="text-9xl font-bold text-white">&lt;/&gt;</div>
                </div>
                <p className="text-xl md:text-2xl text-gray-300 font-light">
                  <span className="font-semibold text-white">
                    AI & Cloud Engineer
                  </span>{" "}
                  specializing in intelligent solutions with a focus on machine
                  learning, cloud architecture, and data-driven applications.
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-3">
                  <span className="px-3 py-1 text-sm bg-teal-900/50 text-teal-400 rounded-full">
                    Machine Learning
                  </span>
                  <span className="px-3 py-1 text-sm bg-blue-900/50 text-blue-400 rounded-full">
                    Cloud Architecture
                  </span>
                  <span className="px-3 py-1 text-sm bg-purple-900/50 text-purple-400 rounded-full">
                    Data Engineering
                  </span>
                  <span className="px-3 py-1 text-sm bg-indigo-900/50 text-indigo-400 rounded-full">
                    AI Solutions
                  </span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#projects"
                  className="px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 hover:shadow-lg bg-gradient-to-r from-teal-500 to-blue-600 text-white"
                >
                  <span className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View Projects
                  </span>
                </a>

                <a
                  href="/files/Sayantan Datta Resume.pdf"
                  download
                  className="px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 hover:shadow-lg bg-gray-700 text-white"
                >
                  <span className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Download Résumé
                  </span>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0 bg-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(58,134,198,0.15),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-16 text-center text-white">
            <span className="relative inline-block">
              About Me
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"></div>
            </span>
          </h2>

          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/3">
              <div className="relative mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-teal-400 to-purple-600 blur-md opacity-70"></div>
                <div className="relative rounded-full overflow-hidden mx-auto w-64 h-64 shadow-xl border-4 border-gray-800">
                  <img
                    src="/images/profile.jpg"
                    alt="Sayantan Datta"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-xl mb-6">
                <p className="text-lg text-gray-300">
                  I'm an{" "}
                  <span className="text-teal-400 font-semibold">
                    AWS-certified Software Engineer
                  </span>{" "}
                  with a Master's in Computer Science from Northeastern
                  University, specializing in AI/ML solutions. My expertise
                  spans across cloud-native applications, machine learning
                  models, and data-driven systems that solve real-world
                  problems.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-xl mb-6">
                <p className="text-lg text-gray-300">
                  With a background in{" "}
                  <span className="text-blue-400 font-semibold">
                    data science and analytics
                  </span>
                  , I bring a unique perspective to technical problem-solving
                  that's both business-oriented and technically robust.
                </p>
              </div>

              {/* Professional Interests */}
              <h3 className="text-xl font-semibold mb-6 text-white">
                Professional Interests
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-gray-800/70 shadow-lg backdrop-blur-sm border border-gray-700/50"
                  >
                    <h4 className="font-semibold text-teal-400">
                      {interest.title}
                    </h4>
                    <p className="text-sm text-gray-300">
                      {interest.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="absolute inset-0 bg-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-16 text-center text-white">
            <span className="relative inline-block">
              Work Experience
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"></div>
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-teal-400 to-purple-600"></div>

              {experiences.map((experience, index) => (
                <div key={index} className="mb-16 relative">
                  <div
                    className={`flex flex-col ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border-4 border-gray-800 bg-gray-900 z-10 shadow-lg relative">
                        <div className="absolute inset-2 rounded-full bg-gray-800 flex items-center justify-center text-white text-sm font-mono">
                          {experience.period.split(" ")[1]}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`md:w-5/12 mb-8 md:mb-0 ${
                        index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                      }`}
                    >
                      <div className="p-6 rounded-xl bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 shadow-xl h-full">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r"></div>

                        <div className="relative">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0 bg-gray-700 flex items-center justify-center">
                              <img
                                src={experience.logo}
                                alt={`${experience.company} logo`}
                                className="w-full h-full object-cover opacity-60"
                              />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white">
                                {experience.title}
                              </h3>
                              <div className="flex items-center text-sm text-gray-400">
                                <span>{experience.company}</span>
                              </div>
                            </div>
                          </div>

                          <div className="mt-2 text-sm text-gray-400">
                            {experience.period}
                          </div>

                          <ul className="mt-4 space-y-2">
                            {experience.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start">
                                <span className="inline-block w-5 h-5 mr-2 mt-1 rounded-full flex-shrink-0 bg-gray-700 flex items-center justify-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 w-3"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </span>
                                <span className="text-gray-300">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-6 pt-4 border-t border-gray-700">
                            <div className="flex flex-wrap gap-2">
                              <span className="px-2 py-1 text-xs rounded-full bg-gray-700 text-blue-400">
                                Python
                              </span>
                              <span className="px-2 py-1 text-xs rounded-full bg-gray-700 text-teal-400">
                                Data Analysis
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="md:w-5/12"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(96,165,250,0.1),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            <span className="relative inline-block">
              Projects
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"></div>
            </span>
          </h2>

          <p className="text-center mb-12 max-w-2xl mx-auto text-gray-300">
            A showcase of my technical projects, spanning AI, cloud computing,
            and data science.
          </p>

          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["All", "AI & ML", "Cloud", "Web"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md"
                    : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-lg overflow-hidden shadow-xl bg-gray-800/90 border border-gray-700/50"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div
                    className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${
                      project.category === "AI & ML"
                        ? "bg-purple-600 text-white"
                        : project.category === "Cloud"
                        ? "bg-blue-600 text-white"
                        : "bg-green-600 text-white"
                    }`}
                  >
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-teal-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description.length > 100
                      ? project.description.substring(0, 100) + "..."
                      : project.description}
                  </p>
                  <div className="flex flex-wrap mb-4 gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-3 py-1 rounded-full bg-gray-700 text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm px-4 py-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 text-white"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/sayantan6720"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-lg font-medium bg-gradient-to-r from-gray-700 to-gray-800 text-white border border-gray-700"
            >
              View More Projects on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="absolute inset-0 bg-gray-900">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-700 to-blue-900"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-16 text-center text-white">
            <span className="relative inline-block">
              Technical Expertise
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"></div>
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <div
                key={category.name}
                className="p-6 rounded-lg shadow-xl bg-gray-800/90 border border-gray-700/50"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-300"
                    >
                      <span className="text-gray-200">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="p-6 rounded-lg shadow-xl bg-gray-800/90 border border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-6">
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 rounded-lg bg-gray-700 hover:bg-gray-600"
                  >
                    <div className="ml-4">
                      <p className="font-medium text-white">{cert.name}</p>
                      <p className="text-sm text-gray-400">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative">
        <div className="absolute inset-0 bg-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(71,127,247,0.1),transparent_70%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-16 text-center text-white">
            <span className="relative inline-block">
              Education
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"></div>
            </span>
          </h2>

          <div className="max-w-4xl mx-auto grid gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="rounded-lg p-6 shadow-xl bg-gray-800/90 border border-gray-700/50"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-gray-300">{edu.institution}</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="inline-block px-3 py-1 rounded-full bg-gray-700 text-teal-400">
                      {edu.period}
                    </p>
                    <p className="text-sm mt-1 text-gray-400">{edu.location}</p>
                  </div>
                </div>
                <p className="mb-2">
                  <strong className="text-gray-200">GPA:</strong>{" "}
                  <span className="text-teal-400 font-semibold">
                    {edu.details.split(": ")[1]}
                  </span>
                </p>
                <div>
                  <p className="mb-1">
                    <strong className="text-gray-200">Key Courses:</strong>
                  </p>
                  <p className="text-gray-300">{edu.courses}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(45,212,191,0.1),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-16 text-center text-white">
            <span className="relative inline-block">
              Get In Touch
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"></div>
            </span>
          </h2>

          <div className="max-w-3xl mx-auto grid grid-cols-1 gap-8">
            <div className="p-8 rounded-xl bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 shadow-xl">
              <h3 className="text-2xl font-semibold mb-8 text-center text-white">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-gray-700 text-teal-400 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <a
                        href="mailto:sayantandatta275@gmail.com"
                        className="hover:underline text-teal-400 font-medium"
                      >
                        sayantandatta275@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-gray-700 text-blue-400 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <a
                        href="tel:+15714384947"
                        className="hover:underline text-blue-400 font-medium"
                      >
                        +1 (571) 438-4947
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-gray-700 text-purple-400 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2 9h4v12H2z"
                        />
                        <circle
                          cx="4"
                          cy="4"
                          r="2"
                          stroke="currentColor"
                          strokeWidth={2}
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/sayantan-datta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-purple-400 font-medium"
                      >
                        linkedin.com/in/sayantan-datta
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-gray-700 text-indigo-400 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">GitHub</p>
                      <a
                        href="https://github.com/sayantan6720"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-indigo-400 font-medium"
                      >
                        github.com/sayantan6720
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400 relative">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-center md:text-left">
                {" "}
                2025 Sayantan Datta. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/sayantan-datta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2 9h4v12H2z"
                  />
                  <circle
                    cx="4"
                    cy="4"
                    r="2"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  />
                </svg>
              </a>
              <a
                href="https://github.com/sayantan6720"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </a>
              <a
                href="mailto:sayantandatta275@gmail.com"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <a
        href="#hero"
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full shadow-lg flex items-center justify-center bg-gradient-to-r from-teal-500 to-blue-600 text-white z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </a>
    </div>
  );
};

export default Portfolio;
