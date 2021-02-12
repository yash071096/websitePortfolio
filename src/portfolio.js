/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Yash Thakare',
  title: "Hi all, I'm Yash",
  subTitle: emoji(
    'A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks. I am actively looking for a new grad / entry level Software Developer role and I am open to relocation.'
  ),
  resumeLink:
    'https://drive.google.com/file/d/1NYqM6Ug46NugQRaBEIwHQ5GcIbQ7b2o6/view?usp=sharing',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/yash071096',
  linkedin: 'https://www.linkedin.com/in/yash0710/',
  gmail: 'yash071096@gmail.com',
  gitlab: 'https://gitlab.com/yash071096',
  facebook: 'https://www.facebook.com/saad.pasta7',
  medium: 'https://medium.com/@saadpasta',
  stackoverflow: 'https://stackoverflow.com/users/10422806/saad-pasta',
  instagram: 'https://www.instagram.com/___khanabadosh____/',
  twitter: 'https://twitter.com/yash071096',
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: 'A FULL STACK DEVELOPER WHO WANTS TO EXPLORE NEW TECH STACK',
  skills: [
    emoji(
      '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications'
    ),
    emoji('⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks'),
    emoji('⚡ Develop IoT Applications and IoT-PoC'),
    emoji('⚡ Developed & deployed dashboards, visualizations, autonomous & dynamic reporting interfaces using Tableau and MicroStrategy'),
    emoji(
      '⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean'
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'sass',
      fontAwesomeClassname: 'fab fa-sass',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      skillName: 'swift',
      fontAwesomeClassname: 'fab fa-swift',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'aws',
      fontAwesomeClassname: 'fab fa-aws',
    },
    {
      skillName: 'firebase',
      fontAwesomeClassname: 'fas fa-fire',
    },
    {
      skillName: 'python',
      fontAwesomeClassname: 'fab fa-python',
    },
    {
      skillName: 'docker',
      fontAwesomeClassname: 'fab fa-docker',
    },
    {
      skillName: 'Azure',
      fontAwesomeClassname: 'fab fa-azure',
    },
    {
      skillName: 'C++',
      fontAwesomeClassname: 'fab fa-cpp',
    },
    {
      skillName: 'Java',
      fontAwesomeClassname: 'fab fa-azure',
    },
    {
      skillName: 'Tableau',
      fontAwesomeClassname: 'fab fa-cpp',
    },
    {
      skillName: 'Azure',
      fontAwesomeClassname: 'fab fa-azure',
    },
    {
      skillName: 'MicroStrategy',
      fontAwesomeClassname: 'fab fa-cpp',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'The University of Texas at Dallas',
      logo: require('./assets/images/utdimg.png'),
      subHeader: 'Master of Science in Computer Science',
      duration: 'August 2019 - May 2021',
      desc: 'GPA: 3.71/4.0 | Took courses about Design and Analysis of Algorithms, Machine Learning, Artificial Intelligence, Database Design, Data and Application Security',
      descBullets: [
        'Computer Science Outreach Instructor',
        'Arduino Tutor (Arduino Uno, Megaboard, Raspberry Pi)',
        'Interacted with students & helped them in getting hands-on experience with C, C++ & Arduino programming, held 50+ office hours to help students with concepts & projects',
        'Evaluated students’ performance, provided feedback & guidance in course development for 20 students',
      ],
    },
    {
      schoolName: 'Yeshwantrao Chavan College of Engineering',
      logo: require('./assets/images/ycceimg.jpg'),
      subHeader: 'Bachelor of Science in Computer Technology',
      duration: 'July 2015 - May 2019',
      desc:
        'Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, Business Intelligence, Computer Architecture and Organization, Neural Network and Fuzzy Logic, Theory of Computation.',
      descBullets: ['An active member of ACM student chapter | Head of the tech-fest | IOT team lead | Photography head'],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '70%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '70%',
    },
    {
      Stack: 'Programming (DSA)',
      progressPercentage: '80%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Software Developer Intern',
      company: 'Radiant Digital',
      companylogo: require('./assets/images/radiantimg.png'),
      date: 'May 2020 – August 2020',
      desc:
        'Team: Emerging Technologies | Project: Real Time Location System for BLE Asset Tracking | Tech Stack: [Node.js, Microsoft Azure, Cucumber.js, Javascript, Typescript, Raspberry Pi 4, Bluetooth 5.X, Docker]',
      descBullets: [
        ' Developed secure, scalable, & a portable Real Time Location System (RTLS) full stack application using MERN stack for BLE asset tracking, which enhanced security, lowered equipment waste & increased efficiency by 27%',
        ' Set up Bluetooth & Wi-Fi mesh for raspberry pi to improve coverage, speed up the network & eliminate dead zones.',
        ' Implemented TCP/IP, MQTT protocol to establish lossless, bidirectional connection between the cloud & IoT devices to monitor devices',
        ' Hosted the services on Microsoft Azure to increase the availability & scalability by 50% & provided support for DevOps CI/CD activities in GitLab',
        ' Created test cases using unit testing framework, Junit & Cucumber with 70% code coverage as a part of TDD;',
        ' Produced comprehensive, usable software documentation;',
      ],
    },
    {
      role: 'Software Engineer Intern',
      company: 'InfoCepts',
      companylogo: require('./assets/images/InfoCeptsimg.png'),
      date: 'May 2017 – May 2018',
      desc:
        'Project: Dashboard Development | Tech Stack: [MicroStrategy, Tableau, MS SQL, MS Excel]',
      descBullets: [
        ' Developed & deployed dashboards, visualizations, autonomous & dynamic reporting interfaces to be distributed to stakeholders via the BI reporting platform (Tableau & MicroStrategy) which increased the revenue by 4%',
        ' Worked with the Data Engineering team to provide input on logical & physical database design, data modelling & mapping',
        ' Analyzed facts & dimensions for data analysis & design. Created KPIs for reporting of scorecards & performance management',
        ' Designed & deployed ETL solutions, imported data from OLTP, cleansed it, inserted it into MS SQL & wrote complex SQL queries',
        'Developed dashboards which provides analysis of seven major diseases for all Indian states over a span of 6 years, for the end user (Medical Experts) to analyze the different factors related to the mortality rate',
        'This helped the experts to determine the states and the age group which were severely affected by these diseases',
      ],
    },
    {
      role: 'Software Engineer Intern',
      company: 'KICIT',
      companylogo: require('./assets/images/kicit.png'),
      date: 'Jan 2015 – Sep 2015',
      desc:
        'Project: Smart Farming Using IOT | Tech Stack: [Arduino, ThingSpeak, Android Studio]',
      descBullets: [
        'The soil moisture sensor monitors the soil moisture continuously and as soon as the moisture goes below the calculated threshold, it triggers an alarm, puts on the LED, displays a suitable message on the LCD and notifies the farmer via a text message about the field condition and puts on the water pump to water the field.',  
        'This reduced the water wastage by 35%',
        
        
        '-Project: Office Automation | Tech Stack: [Arduino, ThingSpeak]',
        'Developed an office automation system that could remotely control the appliances using an android application.',
        'This reduced the electricity wastage by 40%',
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'yash071096', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/saayaHealthLogo.webp'),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: 'Visit Website',
          url:
            '',
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require('./assets/images/nextuLogo.webp'),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: 'Visit Website',
          url:
            '',
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: 'Letter of Appreciation',
      subtitle:
        'Lead IoT workshops for 100+ students & faculties during my B.Tech, also lead the Tech-fest of the department',
      image: require('./assets/images/appre.png'),
      footerLink: [
        {
          name: 'Appreciation Letter',
          url:
            'https://drive.google.com/file/d/1MixsPUDeFE17PFhnUCmt1O1icwCM-R_X/view?usp=sharing',
        },
      ],
    },
    {
      title: 'Letter of Recommendation',
      subtitle:
        'Recommendation Letter By Prof. Timothy Culver (Software Defined Network)',
      image: require('./assets/images/recom.png'),
      footerLink: [
        {
          name: 'Recommendation Letter',
          url:
            'https://drive.google.com/file/d/1h4OAeHYJh0ocdSRtj4sV9qI4pvJZTcI3/view?usp=sharing',
        },
      ],
    },

    {
      title: 'Scholarly Paper',
      subtitle: 
        'My scholarly paper on “Comparative Analysis of Two BI Tools: MicroStrategy & Tableau” ',
      subtitle: 'Completed Certifcation from SMIT for PWA Web App Development',
      image: require('./assets/images/scola.jpg'),
      footerLink: [
        {
          name: 'Scholarly Paper',
          url: 'http://ssrn.com/abstract=3462539',
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Other Projects & Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write.',

  blogs: [
    {
      url:
        'https://github.com/yash071096/Stock-Exchange-Web-App',
      title: 'Stock Trading Web Application',
      description:
        '• Developed & deployed a scalable three-layered real time stock trading web application using MERN stack • Designed backend RESTful APIs for stocks trading, user profile management, and bank transactions • Made asynchronous AJAX calls to Stock brokerage Web Service for receiving data which is then processed & displayed on the dashboard • Performed request/response compression using gzip, implemented caching via Memcached for high performance',
    },
    {
      url:
        'https://github.com/yash071096/Library-Management-System',
      title: 'Library Management System',
      description:
        '• Implemented a web-based interface using Java Spring MVC for library management system, which manages user authentication, cataloging, search, circulation, waiting list & testing assistance which allowed the end user to have a real library like experience online',
    },
    {
      url:
        'https://github.com/yash071096/NodeBlog',
      title: 'Blog Portal',
      description:
        '• Built a blog portal system using MERN (Mongo, Express, React, Node) stack, wherein the user can publish his blogs, search for blogs based on different categories, users, & write testimonials on other’s blog',
    },
    {
      url:
        'http://imyashthakare.blogspot.com/2017/01/to-live-life-of-designer-one-must-lose.html',
      title: 'Designing it my way',
      description:
        'Sharing my thoughts about designing :)',
    },
    {
      url: 'http://imyashthakare.blogspot.com/2017/01/smart-village-key-to-brighter-future.html',
      title: 'Smart village - key to a brighter future',
      description:
        'How smart villages can help us with sustainale development',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: '',
      event_url: '',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    '',
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all. I am currently located in Dallas, Texas and looking for a full-time software developer role.',
  number: '+1-469-473-1124',
  emailAddress: 'yash071096@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'yash071096', //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
