// src/config/config.ts

export const getAsset = (path: string) => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${cleanPath}`;
};

const siteConfig = {
  /* =========================
     PERSONAL INFORMATION
     ========================= */
  personal: {
    name: 'Geethanjali S Pillai',
    title: 'Economics Student',
    image: getAsset('images/profile.png'),
    description:
      'Geethanjali S Pillai is an undergraduate student of Economics with a strong academic interest in finance, data analysis, and applied economic research.\n\n' +
      'Her areas of interest include microeconomics, macroeconomic policy, financial markets, and quantitative methods in economics. She is keen on understanding real-world economic issues through analytical and data-driven approaches.\n\n' +
      'Geethanjali is actively developing skills in statistics, Excel, and Python to complement her economics background. She aspires to pursue higher studies and research in economics and related interdisciplinary fields.',
    tagline: 'Understanding the economy through analysis and data.',
    location: 'India',
  },

  /* =========================
     SEO
     ========================= */
  seo: {
    title: 'Geethanjali S Pillai - Economics Student',
    description:
      'Official website of Geethanjali S Pillai, an economics student showcasing her education, academic interests, projects, and learning journey.',
  },

  /* =========================
     HERO ANIMATED TEXT
     ========================= */
  animatedText: [
    'Economics Student',
    'Finance Enthusiast',
    'Data Analysis Learner',
    'Research Aspirant',
  ],

  /* =========================
     NAVIGATION
     ========================= */
  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Education', url: '/education' },
    { name: 'Projects', url: '/projects' },
    { name: 'Experience', url: '/experience' },
    { name: 'Blogs', url: '/blogs' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
  ],

  /* =========================
     BLOGS (STATIC)
     ========================= */
  blogs: [
    {
      title: 'Project Management Basics',
      url: getAsset('static_page/project_management_blog.html'),
    },
  ],

  /* =========================
     EDUCATION
     ========================= */
  education: [
    {
      institution: 'Your University Name',
      degree: 'Bachelor of Arts (BA) – Economics',
      year: '2023 – Present',
      image: getAsset('images/education/university.png'),
      description: [
        'Core coursework in microeconomics and macroeconomics',
        'Introduction to statistics and econometrics',
        'Academic exposure to financial systems and economic policy',
      ],
    },
  ],

  /* =========================
     CERTIFICATIONS
     ========================= */
  certifications: [
    {
      title: 'Business Metrics for Data-Driven Companies (Duke University)',
      file: getAsset('images/education/Certifications/duke_business_metrics.pdf'),
    },
    {
      title: 'Mastering Data Analysis in Excel (Duke University)',
      file: getAsset('images/education/Certifications/duke_excel.pdf'),
    },
    {
      title: 'Introduction to Data Science in Python (University of Michigan)',
      file: getAsset('images/education/Certifications/michigan_data_science.pdf'),
    },
    {
      title: 'SQL Fundamentals (SoloLearn)',
      file: getAsset('images/education/Certifications/sololearn_sql.jpg'),
    },
  ],

  /* =========================
     EXPERIENCE
     ========================= */
  experience: [
    {
      title: 'Student Researcher',
      cardImage: getAsset('images/experience/student.png'),
      place: 'Department of Economics',
      time: '2024 – Present',
      desp: [
        'Completed academic projects related to economics and finance',
        'Performed basic data analysis using Excel and Python',
        'Prepared reports and presentations for coursework',
      ],
    },
  ],

  /* =========================
     PROJECTS
     ========================= */
  projects: [
    {
      title: 'Economic Indicators Analysis',
      cardImage: getAsset('images/project/economic_analysis.png'),
      description:
        'A data analysis project studying trends in GDP growth, inflation, and unemployment using publicly available datasets.',
      githubLink: 'https://github.com/your-username/economic-indicators-analysis',
    },
    {
      title: 'Household Budget & Inflation Study',
      cardImage: getAsset('images/project/inflation_study.png'),
      description:
        'A small study analyzing how inflation impacts household consumption patterns using Excel-based analysis.',
      githubLink: 'https://github.com/your-username/inflation-study',
    },
  ],

  /* =========================
     RESEARCH INTERESTS
     ========================= */
  research: [
    {
      title: 'Undergraduate Research Interests in Economics',
      authors: 'Geethanjali S Pillai',
      conferences: '—',
      researchYr: 2025,
      image: getAsset('images/research/economics.png'),
      abstract:
        'Interested in applied economics, financial markets, public policy, and data-driven economic analysis. Aspires to engage in formal academic research during postgraduate studies.',
    },
  ],

  /* =========================
     BOOKS / INSPIRATION
     ========================= */
  books: [
    {
      title: 'Freakonomics',
      description:
        'A popular economics book that sparked my interest in applying economic thinking to everyday problems.',
      image: getAsset('images/books/freakonomics.png'),
      link: '#',
    },
  ],

  /* =========================
     CONTACT
     ========================= */
  contact: {
    email: 'your-email@gmail.com',
    linkedin: 'https://www.linkedin.com/in/geethanjali-s-pillai/',
    github: 'https://github.com/your-username',
  },
};

export default siteConfig;
