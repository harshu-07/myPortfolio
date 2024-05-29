import self from "../img/self.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,2)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  resume: "https://drive.google.com/file/d/1SZoMNUOgNxB5r42XXIx_flabzLksRD0m/view?usp=sharing",
  firstName: "Harsh",
  lastName: "Kumar Pandey",
  initials: "js", // the example uses first and last, but feel free to use three or more if you like.
  position: "FrontEnd Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself.
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "based in India",
    },
    {
      emoji: "💼",
      text: "IOT KIIT",
    },
    {
      emoji: "📧",
      text: "harshworkzzz7@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://facebook.com",
      icon: "fa fa-facebook",
      label: "facebook",
    },
    {
      link: "https://instagram.com",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://linkedin.com",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com",
      icon: "fa fa-twitter",
      label: "twitter",
    },
  ],
  bio: "Hello! I'm Harsh. I am a web developer and i love building beautiful digital experiences",
  skills: {
    proficientWith: [
      "C",
      "C++",
      "html5",
      "css3",
      "bootstrap"
    ],
    exposedTo: ["javascript", "react", "git", "github", "nodejs", "python", "Java"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "theater",
      emoji: "🎭",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Project 1",
      live: "https://adwaylachhiramka.vercel.app", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/adway7103", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock2, //add image url here,
    },
    {
      title: "Project 2",
      live: "",
      source: "",
      image: mock2,
    },
    {
      title: "Project 3",
      live: "",
      source: "",
      image: mock3,
    },
    //add more if you want to
  ],
};
