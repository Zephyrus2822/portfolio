import Img1 from "../projects_pictures/inkei-landing.png";
import Img2 from "../projects_pictures/judicio-landing.png";

const projects = [
  {
    logo: Img1,
    title: "Zenith",
    short: "AI-powered Work OS",
    description:
      "A one-stop solution for managing work efficienly including task management, assignment to teams and progress tracking with the help of AI.",
    live_link: "https://inkei-82g7.vercel.app/",
    github_link: "https://github.com/Zephyrus2822/inkei",
    tech: ["React", "TailwindCSS", "Node.js", "FastAPI", "Streamlit", "Docker", "GitHub Actions", "LangChain"],
  },
  {
    logo: Img2,
    title: "Judicio",
    short: "Fullstack Automated Bail Reckoning System",
    description:
      "A completely automated Bail Reckoning software made during the Smart India Hackathon (SIH) 2024.",
    live_link: "https://judicio.vercel.app/",
    github_link: "https://github.com/Zephyrus2822/judicio",
    tech: ["MongoDB", "Express", "React", "Node.js", "Docker", "GitHub Actions"],
  },

];

export default projects;
