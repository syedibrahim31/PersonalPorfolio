import PortfolioLogo from '../assets/Protfolio-logo.jpg'
import WeatherApp from '../assets/Weather-App-Logo.jpg'
import IMDBLogo from '../assets/IMDB logo.jpg'
import ECmomLogo from '../assets/E-comm-logo.jpg'
import SnapiaLogo from '../assets/SnapiaLogo.png'
import DrivingSchoolLogo from '../assets/driving school.jpg'
export const ProjectList = [
    {
        key: 0,
        name: "ShopIt(E-commerce)",
        image: ECmomLogo,
        skills: "ReactJS, Recharts, Material UI,MongoDB, NodeJS, ExpressJS",
        codeLink: "",
        demoLink: "https://e-shopit.vercel.app/",
        info: "The e-commerce web app is a feature-rich platform that provides user authentication and authorization using JWT. It has an admin dashboard for managing products, orders, users, and statistics. The platform includes a payment gateway and mail service, with features like Forgot Password and Reset Password. The platform also allows users to search for products, view product details and reviews, manage their cart, and track order history. Overall, it's a comprehensive platform that offers a seamless shopping experience for users.",
        youtube_url: "https://www.youtube.com/embed/0Fin1PrAnSg",
    },
    {
        key: 1,
        name: "Snapia (Social Media)",
        image: SnapiaLogo,
        skills: "ReactJS, Tailwind CSS ,NodeJS ,ExpressJS, MongoDB, Socket.IO",
        codeLink: "",
        demoLink: "https://snapia.vercel.app",
        info: 'Streamlined photo uploads through Cloudinary, Enhanced messaging capabilities by implementing Socket IO, enabling real-time messaging for improved communication.Empowered users to create accounts, post updates, follow others, and engage with posts through liking and commenting.Integrated cutting-edge features such as real-time chat, seamless login with Google, efficient photo uploads, interactive post interactions, robust password management, and precise location tracking for a comprehensive user experience.Developed a news section for users to read news, providing an additional value-added feature to the platform.'
        // youtube_url: "https://www.youtube.com/embed/your-youtube-video-id",
    },

    {
        key: 2,
        name: "IMDB-Movie app Clone",
        image: IMDBLogo,
        skills: "React,React Router,CSS,TMDB-API",
        codeLink: "",
        demoLink: "",
        info: "As a web developer, I designed and built an IMDB clone website using React JS, HTML, and CSS. The website allows users to browse popular, top-rated, and upcoming movies, in addition to searching for specific movies. Users can also watch trailers, view cast information, and read reviews for each movie.To make this website possible, I utilized my skills in web development to create a functional and user-friendly application. Specifically, I made API calls to retrieve the necessary data and implemented various design features to enhance the user experience.",
    },
    {
        key: 3,
        name: "Personal Portfolio",
        image: PortfolioLogo,
        skills: "React,React Router, CSS",
        codeLink: "",
        demoLink: "",
        info: "I created a personal portfolio website using React JS, HTML, and CSS to showcase my projects, skills, and background. The website serves as a platform for people to learn more about me and my professional accomplishments.My portfolio features information about my education, work experience, and technical skills, as well as a section highlighting my completed projects. Overall, my portfolio serves as a valuable asset in advancing my career and achieving my professional goals.",
    },

    {
        key: 4,
        name: "Real Time Weather App",
        image: WeatherApp,
        skills: "React JS ,Open Weather API,HTML, CSS",
        codeLink: "",
        demoLink: "",
        info: "I developed a real-time weather web application that is powered by the OpenWeatherAPI. The website provides up-to-date information on the current temperature, as well as the maximum and minimum temperature, weather, wind speed, sunrise and sunset times, humidity, and pressure.The user- friendly interface allows users to easily access the weather information for any location in the world.",
    },

]


export const clientProject = [
    {
        name: "Om Sai Motor Driving School",
        image: DrivingSchoolLogo,
        clientDemoLink: "https://omsaimotordrivingschool.in/",
    }
]