export interface findMentor{
    fullName: string,
    firstName: string,
    lastName: string,
    location: string,
    language?: string[],
    joined: string,
    availability:boolean,
    aboutSelf:string
    profession:string,
    experience:string[],
    picture: string
    id:number
    


};

export const applyForMentorship: findMentor[] = [
  {
    id: 1,
    fullName: 'Joshua Jatto',
    firstName: 'Joshua',
    lastName: 'Jatto',
    location: 'Plateau',
    language: ['English', 'Hausa'],
    joined: new Date(2023, 6, 21, 14, 30).toLocaleString(),
    availability: false,
    aboutSelf: 'Stuck with chem? Ask me anything.',
    profession: 'ChemCoach Developer',
    experience: ['Teaching', 'Lab technician', 'ED-XRF instructor'],
    picture: 'https://via.placeholder.com/150/0000FF/808080?text=Joshua+Jatto'
  },
  {
    id: 2,
    fullName: 'Maryam Bello',
    firstName: 'Maryam',
    lastName: 'Bello',
    location: 'Kano',
    language: ['English', 'Hausa'],
    joined: new Date(2023, 5, 12, 10, 45).toLocaleString(),
    availability: true,
    aboutSelf: 'Passionate about chemistry education.',
    profession: 'Chemistry Tutor',
    experience: ['Teaching', 'Curriculum Designer'],
    picture: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Maryam+Bello'
  },
  {
    id: 3,
    fullName: 'Aliyu Mohammed',
    firstName: 'Aliyu',
    lastName: 'Mohammed',
    location: 'Kaduna',
    language: ['English', 'Hausa', 'Arabic'],
    joined: new Date(2023, 7, 19, 9, 15).toLocaleString(),
    availability: false,
    aboutSelf: 'Chemistry made easy!',
    profession: 'Lab Analyst',
    experience: ['Lab technician', 'Field Researcher'],
    picture: 'https://via.placeholder.com/150/00FF00/000000?text=Aliyu+Mohammed'
  },
  {
    id: 4,
    fullName: 'Esther Ibrahim',
    firstName: 'Esther',
    lastName: 'Ibrahim',
    location: 'Lagos',
    language: ['English', 'Yoruba'],
    joined: new Date(2023, 4, 25, 16, 50).toLocaleString(),
    availability: true,
    aboutSelf: 'Helping students achieve their best.',
    profession: 'Chemistry Educator',
    experience: ['Teaching', 'Exam Prep Specialist'],
    picture: 'https://via.placeholder.com/150/FFFF00/000000?text=Esther+Ibrahim'
  },
  {
    id: 5,
    fullName: 'Oluwaseun Adeyemi',
    firstName: 'Oluwaseun',
    lastName: 'Adeyemi',
    location: 'Ogun',
    language: ['English', 'Yoruba'],
    joined: new Date(2023, 8, 1, 12, 20).toLocaleString(),
    availability: false,
    aboutSelf: 'Dedicated to innovative teaching.',
    profession: 'Chemistry Instructor',
    experience: ['Teaching', 'Online Course Developer'],
    picture: 'https://via.placeholder.com/150/FFA500/000000?text=Oluwaseun+Adeyemi'
  },
  {
    id: 6,
    fullName: 'Fatima Sani',
    firstName: 'Fatima',
    lastName: 'Sani',
    location: 'Abuja',
    language: ['English', 'Hausa', 'French'],
    joined: new Date(2023, 3, 30, 11, 10).toLocaleString(),
    availability: true,
    aboutSelf: 'Chemistry is fun, let\'s learn together!',
    profession: 'Science Communicator',
    experience: ['Teaching', 'Science Writer'],
    picture: 'https://via.placeholder.com/150/000080/FFFFFF?text=Fatima+Sani'
  },
  {
    id: 7,
    fullName: 'Emeka Okafor',
    firstName: 'Emeka',
    lastName: 'Okafor',
    location: 'Enugu',
    language: ['English', 'Igbo'],
    joined: new Date(2023, 6, 5, 15, 35).toLocaleString(),
    availability: false,
    aboutSelf: 'Bridging gaps in chemistry understanding.',
    profession: 'Educational Consultant',
    experience: ['Teaching', 'Educational Content Creator'],
    picture: 'https://via.placeholder.com/150/800080/FFFFFF?text=Emeka+Okafor'
  },
  {
    id: 8,
    fullName: 'Chinwe Uche',
    firstName: 'Chinwe',
    lastName: 'Uche',
    location: 'Anambra',
    language: ['English', 'Igbo'],
    joined: new Date(2023, 7, 14, 9, 0).toLocaleString(),
    availability: true,
    aboutSelf: 'Passionate about student success.',
    profession: 'Chemistry Lecturer',
    experience: ['Teaching', 'Lab Manager'],
    picture: 'https://via.placeholder.com/150/008000/FFFFFF?text=Chinwe+Uche'
  },
  {
    id: 9,
    fullName: 'Ibrahim Abubakar',
    firstName: 'Ibrahim',
    lastName: 'Abubakar',
    location: 'Katsina',
    language: ['English', 'Hausa', 'Arabic'],
    joined: new Date(2023, 2, 28, 13, 25).toLocaleString(),
    availability: false,
    aboutSelf: 'Chemistry concepts simplified.',
    profession: 'Research Scientist',
    experience: ['Teaching', 'Research Assistant'],
    picture: 'https://via.placeholder.com/150/FF6347/FFFFFF?text=Ibrahim+Abubakar'
  },
  {
    id: 10,
    fullName: 'Aisha Yusuf',
    firstName: 'Aisha',
    lastName: 'Yusuf',
    location: 'Sokoto',
    language: ['English', 'Hausa'],
    joined: new Date(2023, 5, 21, 17, 40).toLocaleString(),
    availability: true,
    aboutSelf: 'Dedicated to making chemistry accessible.',
    profession: 'Chemistry Coach',
    experience: ['Teaching', 'Laboratory Technician'],
    picture: 'https://via.placeholder.com/150/4682B4/FFFFFF?text=Aisha+Yusuf'
  },
  {
    id: 11,
    fullName: 'David Olatunji',
    firstName: 'David',
    lastName: 'Olatunji',
    location: 'Ekiti',
    language: ['English', 'Yoruba'],
    joined: new Date(2023, 8, 12, 14, 15).toLocaleString(),
    availability: false,
    aboutSelf: 'I love mentoring aspiring chemists.',
    profession: 'Chemistry Mentor',
    experience: ['Teaching', 'Online Tutor'],
    picture: 'https://via.placeholder.com/150/DAA520/000000?text=David+Olatunji'
  },
  {
    id: 12,
    fullName: 'Ngozi Eze',
    firstName: 'Ngozi',
    lastName: 'Eze',
    location: 'Imo',
    language: ['English', 'Igbo'],
    joined: new Date(2023, 4, 3, 10, 5).toLocaleString(),
    availability: true,
    aboutSelf: 'Chemistry is the language of the universe!',
    profession: 'Science Educator',
    experience: ['Teaching', 'Lab Instructor'],
    picture: 'https://via.placeholder.com/150/9ACD32/000000?text=Ngozi+Eze'
  },
  {
    id: 13,
    fullName: 'Blessing Nwachukwu',
    firstName: 'Blessing',
    lastName: 'Nwachukwu',
    location: 'Abia',
    language: ['English', 'Igbo'],
    joined: new Date(2023, 3, 18, 9, 30).toLocaleString(),
    availability: false,
    aboutSelf: 'Let’s explore the wonders of chemistry together.',
    profession: 'Chemistry Tutor',
    experience: ['Teaching', 'Researcher'],
    picture: 'https://via.placeholder.com/150/8B0000/FFFFFF?text=Blessing+Nwachukwu'
  },
  {
    id: 14,
    fullName: 'Samuel Adeniyi',
    firstName: 'Samuel',
    lastName: 'Adeniyi',
    location: 'Ondo',
    language: ['English', 'Yoruba'],
    joined: new Date(2023, 6, 9, 13, 55).toLocaleString(),
    availability: true,
    aboutSelf: 'I make chemistry engaging and fun!',
    profession: 'Educational Trainer',
    experience: ['Teaching', 'Professional Development Coach'],
    picture: 'https://via.placeholder.com/150/FFD700/000000?text=Samuel+Adeniyi'
  }
]

  
  