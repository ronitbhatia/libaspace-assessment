import { Job } from '@libaspace/shared';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Web Application Developer',
    company: {
      name: 'JobNova',
      logo: '/logos/jobnova.png',
      location: 'New York, NY',
      size: '50-200 employees',
      description: 'JobNova is redefining job search with cutting-edge AI. We believe in empowering people to find work that truly matches their potential, not just their keywords. Our machine learning models analyze career trajectories, skill gaps, and market trends to guide job seekers toward their ideal roles.'
    },
    location: 'New York, NY',
    locationType: 'Remote',
    matchScore: 84,
    salary: {
      min: 80000,
      max: 120000,
      currency: 'USD'
    },
    tags: ['Full-time', 'Senior Level', 'Remote', 'JavaScript', 'React'],
    posted: '2 days ago',
    status: 'matched',
    overview: 'We are looking for a talented Web Application Developer to join our growing team. You\'ll be responsible for building and maintaining our core platform, working with modern web technologies, and collaborating with designers and product managers to create exceptional user experiences.',
    qualifications: [
      '5+ years of professional web development experience',
      'Strong proficiency in JavaScript/TypeScript, React, and modern web technologies',
      'Experience with HTML, CSS, Java, PHP, C++, or similar languages',
      'Bachelor\'s degree in Computer Science or equivalent practical experience',
      'Excellent problem-solving and debugging skills'
    ],
    required: [
      'Expert-level JavaScript and TypeScript skills',
      'Deep understanding of React and modern frontend architecture',
      'Experience with RESTful APIs and backend integration',
      'Proficiency with Git and version control',
      'Strong communication skills and ability to work in a team'
    ],
    preferred: [
      'Experience with Next.js or similar frameworks',
      'Knowledge of Node.js and backend development',
      'Familiarity with cloud platforms (AWS, GCP, Azure)',
      'Understanding of CI/CD pipelines and DevOps practices',
      'Open source contributions'
    ],
    responsibilities: [
      'Collaborate with cross-functional teams to define, design, and ship new features',
      'Build reusable code and libraries for future use',
      'Ensure the technical feasibility of UI/UX designs',
      'Optimize applications for maximum speed and scalability',
      'Participate in code reviews and mentor junior developers',
      'Stay up-to-date with emerging technologies and industry trends'
    ],
    benefits: [
      'Remote flexibility - work from anywhere in the US',
      'Competitive salary with equity options',
      'Comprehensive health, dental, and vision insurance',
      'Unlimited PTO policy',
      '401(k) matching program',
      'Professional development budget',
      'Latest tech equipment provided',
      'Quarterly team offsites'
    ]
  },
  {
    id: '2',
    title: 'Software Engineer, Network Infrastructure',
    company: {
      name: 'CloudScale',
      logo: '/logos/cloudscale.png',
      location: 'Sunnyvale, CA',
      size: '200-500 employees',
      description: 'CloudScale builds the infrastructure that powers the modern internet. Our distributed systems handle billions of requests daily, and we\'re looking for talented engineers to help us scale even further.'
    },
    location: 'Sunnyvale, CA',
    locationType: 'Hybrid',
    matchScore: 92,
    salary: {
      min: 150000,
      max: 220000,
      currency: 'USD'
    },
    tags: ['Full-time', 'Senior Level', 'Hybrid', 'Python', 'Infrastructure'],
    posted: '1 week ago',
    status: 'matched',
    overview: 'Join our Network Infrastructure team to build and maintain the systems that power our global network. You\'ll work on challenging distributed systems problems at massive scale.',
    qualifications: [
      '7+ years of experience in network engineering or infrastructure',
      'Strong understanding of TCP/IP, BGP, and network protocols',
      'Experience with distributed systems and high-availability architectures',
      'Proficiency in Python, Go, or similar systems programming languages',
      'BS/MS in Computer Science or related field'
    ],
    required: [
      'Deep knowledge of network protocols and infrastructure',
      'Experience with automation and infrastructure as code',
      'Strong debugging and troubleshooting skills',
      'Ability to work on-call rotation for production systems'
    ],
    preferred: [
      'Experience with Kubernetes and container networking',
      'Knowledge of SDN (Software Defined Networking)',
      'Familiarity with cloud networking (AWS VPC, GCP VPC)',
      'Contributions to open source networking projects'
    ],
    responsibilities: [
      'Design and implement scalable network infrastructure',
      'Automate network operations and deployment processes',
      'Monitor and optimize network performance',
      'Troubleshoot complex network issues',
      'Collaborate with SRE and platform teams',
      'Document architecture and operational procedures'
    ],
    benefits: [
      'Competitive compensation with equity',
      'Hybrid work model (3 days in office)',
      'Full health benefits coverage',
      'Unlimited PTO',
      'Learning and development budget',
      'Gym membership and wellness programs',
      'Catered meals and snacks',
      'Relocation assistance available'
    ]
  },
  {
    id: '3',
    title: 'Full-Stack Software Engineer (Web Developer)',
    company: {
      name: 'TechFlow',
      logo: '/logos/techflow.png',
      location: 'Austin, TX',
      size: '100-200 employees',
      description: 'TechFlow is revolutionizing workflow automation for modern teams. We build intuitive tools that help companies streamline their operations and boost productivity.'
    },
    location: 'Austin, TX',
    locationType: 'Remote',
    matchScore: 82,
    salary: {
      min: 120000,
      max: 160000,
      currency: 'USD'
    },
    tags: ['Full-time', 'Mid-Senior Level', 'Remote', 'TypeScript', 'Node.js'],
    posted: '3 days ago',
    status: 'matched',
    overview: 'We\'re seeking a Full-Stack Software Engineer to help build our next-generation workflow automation platform. You\'ll work across the entire stack, from React frontends to Node.js backends.',
    qualifications: [
      '4+ years of full-stack web development experience',
      'Strong proficiency in JavaScript/TypeScript',
      'Experience with React and Node.js',
      'Understanding of database design (SQL and NoSQL)',
      'Familiarity with RESTful API design'
    ],
    required: [
      'Expertise in modern JavaScript/TypeScript',
      'Experience building scalable web applications',
      'Proficiency with React and state management',
      'Backend development experience with Node.js/Express',
      'Understanding of web security best practices'
    ],
    preferred: [
      'Experience with Next.js',
      'Knowledge of GraphQL',
      'Familiarity with AWS or other cloud platforms',
      'Experience with Redis, PostgreSQL, or MongoDB',
      'Understanding of microservices architecture'
    ],
    responsibilities: [
      'Develop new features across the full stack',
      'Write clean, maintainable, and well-tested code',
      'Participate in system design and architecture decisions',
      'Debug and resolve production issues',
      'Mentor junior engineers',
      'Contribute to technical documentation'
    ],
    benefits: [
      'Fully remote position',
      'Competitive salary + equity',
      'Health, dental, and vision insurance',
      'Flexible work hours',
      'Home office stipend',
      'Annual company retreat',
      '20 days PTO + holidays',
      'Professional development opportunities'
    ]
  },
  {
    id: '4',
    title: 'Senior Frontend Engineer',
    company: {
      name: 'DesignFirst',
      logo: '/logos/designfirst.png',
      location: 'San Francisco, CA',
      size: '50-100 employees',
      description: 'DesignFirst creates beautiful, user-centric applications that people love to use. We prioritize design quality and user experience in everything we build.'
    },
    location: 'San Francisco, CA',
    locationType: 'Hybrid',
    matchScore: 78,
    salary: {
      min: 140000,
      max: 180000,
      currency: 'USD'
    },
    tags: ['Full-time', 'Senior Level', 'Hybrid', 'React', 'TypeScript'],
    posted: '5 days ago',
    status: 'liked',
    overview: 'Join our design-focused engineering team to build pixel-perfect, performant user interfaces. You\'ll work closely with designers to bring creative visions to life.',
    qualifications: [
      '6+ years of frontend development experience',
      'Expert-level React and TypeScript skills',
      'Strong understanding of CSS and modern styling approaches',
      'Experience with design systems and component libraries',
      'Portfolio demonstrating UI/UX expertise'
    ],
    required: [
      'Deep expertise in React and modern frontend frameworks',
      'Mastery of HTML, CSS, and JavaScript',
      'Experience with responsive and adaptive design',
      'Understanding of web performance optimization',
      'Strong attention to visual details'
    ],
    preferred: [
      'Experience with animation libraries (Framer Motion, GSAP)',
      'Knowledge of accessibility standards (WCAG)',
      'Familiarity with design tools (Figma, Sketch)',
      'Experience with Three.js or other WebGL libraries',
      'Contributions to open source UI libraries'
    ],
    responsibilities: [
      'Build beautiful, performant user interfaces',
      'Collaborate closely with design team',
      'Maintain and evolve design system',
      'Optimize frontend performance',
      'Ensure cross-browser compatibility',
      'Write comprehensive tests for UI components'
    ],
    benefits: [
      'Hybrid work (2 days in SF office)',
      'Competitive salary + stock options',
      'Comprehensive health benefits',
      'Unlimited PTO',
      'Latest MacBook Pro + accessories',
      'Design conference budget',
      'Team lunches and events',
      'Commuter benefits'
    ]
  },
  {
    id: '5',
    title: 'Backend Engineer - Python',
    company: {
      name: 'DataCore',
      logo: '/logos/datacore.png',
      location: 'Seattle, WA',
      size: '500-1000 employees',
      description: 'DataCore provides enterprise data infrastructure solutions. Our platform processes petabytes of data daily for Fortune 500 companies.'
    },
    location: 'Seattle, WA',
    locationType: 'On-site',
    matchScore: 71,
    salary: {
      min: 130000,
      max: 170000,
      currency: 'USD'
    },
    tags: ['Full-time', 'Mid Level', 'On-site', 'Python', 'Data'],
    posted: '1 week ago',
    status: 'matched',
    overview: 'We\'re looking for a Backend Engineer to join our data processing team. You\'ll build and maintain high-throughput data pipelines and APIs.',
    qualifications: [
      '4+ years of backend development experience',
      'Strong Python programming skills',
      'Experience with data processing frameworks',
      'Understanding of database systems and optimization',
      'Experience with cloud platforms (AWS preferred)'
    ],
    required: [
      'Expertise in Python and backend frameworks (Django, Flask, FastAPI)',
      'Experience with SQL and database optimization',
      'Understanding of distributed systems',
      'Knowledge of API design and best practices',
      'Experience with testing and CI/CD'
    ],
    preferred: [
      'Experience with Apache Spark or similar',
      'Knowledge of data streaming (Kafka, Kinesis)',
      'Familiarity with containerization (Docker, Kubernetes)',
      'Experience with monitoring and observability tools',
      'Background in data engineering'
    ],
    responsibilities: [
      'Design and implement scalable backend services',
      'Build and maintain data processing pipelines',
      'Optimize database queries and data models',
      'Collaborate with data science and ML teams',
      'Monitor and improve system performance',
      'Participate in on-call rotation'
    ],
    benefits: [
      'Competitive compensation package',
      'Full benefits (health, dental, vision)',
      '401(k) with company match',
      '4 weeks PTO',
      'Professional development budget',
      'On-site gym and cafeteria',
      'Transit pass',
      'Annual bonus program'
    ]
  },
  {
    id: '6',
    title: 'DevOps Engineer',
    company: {
      name: 'CloudOps Pro',
      logo: '/logos/cloudops.png',
      location: 'Remote',
      size: '200-500 employees',
      description: 'CloudOps Pro helps companies manage their cloud infrastructure at scale. We provide tools and consulting for modern DevOps practices.'
    },
    location: 'Remote',
    locationType: 'Remote',
    matchScore: 88,
    salary: {
      min: 120000,
      max: 160000,
      currency: 'USD'
    },
    tags: ['Full-time', 'Senior Level', 'Remote', 'AWS', 'Kubernetes'],
    posted: '4 days ago',
    status: 'applied',
    overview: 'Join our DevOps team to help build and maintain infrastructure automation tools. You\'ll work with cutting-edge cloud technologies and help our clients optimize their operations.',
    qualifications: [
      '5+ years of DevOps or infrastructure experience',
      'Strong experience with AWS (or GCP/Azure)',
      'Expertise in Kubernetes and container orchestration',
      'Proficiency in Infrastructure as Code (Terraform, CloudFormation)',
      'Experience with CI/CD pipelines'
    ],
    required: [
      'Deep knowledge of cloud platforms and services',
      'Experience with configuration management tools',
      'Strong scripting skills (Python, Bash, Go)',
      'Understanding of networking and security',
      'Experience with monitoring and logging systems'
    ],
    preferred: [
      'Kubernetes certification (CKA or CKAD)',
      'Experience with GitOps (ArgoCD, Flux)',
      'Knowledge of service mesh (Istio, Linkerd)',
      'Familiarity with chaos engineering',
      'Experience with FinOps and cost optimization'
    ],
    responsibilities: [
      'Design and implement cloud infrastructure',
      'Automate deployment and operations',
      'Build and maintain CI/CD pipelines',
      'Monitor system health and performance',
      'Implement security best practices',
      'Support development teams with infrastructure needs'
    ],
    benefits: [
      'Fully remote (US-based)',
      'Competitive salary + equity',
      'Premium health insurance',
      'Flexible work schedule',
      'Home office budget',
      'Cloud certification sponsorship',
      'Unlimited PTO',
      'Annual team meetups'
    ]
  }
];

export function getJobById(id: string): Job | undefined {
  return mockJobs.find(job => job.id === id);
}

export function getJobsByStatus(status: string): Job[] {
  return mockJobs.filter(job => job.status === status);
}

export function getAllJobs(): Job[] {
  return mockJobs;
}

