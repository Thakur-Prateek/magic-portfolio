import { InlineCode } from "@/once-ui/components";
import { display } from "./config";

const person = {
    firstName: 'Prateek',
    lastName:  'Thakur',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Technical Product Strategist',
    avatar: '/images/avatar.jpeg',
    
    location : 'ASIA/KOLKATA', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Hindi']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/Thakur-Prateek',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/prateek-thakur/',
    },
    {
        name: 'Twitter',
        icon: 'x',
        link: 'https://x.com/Prateekthakur_',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:prateek.thakur6@gmail.com',
    },
    {
        name: 'Microsoft Learn',
        icon: 'microsoft',
        link: 'https://learn.microsoft.com/en-us/users/prateekthakur/achievements',
    },
    {
        name: 'Google Cloud Arcade',
        icon: 'google',
        link: 'https://www.cloudskillsboost.google/public_profiles/38099eda-566d-4a34-8d07-31f9a9fd6691'
    },
    {
            name: 'Medium',
            icon: 'medium',
            link: 'https://prateek-thakur.medium.com'
    },
    {
            name: 'Notion',
            icon: 'notion',
            link: 'https://prateekthakur.notion.site'
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Technical Product Strategist</>,
    subline: <>I'm Prateek Thakur, a recent Master's graduate in Computer Science with a passion for <inline>Product Management</inline>. I’m dedicated to crafting innovative tech solutions and excited to bring my skills to a dynamic team. In my spare time, I work on personal projects to expand my expertise.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://calendar.google.com/calendar/u/0?cid=YzNjZGU3NWU3NjcwZmUxMWFhY2RiN2ZiOWEzZGIwMjg3MmIwMTExMTVhZTRmNWU3NGEyMDYyNzFiMGMzZGFiNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Prateek is a tech enthusiast and recent Computer Science graduate with a passion for transforming innovative ideas into practical, user-centric solutions. His work spans product management, digital interfaces, and the fusion of technology and strategy.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Lab. for Distributed System and Services',
                timeframe: 'May, 2023 - June, 2024',
                role: 'Graduate Student Researcher',
                achievements: [
                    <>Achieved 38% Increase in Energy Efficiency: Led a project to optimize energy consumption in NB-IoT networks, applying data-driven strategies to enhance IoT device sustainability.</>,
                    <>Strategic Analysis of Research Trends: Conducted an in-depth review of NB-IoT literature, synthesizing insights from numerous academic papers to inform research direction and identify emerging trends.</>,
                    <>Cross-functional Collaboration and Stakeholder Engagement: Worked closely with faculty, lab partners, and industry experts to align research objectives with practical applications, ensuring the project met both academic and industry needs.</>,
                    <>Prototyping and Testing for Market Viability: Developed and evaluated prototypes to validate NB-IoT applications, focusing on low-bandwidth environments, and provided actionable recommendations for further development.</>,
                    <>Data-Driven Decision Making: Utilized data analysis to refine transmission protocols, supporting product viability and contributing to published findings that guide future IoT product enhancements.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'IoTIoT.in',
                timeframe: 'July, 2021 - Aug, 2021',
                role: 'AI Project Intern',
                achievements: [
                    <>Role: Engaged in an intensive AI Project Internship, focusing on Convolutional Neural Networks (CNN) and transfer learning techniques.</>,
                    <>Key Responsibilities:Research and Development: Conducted a detailed study of current transfer learning processes to identify areas for performance enhancement.</>,
                    <>Technical Implementation: Applied transfer learning to MobileNetV2-SSDLite using TensorFlow, optimizing the model training process.</>,
                    <>Documentation: Created a comprehensive step - by - step guide to implement transfer learning, facilitating future projects and training initiatives</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Education',
        institutions: [
            {
                name: 'MSc. Computer Science',
                description: <>South Asian University, New Delhi, 2022 - 2024</>,

            },
            {
                name: 'Bachelors of Computer Applications',
                description: <>Guru Gobind Singh Indraprtastha University, New Delhi, 2019 - 2022</>,
            }
        ]
    },
    technical: {
        display: false, // set to false to hide this section
        title: 'Skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    },
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };