export const CONFIG = {
  name: 'Windows NT',
  nickname: 'Server',
  surname: 'User',
  title: 'Systems Administrator',
  email: 'admin@localhost',
  linkedin: 'https://linkedin.com',
  cvPath: '/cv.pdf',
  experience: [
    {
      role: 'Your Role',
      company: 'Your Company',
      years: '20XX - Present',
      bullets: [
        'Run "npm run setup" with your Europass CV in public/cv.pdf to populate this data automatically.',
        'You can also edit this file (src/config.js) manually to fine-tune your details.'
      ]
    }
  ],
  skills: [
    'Windows NT Server',
    'Active Directory',
    'TCP/IP Networking',
    'React & Vite'
  ],
  certifications: [
    { name: 'NT Server Certified', issuer: 'Microsoft', year: '1996', link: '#' }
  ],
  education: 'University of Retro Systems',
  languages: ['English: Native', 'Spanish: Fluent']
};
