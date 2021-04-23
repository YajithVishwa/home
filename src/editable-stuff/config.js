// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Yajith",
  middleName: "",
  lastName: "Vishwa",
  message: " Enthusiast coder and Passionate about changing the world!. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/YajithVishwa",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/vis.hwa.1272",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/yajithvishwa/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/yajith-vishwa-588412182/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/image.png"),
  imageSize: 375,
  message:
    "This is Yajith Vishwa pursuing my BTech 3rd Grade in TCE. The passionate towards Technology made me a Strong Technical Person.",
  resume: "https://drive.google.com/file/d/170tzl-U32deQL9ZeCUuGp7jk-_tWtBZN/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "YajithVishwa", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["WomenSafety","WeatherMontioringSystem","SoilPredictor","ShoppingApp"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "",
  message:
    "",
  images: [
   
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C", value: 80 },
    { name: "Java", value: 90 },
    { name: "Android Studio", value: 85 },
    { name: "IoT", value: 85 },
  ],
  softSkills: [
    { name: "Teamwork", value: 80 },
    { name: "Problem Solving", value: 65 },
    { name: "Time Management", value: 80 },
    { name: "Decision Making", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get Connected",
  message:
    "Pre Final Year at TCE MDU. Passionate towards Android App Development and IoT",
  email: "yajithvishwa2001@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Student Internship at JaksTech Solutions',// Here Add Company Name
      companylogo: require('../assets/img/jakstech.png'),
      date: 'Jan 2021 – Present',
    }
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
