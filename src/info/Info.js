import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"



export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];



export let singlePage = false;



export const info = {
    firstName: "Abhijeet",
    lastName: "Singh",
    initials: "js", 
    position: "a Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'Fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'Based in Jabalpur'
        },
        {
            emoji: "📧",
            text: "abhijeetsingh232215@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/share/1ATR142Nqy/?mibextid=qi2Omg",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/abhijeetsingh408?igsh=eDM3dmZkOGw0eXJ1",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/AbhijeetSi20",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/abhijeet-singh-621b622b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        


    ],
    bio: "Hello! I'm Abhijeet. I'm a software engineer specializing in Java with a strong interest in machine learning and full-stack development. Currently pursuing a Computer Science degree, I'm focused on honing my skills in web development, Python, data structures and algorithms, and network security.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'machine learning'],
            exposedTo: ['nodejs', 'python','java', 'sql']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }

    ],
    portfolio: [ 
        {
            title: "Project 1",
            live: "https://abhijeetsi20.github.io/Portfolio/", 
            source: "https://github.com/AbhijeetSi20/Portfolio", 
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://abhijeetsi20.github.io/analogclock/",
            source: "https://github.com/AbhijeetSi20/analogclock",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://abhijeetsi20.github.io/Weather-App/",
            source: "https://github.com/AbhijeetSi20/Weather-App",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://abhijeetsi20.github.io/To-Do-List/",
            source: "https://github.com/AbhijeetSi20/To-Do-List",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://abhijeetsi20.github.io/Calculator/",
            source: "https://github.com/AbhijeetSi20/Calculator",
            image: mock5
        }
    ]
}