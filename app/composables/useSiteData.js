export const useSiteData = () => {
  const navLinks = ['hero', 'tech', 'experience', 'education', 'portfolio', 'contact'];

  const techStack = [
    { group: 'frontend', items: [
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
      { name: 'Vuetify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuetify/vuetify-original.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
      { name: 'Materialize', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materializecss/materializecss-original.svg' },
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg' }
    ]},
    { group: 'backend', items: [
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
      { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
      { name: 'CodeIgniter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'MariaDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' }
    ]}
  ];
  const totalTechCount = techStack.reduce((acc, group) => acc + group.items.length, 0);

  const education = [
    {
      degree: 'Bachelor Degree in Informatics Engineering',
      school: 'Universitas Indraprasta PGRI (UNINDRA)',
      image: '/graduation.png',
      period: 'Graduated: 2025',
      highlight: 'Jakarta, Indonesia',
      description: 'Focused on software engineering practices, web architecture, and applied fullstack development.',
      year: '2025',
      isRecent: true
    },
    {
      degree: 'Software Engineering Vocational Program',
      school: 'Vocational High School Wikrama',
      image: '/graduation.png',
      period: 'Graduated: 2018',
      highlight: 'Bogor, Indonesia',
      description: 'Built strong foundations in programming, quality assurance, and project collaboration.',
      year: '2018'
    }
  ];

  const socials = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ragil-pratama-824351145/', icon: 'linkedin' },
    { name: 'GitHub', url: 'https://github.com/RagilPratama', icon: 'github' },
    { name: 'Instagram', url: 'https://www.instagram.com/rglprtm/', icon: 'instagram' },
    { name: 'Email', url: 'mailto:ragilpratamaaa@gmail.com', icon: 'email' }
  ];

  return { navLinks, techStack, totalTechCount, education, socials };
};
