/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Neeraj Shukla",
  title: emoji("Hi all, I'm Neeraj"),
  subTitle: emoji(
    "A tech enthusiast, software engineer, and data analyst by profession 🚀. I specialize in data-driven solutions, crafting strategies for your business growth 📈 "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shuklaneeraj",
  linkedin: "https://www.linkedin.com/in/connect2neeraj",
  gmail: "neerajshuklasmailbox@gmail.com",
  facebook: "https://www.facebook.com/neeraj.shukla.smarty/",
  // You can add other social media links as needed
  // Medium, Stack Overflow, Instagram, Twitter, Kaggle, etc.
  display: true // Set true to display this section, defaults to false
};


// Skills Section

const skillsSection = {
  title: "Tech Enthusiast",
  subTitle: "I AM PASSIONATE ABOUT DATA ANALYSIS, DATA SCIENCE, AND BLOCKCHAIN TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Perform Data Analysis and Visualization to derive meaningful insights"
    ),
    emoji("⚡ Implement Machine Learning algorithms for predictive analytics"),
    emoji(
      "⚡ Develop Blockchain solutions and Smart Contracts for secure transactions"
    ),
    emoji("⚡ Create interactive Front-end and User Interfaces for applications"),
    emoji("⚡ Build Progressive Web Applications (PWA) using various tech stacks")
  ],

  softwareSkills: [
    {
      skillName: "data-analysis",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "data-science",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "machine-learning",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "blockchain",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "web-development",
      fontAwesomeClassname: "fab fa-html5"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Memorial University of Newfoundland, Canada",
      logo: "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/306079103_410182247855593_939971049144866396_n.png?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Y9Bvqb-M2wIAX_ihuMp&_nc_ht=scontent-atl3-1.xx&oh=00_AfBrO4TTKNh1QR1BYhfk8zVigJNZGefrIzjQT1Gyt-uVmw&oe=657A7F7D",
      subHeader: "Master of Science, Computer Science",
      duration: "Sept 2022 - Jul 2024",
      desc: "GPA: 3.82 / 4.0",
    },
    {
      schoolName: "Technocrats Institute of Technology Excellence, India",
      logo: "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-1/294357826_2973368806256982_1580580189585666944_n.jpg?stp=dst-jpg_p480x480&_nc_cat=110&ccb=1-7&_nc_sid=596444&_nc_ohc=EOL1QXje0ygAX85Bi5f&_nc_ht=scontent-atl3-1.xx&oh=00_AfAbxG2fkLcPXncgjFZ6s8tyZf56IxMe5P0bNBiCu4gP3g&oe=657A76A7", // Replace with the actual URL of your university's logo
      subHeader: "Bachelor of Engineering, Computer Science & Engineering",
      duration: "Aug 2016 - Jul 2020",
      desc: "GPA: 3.30 / 4.0",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

// Tech Stack Section
const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Business Analytics",
      progressPercentage: "90%" // Insert relative proficiency in percentage
    },
    {
      Stack: "Web Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Cloud Implementation",
      progressPercentage: "80%"
    },
    {
      Stack: "CRM Implementation",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section; need to change your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Data Analyst",
      company: "National Research Council",
      companylogo: "https://media.licdn.com/dms/image/C560BAQEtmusKSN4L_Q/company-logo_200_200/0/1668707137784/national_research_council_logo?e=1710374400&v=beta&t=faoFv0003knuLxO-RyR8driF1ueq0_-tuCzOuwPV6Sk",
      date: "Sept 2023 – Present",
      desc: "Managing and analyzing data using Microsoft Excel and Power BI."
    },
    {
      role: "Software Developer",
      company: "Infinite Computer Solutions",
      companylogo: "https://media.licdn.com/dms/image/D4E0BAQENJsIHQHM8pQ/company-logo_200_200/0/1687442778909/infinite_computer_solutions_logo?e=1710374400&v=beta&t=mWkkVK-97Cu8Q3OIGtaE616LiQQ2Xtzn42xVsyWLYxA",
      date: "Aug 2022 – Dec 2022",
      desc: "Led Salesforce development project, increasing field service efficiency by 20%."
    },
    {
      role: "Associate Software Developer",
      company: "DXC Technology",
      companylogo: "https://media.licdn.com/dms/image/C4D0BAQFt7orYWPc9MQ/company-logo_200_200/0/1630537692227/dxctechnology_logo?e=1710374400&v=beta&t=rw3WgYt8XyMOAoVzi-Gg1q2qYm8mZq9BsnEGZOwZt9o",
      date: "Jul 2020 – Aug 2022",
      desc: "Oversaw design and development of enterprise-level projects for Hewlett Packard Enterprise."
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// // Some big projects you have worked on

// Big Projects Section
const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://media.licdn.com/dms/image/C560BAQGUOwGC1Ye3-g/company-logo_200_200/0/1630656523973/ecoinfoundationofficial_logo?e=1710374400&v=beta&t=3ID4MbZBbxWRToUqeTB7E6vUEf__UW9WzvwlEx9HmtQ",
      projectName: "Ecoin Official",
      projectDesc: "Description of your work at Ecoin Official.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.linkedin.com/company/ecoinfoundationofficial/about/"
        }
      ]
    },
    {
      image: "https://media.licdn.com/dms/image/C560BAQFa9aOl5lTC8g/company-logo_200_200/0/1631539666703?e=1710374400&v=beta&t=bSAMyf8FVke3jhIH7LXCuRM77XyHtWDL19h662yr2PI",
      projectName: "HelloFans",
      projectDesc: "Description of your work at HelloFans.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://uk.linkedin.com/company/hello-fans"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Salesforce Platform Developer I",
      subtitle: "Certification for mastering the skills required to develop custom applications on the Salesforce platform.",
      image: require("./assets/images/pd1.webp"), // Local path in the assets/images directory
      imageAlt: "Salesforce Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.salesforce.com/trailblazer/nshukla24"
        },
        {
          name: "Preparation Trailmix",
          url: "https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-platform-developer-i-credential"
        }
      ]
    },
    {
      title: "Amazon Cloud Practitioner",
      subtitle: "Certification demonstrating an overall understanding of AWS Cloud, fundamental AWS services, and core architecture.",
      image: require("./assets/images/aws.webp"), // Updated file extension to .webp
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1AQwrhR9ghFxrRqJ4YtKVe7H9VZzSOHAa/view?usp=sharing"
        },
        {
          name: "Certification Details",
          url: "https://www.aws.training/certification"
        }
      ]
    },
    {
      title: "Coursera Data Analyst",
      subtitle: "Certification indicating proficiency in data analysis techniques and tools.",
      image: require("./assets/images/courseraDA.webp"), // Updated file extension to .webp
      imageAlt: "Coursera Logo",
      footerLink: [
        // Add the URL if available
        { name: "Certification", url: "https://coursera.org/share/e40ba7bad1d79155f3213f457fa2dc98" }
      ]
    },
    {
      title: "DXC Champ Award",
      subtitle: "Award recognizing exceptional performance and contributions in technology projects.",
      image: require("./assets/images/champaward.webp"), // Updated file extension to .webp
      imageAlt: "DXC Logo",
      footerLink: [
        // Add the URL if available
        { name: "Award Letter", url: "https://drive.google.com/file/d/1EicIk5JSlG454ItGQemOGih5IuVcNviy/view?usp=sharing" }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 709-341-7368",
  email_address: "neerajs@mun.ca"
};

// Twitter Section

const twitterDetails = {
  userName: "https://twitter.com/neerajshuklaz", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  isHireable
};