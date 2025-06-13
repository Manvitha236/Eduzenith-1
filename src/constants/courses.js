export const COURSES = [
  {
    id: 'CSE',
    name: 'Computer Science Engineering',
    description: 'Explore the world of computer science, including programming, data structures, algorithms, and cutting-edge technologies like AI and machine learning.',
    icon: '💻'
  },
  {
    id: 'ECE',
    name: 'Electronics and Communication Engineering',
    description: 'Learn about digital circuits, microprocessors, signal processing, communication systems, and modern wireless technologies.',
    icon: '📡'
  },
  {
    id: 'EEE',
    name: 'Electrical and Electronics Engineering',
    description: 'Understand electrical circuits, control systems, power electronics, renewable energy, and smart grid technologies.',
    icon: '⚡'
  },
  {
    id: 'CE',
    name: 'Civil Engineering',
    description: 'Study structural analysis, construction management, geotechnical engineering, transportation systems, and sustainable infrastructure.',
    icon: '🏗️'
  },
  {
    id: 'ME',
    name: 'Mechanical Engineering',
    description: 'Learn about thermodynamics, fluid mechanics, heat transfer, machine design, and advanced manufacturing technologies.',
    icon: '⚙️'
  },
];

export const COURSE_INFO = {
  CSE: {
    name: 'Computer Science Engineering',
    description: 'Dive deep into the world of computing, programming, and software development. Learn cutting-edge technologies including AI, machine learning, data structures, algorithms, and modern web development.',
    icon: '💻',
    color: 'primary',
    highlights: ['Programming Languages', 'Data Structures & Algorithms', 'Machine Learning', 'Web Development', 'Database Systems'],
    duration: '4 Years',
    totalSubjects: '25+',
    careerPaths: ['Software Engineer', 'Data Scientist', 'AI/ML Engineer', 'Full Stack Developer']
  },
  ECE: {
    name: 'Electronics and Communication Engineering',
    description: 'Explore the fascinating world of electronics, communication systems, and signal processing. Master digital circuits, microprocessors, wireless technologies, and modern communication protocols.',
    icon: '📡',
    color: 'accent',
    highlights: ['Digital Circuits', 'Signal Processing', 'Communication Systems', 'Microprocessors', 'Wireless Technology'],
    duration: '4 Years',
    totalSubjects: '22+',
    careerPaths: ['Electronics Engineer', 'Communication Engineer', 'RF Engineer', 'Embedded Systems Developer']
  },
  EEE: {
    name: 'Electrical and Electronics Engineering',
    description: 'Master the principles of electrical systems, power electronics, control systems, and renewable energy technologies. Build expertise in both electrical and electronic systems.',
    icon: '⚡',
    color: 'warning',
    highlights: ['Power Systems', 'Control Systems', 'Power Electronics', 'Renewable Energy', 'Electric Machines'],
    duration: '4 Years',
    totalSubjects: '20+',
    careerPaths: ['Electrical Engineer', 'Power Systems Engineer', 'Control Systems Engineer', 'Renewable Energy Specialist']
  },
  CE: {
    name: 'Civil Engineering',
    description: 'Learn to design, build, and maintain the infrastructure that shapes our world. Study structural analysis, construction management, transportation systems, and sustainable development.',
    icon: '🏗️',
    color: 'success',
    highlights: ['Structural Analysis', 'Construction Management', 'Transportation Engineering', 'Geotechnical Engineering', 'Environmental Engineering'],
    duration: '4 Years',
    totalSubjects: '18+',
    careerPaths: ['Structural Engineer', 'Construction Manager', 'Transportation Engineer', 'Environmental Engineer']
  },
  ME: {
    name: 'Mechanical Engineering',
    description: 'Explore the principles of mechanics, thermodynamics, and manufacturing. Design and analyze mechanical systems, from tiny components to large industrial machinery.',
    icon: '⚙️',
    color: 'secondary',
    highlights: ['Thermodynamics', 'Fluid Mechanics', 'Machine Design', 'Manufacturing Processes', 'Heat Transfer'],
    duration: '4 Years',
    totalSubjects: '19+',
    careerPaths: ['Mechanical Engineer', 'Design Engineer', 'Manufacturing Engineer', 'Automotive Engineer']
  }
};

export const COURSE_STATS = {
  CSE: { students: '2.5k+', subjects: 25, duration: '4 years', rating: 4.8 },
  ECE: { students: '2.1k+', subjects: 22, duration: '4 years', rating: 4.7 },
  EEE: { students: '1.8k+', subjects: 20, duration: '4 years', rating: 4.6 },
  CE: { students: '1.5k+', subjects: 18, duration: '4 years', rating: 4.5 },
  ME: { students: '1.7k+', subjects: 19, duration: '4 years', rating: 4.7 }
};

export const COURSE_COLORS = {
  CSE: 'primary',
  ECE: 'accent',
  EEE: 'warning',
  CE: 'success',
  ME: 'secondary'
};