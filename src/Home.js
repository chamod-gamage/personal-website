import React, { useState, useEffect, Fragment, useRef } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Layout } from "./components/Layout";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";
import LinkIcon from "@material-ui/icons/Link";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";
import "./App.css";
import Typical from "react-typical";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";

const logo = require("./assets/me.jpg");
const resume = require("./assets/chamod-resume.pdf");
var scrollToElement = require("scroll-to-element");
scrollToElement("#id");
const ems = require("./assets/ems.png");
const website = require("./assets/website.png");
const me = require("./assets/me.jpg");
const pygame = require("./assets/pygame.png");
const trashemon = require("./assets/trashemon.png");
const cooking = require("./assets/home-cooking.png");
const stock = require("./assets/stock.png");
const tpc = require("./assets/tpc.png");
const uwcribs = require("./assets/uwcribs.gif");
const panda = require("./assets/panda.gif");

export const Home = () => {
  const [idx, setIdx] = useState(0);
  const scrollToRef = (ref) =>
    typeof window !== "undefined" && window.scrollTo(0, ref.current.offsetTop);
  const EXPERIENCE = useRef(null);
  const PROJECTS = useRef(null);
  const ABOUT = useRef(null);

  const Tickers = () => {
    const roles = [
      "Full Stack Developer",
      1000,
      "Designer",
      1000,
      "Student",
      1000,
      "Builder",
      1000,
      "Leader",
      1000,
      "Teacher",
      1000,
      "Musician",
      1000,
      "Explorer",
      1000,
      "Creator",
      1000,
    ];
    const interval = 3000; // The time to wait before rendering the next string
    const typistProps = {}; // Props that are passed to the react-typist component

    return <Typical steps={roles} loop={Infinity} wrapper="h3" />;
  };

  const NavigationBar = React.memo((props) => {
    return (
      <Fragment>
        {/*  <Styles> */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Roboto+Mono|Raleway"
        />
        <Navbar sticky="top" expand="sm" style={{ backgroundColor: "#131313" }}>
          <Navbar.Brand href="/">
            <hNavBrand>
              <i>cg</i>
            </hNavBrand>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ backgroundColor: "#e3e464", padding: 0 }}
          >
            <hnav style={{ color: "#131313" }}>
              <KeyboardArrowDownOutlinedIcon />
            </hnav>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link
                  onClick={() => {
                    if (ABOUT.current) {
                      //@ts-ignore
                      ABOUT.current.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <hnav>About</hnav>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onClick={() => {
                    if (EXPERIENCE.current) {
                      //@ts-ignore
                      EXPERIENCE.current.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <hnav>Experience</hnav>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onClick={() => {
                    if (PROJECTS.current) {
                      //@ts-ignore
                      PROJECTS.current.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <hnav>Projects</hnav>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href={resume} target="_blank">
                  <hnav>Resume</hnav>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/*  </Styles> */}
      </Fragment>
    );
  });

  const Name = React.memo(() => {
    return (
      <Fragment>
        <div
          style={{
            border: "3px solid #e3e464",
            padding: 10,
            textAlign: "center",
          }}
        >
          <h1 style={{ padding: "0.5vw" }}>
            <i>{" chamod gamage "}</i>
          </h1>
        </div>
        <div style={{ height: 10 }} />
      </Fragment>
    );
  });

  const HeaderCard = React.memo((props) => {
    return (
      <Card className="minicard">
        <div style={{ height: 5 }} />
        <h2 style={{ color: "#131313" }}>
          <b>{props.title}</b>
        </h2>
        <div style={{ height: 5 }} />
      </Card>
    );
  });

  const Introduction = (props) => {
    const [clicks, setClicks] = useState(0);
    return (
      <Container>
        <Row>
          <Col lg={3} style={{ textAlign: "center" }}>
            <div style={{ height: 20 }} />
            <Image src={clicks >= 10 ? panda : me} className="profile" onClick={() => { setClicks(clicks + 1) }} roundedCircle />
            <div style={{ height: 10 }} />
          </Col>
          {/* <Col md = {1}/> */}

          <Col lg={9}>
            <Row style={{ textAlign: "left", paddingTop: 0 }}>
              <intro>
                Hi! I'm Chamod. I'm a 7x tech intern with over 2 years of
                experience and a passion for building impactful user-facing
                products. I love exploring interesting problem spaces and using
                my skills to make a difference. Currently, I'm in my final year
                of studying Systems Design Engineering at the University of
                Waterloo. <br />
                <br />
                <em>
                  I'm currently looking for Summer 2023 Software Engineering
                  internships.
                </em>
              </intro>
            </Row>
            <br />
            <Row>
              <h1>
                <Col lg="auto">
                  {" "}
                  <a
                    className="h0"
                    href="https://github.com/chamod-gamage"
                    target="_blank"
                  >
                    <GitHubIcon fontSize="inherit" />
                  </a>{" "}
                  <a
                    className="h0"
                    href="https://www.linkedin.com/in/chamod-gamage/"
                    target="_blank"
                  >
                    <LinkedInIcon fontSize="inherit" />
                  </a>{" "}
                  <a
                    className="h0"
                    href="https://twitter.com/og_chamod"
                    target="_blank"
                  >
                    <TwitterIcon fontSize="inherit" />
                  </a>{" "}
                  <a
                    className="h0"
                    href="mailto: chamodgamage26@gmail.com"
                    target="_blank"
                  >
                    <MailIcon fontSize="inherit" />
                  </a>{" "}
                </Col>
              </h1>
              {/* <Row> */}
              <Col lg>
                <h2 style={{ float: "right", marginBottom: -5 }}>
                  SYDE Progress
                </h2>
                <SydeSlider
                  max={8}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="off"
                  marks={[{ label: "3B", value: 6 }]}
                  step={null}
                  aria-label="Chamod is currently in his 3B term. Also, this website will be made fully accessible in the future."
                  defaultValue={5}
                />
                {/* </Row> */}
              </Col>
            </Row>
          </Col>
        </Row>
        <br />
        <intro style={{ float: "right", marginTop: -5 }}>
          Dean's List Streak 🔥🔥🔥🔥🔥 | 3.99 GPA 📚
        </intro>
      </Container>
    );
  };

  const Job = React.memo((props) => {
    function markup() {
      return { __html: props.description };
    }

    return (
      <Fragment>
        <Row>
          <Col md="auto">
            <div className="job-title">
              <em>{props.title}</em>
            </div>
          </Col>
          <Col>
            <div className="job">
              {props.link.length ? (
                <a href={props.link}>{props.company}</a>
              ) : (
                props.company
              )}
            </div>
          </Col>

          <Col
            md="auto"
            style={{ marginRight: 0, paddingRight: 5, marginLeft: "auto" }}
          >
            <div className="date">{props.date}</div>
          </Col>
        </Row>

        <div
          style={{
            backgroundColor: "#4a93ff",
            height: 1,
            marginRight: -5,
            marginTop: 3,
          }}
        />
        <Row>
          <Col>
            <div dangerouslySetInnerHTML={markup()} className="describe" />
            <div style={{ height: 5 }} />
            {props.skills != "None" &&
              props.skills.map((skill) => {
                return (
                  <div className={"skillItemShape"}>
                    <p className={"skillItem"}>{skill}</p>
                  </div>
                );
              })}
            <div style={{ height: 20 }} />
          </Col>
        </Row>
      </Fragment>
    );
  });
  //to add: <br/><li>Developed unit testing framework using Jest and Enzyme to ensure robustness in applications and speed up development process by 30%</li>
  const jobs = [
    {
      title: "Software Engineering Intern @",
      date: "Sep 2022 - Dec 2022",
      company: "Modern Treasury",
      link: "https://www.moderntreasury.com/",
      description: `
        I'm building and maintaining product features for an API + web application platform facilitating the movement of billions of dollars for hundreds of rapid growth startups and enterprises.
        Reconciling over $5B in transactions per month, Modern Treasury is the leading treasury management platform for startups and enterprises.
        `,
      skills: ["React.js", "Ruby", "Rails", "PostgreSQL"],
    },
    {
      title: "Product Engineering Intern @",
      date: "Jan 2022 - Apr 2022",
      company: "On Deck",
      link: "https://www.beondeck.com/",
      description: `
        On Deck is a company which supports professionals, startup founders, and investors in tech through a fostered community along with products/services which support each of these groups.
        As a Software Engineering Intern and member of the Product Fundraising Engineering team, I built products which helped startup founders raise rounds from investors and products which helped investors get access to startups to invest in.
        After a full-time internship from Jan 2022 - Apr 2022, I've continued on part time, getting to build even more! So far, I've: <br/>
        <ul>
          <br/><li>Created an investor search interface with complex collation using Next.js, GraphQL, Prisma, and ElasticSearch, enabling thousands of founders to raise pre-seed, seed, and Series A rounds</li>
          <br/><li>Implemented components for an internal React UI library, leveraging monorepo architecture to reduce code duplication by 70%</li>
          <br/><li>Built an NFT collection maker using Next.js, enabling dynamic generation of 1000+ NFTs with minimal gas fees</li>
        </ul>
        `,
      skills: ["Supabase", "Next.js", "GSAP", "CSS", "Blockchain", "Web3"],
    },
    {
      title: "Software Developer @",
      date: "Oct 2021 - Feb 2022",
      company: "CommandBar (YC S20)",
      link: "https://www.commandbar.com/",
      description: `
        CommandBar provides companies the opportunity to add a command search interface to their app with just one line of code, providing users with the totality of an app's functionality in a single, searchable UI.
        <br/>In conjunction with their Series A launch, I built a (yet-to-release) Twitter-integrated product voting platform for them with a seamless colorful animated frontend experience (inspired by retro 80s colorwaves) built using Next.js and GSAP animations, along with Supabase for data storage.
        Here's a demo of what I built: <br/>
        <div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/114b3b45683943bf9630be18a6d61b2b?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
         `,
      skills: ["Supabase", "Next.js", "GSAP", "CSS"],
    },
    {
      title: "Product Manager @",
      date: "Apr 2021 - Present",
      company: "UW Blueprint",
      link: "https://uwblueprint.org/",
      description: `Something I will always value as an engineering student is giving back to the community using my technical skillset. <br/>I've found the perfect opportunity to do that as a product manager with <a href="https://uwblueprint.org/" target = "_blank"><mark>UW Blueprint</mark></a>, an organization which pairs talented students with non-profits to create technical solutions pro bono.<br/><br/>
      I'm currently a Product Manager working with <a href="https://headsupguys.org/" target = "_blank"><mark>HeadsUpGuys (HUG)</mark></a>, an organization assisting and educating men in dealing with mental health issues, to build a web application serving as a hub for interactive content modules (which include quizzes, videos, games, etc.), as well as a no-code platform for HUG admin to create modules.
      <br/>As a PM, I'm a leader on the project team within UW Blueprint, scoping out the problem space, determining requirements, managing client communications, building team culture, maintaining a task board + documentation on Notion, mapping user flows, working with designers, and more...
         `,
      skills: [
        "Product Management",
        "Project Management",
        "Scoping",
        "User Research",
        "Sprint Planning",
        "Client Communications",
        "Prototyping",
        "Leadership",
        "Notion",
        "Figma",
      ],
    },
    {
      title: "Full Stack Developer @",
      date: "May 2021 - Aug 2021",
      company: "LCBO|next",
      link: "https://www.lcbonext.com/",
      description: `LCBO|next is a corporate innovation lab serving the Liquor Control Board of Ontario, the Crown Corporation solely responsible for alcohol sales + distribution in Ontario. <br/>
      At this lab, I've gotten to work as part of an agile team, providing innovative technical solutions to problem spaces faced by internal and external stakeholders of the LCBO. Projects we've built during my term include: <br/>
      <ul>
        <br/><li><strong>Grocery Claims Portal</strong>: An API + pair of web applications built using React, Node.js, TypeORM, and PostgreSQL which facilitate the process of allowing grocery stores to make claims on imperfectly delivered alcohol (shortages, damage, expired goods, etc.)</li>
        <br/><li><strong>Electronic Bin Tag Pricing Pipeline</strong>: A data pipeline which facilitates the transition of stores from paper pricing tags to electronic tags. Built using Flask and harnessing ML for OCR, the application centralizes all pricing changes received via PDFs and provides them to external providers via an API</li>
        <br/><li><strong>LCBO|Desk</strong>: A custom issue servicing, ticketing, and handling system which allows stakeholders to file tickets regarding existing applications hosted by LCBO|next, and also serves as a Project Management tool for the lab for servicing these issues. </li>
      </ul>
      All of these applications will have a strong monetary impact on the corporation as a whole, with a ROI well over 1000%!
         `,
      skills: [
        "React.js",
        "Node.js",
        "TypeORM",
        "Flask",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
        "MS Azure",
        "ElasticSearch",
      ],
    },
    {
      title: "Full Stack Project Developer @",
      date: "Jan 2021 - Apr 2021",
      company: "UW Blueprint",
      link: "https://uwblueprint.org/",
      description: `Prior to my position as a Product Manager, while on my academic term, I had the perfect opportunity to do give back to the community as a software developer with UW Blueprint.<br/><br/>
      I was a Full Stack Project Developer working with <a href="https://pregnancycentre.ca/" target = "_blank"><mark>The Pregnancy Centre</mark></a> to build a web application facilitating donations to and donation requests,
      remediating pain points - serving staff, donors, and most importantly, young mothers & children in need.
         `,
      skills: [
        "React.js",
        "Node.js",
        "TypeScript",
        "GraphQL",
        "Apollo",
        "Python",
        "Firebase",
        "MongoDB",
      ],
    },
    {
      title: "Software Developer @",
      date: "Aug 2020 - Dec 2020",
      company: "FutureFit AI",
      link: "https://futurefit.ai/",
      description: `<br/>FutureFit AI is a company which places an AI-powered career GPS into the hands of workers allowing them to make faster, smarter, and more successful career transitions in the age of disruption and automation.
         I was a full stack software developer in a period where the platform was rapidly scaling to meet the needs of clients. Here are some of my accomplishments:
         <br/><br/>
         <ul><li>Developed coaching interface for career coaches in the Canadian Council for Youth Prosperity (CCYP), enabling the management of thousands of Canadian youth requiring assistance with employment</li>
         <br/><li>Managed relationship with CCYP, translating their business requirements into technical solutions, reincoporating their feedback into the iterative design process, and communicated platform that I developed via a demo video and a live walkthrough training session with coaches</li>
          <br/><li>Assisted in the consolidation of multiple instances of platform data into a single data architecture, enabling stronger machine learning analytics now and into the future</li>
          </ul>`,
      skills: [
        "React.js",
        "Node.js",
        "PostgreSQL",
        "Knex.js",
        "Redux",
        "Express.js",
        "HTML",
        "CSS",
        "AWS",
        "Unit Testing",
        "Sprint Planning",
        "User Research",
        "Client Management",
      ],
    },
    {
      title: "DevOps Developer @",
      date: "May 2020 - Aug 2020",
      company: "Honeybee Hub Inc.",
      link: "https://honeybeehub.io/",
      description: `
         My role as a DevOps Developer allowed me to contribute to the team in
         a new area. Here are some highlights of my achievements:
         <br/><br/>
         <ul><li>Containerized applications using Docker and deployed them to Azure (and then eventually Google Kubernetes Engine) in order to ensure more efficient usage of software resources </li>
          <br/><li>Coordinated container migration to Google Cloud Platform, architecting a secure networking structure to enforce HIPAA compliance, enabling management of sensitive data and saving $1000/month (compared to external network management)</li>
        <br/><li>Conducted research into legal guidelines for HIPAA compliance and contacted third-party API providers to ensure their services were also compliant</li></ul>`,
      skills: ["Kubernetes", "Docker", "Google Cloud Platform", "MS Azure"],
    },
    {
      title: "Full Stack Web Developer (Co-op) @",
      date: "Jan 2020 - May 2020",
      company: "Honeybee Hub Inc.",
      link: "https://honeybeehub.io/",
      description: `<br/>Before my role in DevOps at Honeybee, I was a Full Stack Web Developer. This was my first full-time position as a developer and I was certainly thrown for a spin at the beginning trying to acclimate myself to the fast-paced environment of a startup. However, I soon acclimated and was given the independence, advisement, and responsibility to tackle some hefty pursuits during my time. Here's just a few of the things I accomplished over my time:
      <br/><br/>
      <ul><li>Redeveloped the <a href = "https://www.honeybeehub.io" target = "_blank"><mark>landing page</mark></a> to increase user discovery & retention, reducing bounce rate from 60% to 10% </li>
       <br/><li>Implemented a user interview methodology for user research regarding planned product features, yielding key insights into the company’s user base during user interviews</li>
     <br/><li>Helped create an updated roadmap for internal usage regarding planned feature releases over the next quarter</li>
     <br/><li>Acted on user feedback by single-handedly developing a scheduled messaging feature for researchers, all the way from front-end styling to database architecture</li></ul>`,
      skills: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Mongoose.js",
        "Express.js",
        "HTML",
        "CSS",
        "User Research",
        "Typescript",
      ],
    },

    // {
    //   title: "Lead Mechanical Executive @",
    //   date: "Sep 2015 - Jun 2019",
    //   company: "Absolute Robotics",
    //   link: "http://team4308.ca/pastSeasons.html",
    //   description: `<br/>Throughout my time in high school, I was an integral part of Absolute Robotics, my FRC team, an experience very similar to working in a professional engineering environment. During this time, I saw my team grow from a relatively average FRC team to a tightly-knit well-oiled machine capped off by our semifinalist position at the 2018 World Championships (losing to the champions).
    //   <br/>As Mechanical Executive, I was really a jack-of-all-trades. Primarily, I was focused on the preliminary designs, prototypes, and final construction of the competition robot. However, I also had to train junior members up and raise thousands of dollars in funds by pitching to sponsors prior to the build season, manage a hectic 6-week build season by delegating roles and planning workflows effectively
    //   within my large subteam of >60 members, and finally, coordinate with my fellow executives and assist them with their roles (such as coding autonomous functionality for our robot). All in all, my time in FRC was the launchpad for my career in STEM. <br/><br/>`,
    //   skills: [
    //     "Java",
    //     "Fundraising",
    //     "Team Management",
    //     "Sprint Planning",
    //     "Competitive Analysis",
    //   ],
    // },

    // {
    //   title: 'Piano Teacher',
    //   date: 'Jul 2017 - Jan 2019',
    //   company: '(Self-Employed)',
    //   description: `<br/>Growing up, one of the largest parts of my life was learning to play the
    //   piano and consistently improving my skill level, just as I do today with my development
    //   and product management skills. Having been a student for 8 years, I decided it was finally
    //   time to transition into the role of giving back and sharing what I had learned. As such,
    //   I became a piano teacher for elementary school kids around the age I had been when I first
    //   started. This was my first taste of entrepreneurship and I took the opportunity and ran with it.
    //   I made personalized lesson plans to ensure the effectiveness of my teaching for each individual student,
    //    a penchant for detail that has happened to present itself throughout my career in tech.<br/><br/>`,
    //   skills: ['User Research'],
    // },
  ];

  const Experience = React.memo(() => {
    return (
      <Fragment>
        <HeaderCard title={"Experience"} />
        <div style={{ height: 10 }} />
        {/* <Card style = {{backgroundColor: "#1d1f2f"}}> */}
        {/* <Card className = "projects"> */}

        <div style={{ height: 10 }} />
        {/* <Container style = {{padding: "5%"}}> */}
        {jobs.map((job) => {
          return (
            <>
              <Job
                link={job.link || ""}
                title={job.title}
                company={job.company}
                description={job.description}
                date={job.date}
                skills={job.skills ? job.skills : "None"}
              />
            </>
          );
        })}
        {/* <div style = {{height: 100}}/> */}
        {/* </Container> */}
        {/* </Card> */}
      </Fragment>
    );
  });

  const Project = React.memo((props) => {
    return (
      <Fragment>
        <Row>
          <Col xl="auto" style={{ paddingLeft: 0 }}>
            <div className="job-title">
              <em>{props.title}</em>
            </div>
          </Col>

          <Col
            xl="auto"
            style={{ marginRight: 0, paddingRight: 0, marginLeft: "auto" }}
          ></Col>
        </Row>
        <div style={{ height: 10 }} />
        <Row>
          <Col style={{ padding: 15, textAlign: "center" }} xl={6}>
            <img src={props.image} style={{ maxWidth: "100%" }} />
            <div style={{ height: 5 }} />
            {props.skills.map((skill) => {
              return (
                <div className={"skillItemShape"}>
                  <p className={"skillItem"}>{skill}</p>
                </div>
              );
            })}
          </Col>
          <Col style={{ padding: "0px 0px 0px 0px", textAlign: "center" }}>
            <div style={{ height: 5 }} />
            <div className="describe">{props.description}</div>
            <div style={{ height: 15 }} />
            <a target="_blank" href={props.link}>
              <button>
                <p>{props.buttonText}</p>
              </button>
            </a>
          </Col>
        </Row>
      </Fragment>
    );
  });

  const Projects = React.memo(() => {
    return (
      <Fragment>
        <HeaderCard title={"Projects"} />
        {projects.map((project) => {
          return (
            <Fragment>
              <div style={{ height: 40 }} />
              <Card className="projects">
                <div style={{ height: 5 }} />
                <Container style={{ padding: "5%" }}>
                  <Project
                    title={project.title}
                    description={project.description}
                    skills={project.skills}
                    image={project.image}
                    buttonText={project.buttonText}
                    link={project.link}
                  />
                  <div style={{ height: 10 }} />
                </Container>
              </Card>
            </Fragment>
          );
        })}
      </Fragment>
    );
  });

  const projects = [
    {
      title: "UW Cribs",
      skills: [
        "Turborepo",
        "Next.js",
        "Node.js",
        "MongoDB",
        "Retool",
        "GraphQL",
        "TailwindCSS",
      ],
      image: uwcribs,
      buttonText: "Use the product",
      link: "https://donationhub.pregnancycentre.ca/",
      description: `Finding housing every term is a universally lamented experience amongst post-secondary students, due to the disjointed, time-consuming, and uncurated nature of the process. UW Cribs sources posts from sellers on commonly used platforms like Facebook Marketplace and provides them to users in a centralized user interface, with filtering functionality, allowing students to curate posts based on relevant data categories such as budget, bedrooms, bathrooms, and season.
      The project includes a Turborepo monorepo consisting of two Node.js servers and a Next.js web application written in TypeScript, internal tooling built in Retool, and a MongoDB database.`,
    },
    {
      title: "The Pregnancy Centre Donation Hub",
      skills: [
        "React.js",
        "HTML",
        "SCSS",
        "Node.js",
        "MongoDB",
        "GraphQL",
        "Firebase",
      ],
      image: tpc,
      buttonText: "Visit the (real) donation hub",
      link: "https://donationhub.pregnancycentre.ca/",
      description: `As a member of UW Blueprint, I (with fellow developers) built a full stack technical solution to the pain points faced by the Kitchener-Waterloo based NPO The Pregnancy Centre regading donation management.
      This is a donation hub which allows the public to see what items the Centre needs in terms of donations and make requests to donate, while also allowing employees to manage donation requests & listings.
      The tech stack used for this project was the MERN stack, with Firebase for user authentication and asset hosting (which were some of the features that I personally owned).
      Ultimately, this hub will save busy staff countless hours and support many young mothers in need.`,
    },
    {
      title: "Stocksimple",
      skills: [
        "React.js",
        "HTML",
        "SCSS",
        "Node.js",
        "MongoDB",
        "Bcrypt",
        "Docker",
        "Docker-Compose",
      ],
      image: stock,
      buttonText: "Visit the web app",
      link: "https://stocksimple.netlify.app",
      description: `This is a pair of web applications (SPA and API) I made to track my stock portfolio easily from my computer.
      It's been coded in React and uses the Tradier Developer API to get real-time and historic market data.
      I've made it easy to use for anyone who wants to track their portfolio, utilizing localstorage for long-term data storage on-device or (if the user creates an account) MongoDB by way of a Node.js server.
      Deployments were done on Netlify and Heroku, with a database hosted on MongoDB Atlas. The apps have been containerized using Docker with a docker-compose for easy local development.`,
    },
    // {
    //   title: "Home Cooking!",
    //   skills: ["React.js", "HTML", "CSS"],
    //   image: cooking,
    //   buttonText: "Visit the website",
    //   link: "https://home-cooking.netlify.app",
    //   description: `This is a web app I initially made for my mom so that she could better keep track of the stuff she was cooking while stuck in quarantine. Now, I've made it publicly accessible for
    //   anyone to use - just visit the website and you can start making your logbook of recipes. The web app leverages various React libraries for the clean user interface and I utilized localStorage in the
    //   browser so that the web app stores a user's data over time. The React Context API was especially useful for this project due to needing effective state management while handling data across several components.`,
    // },
    // {
    //   title: "Employee Management System",
    //   skills: ["Java"],
    //   image: ems,
    //   buttonText: "Take a look at the code on GitHub",
    //   link: "https://github.com/chamod-gamage/ems",
    //   description: `Initially a simple computer science exercise in high school to learn about hash tables, the Employee Management System (EMS) is a fully functional Java application developed in NetBeans which
    //   allows users to manage a company's employees. Users are provided with password functionality, long-term storage of data, simple payroll functionality, and CRUD operations for both employees
    //    and their work locations. This project was built completely from scratch -
    //   this project was foundational in developing my understanding of Object-Oriented Programming.`,
    // },
    // {
    //   title: "Personal Website",
    //   skills: ["React.js", "HTML", "CSS", "Keyframes"],
    //   image: website,
    //   buttonText: "Take a look at the code on GitHub",
    //   link: "https://github.com/chamod-gamage/personal-website",
    //   description: `This is actually the second major iteration of my personal website. While my initial version was a hodgepodge of HTML and CSS and contained somewhat hacky code,
    //   this version is much sleeker, responsive, aesthetically pleasing, and easy to modify. I developed this website using the skills I gained in React.js over my first co-op term
    //   in addition to the HTML and CSS skills I had acquired over time beforehand, as well as a new skill I developed - CSS animations! This website is the best way to present myself
    //    in a more relaxed format and lets my personality come through. It's constantly under construction and is getting more and more interactive. `,
    // },
    // {
    //   title: "PygamePaint",
    //   skills: ["Python"],
    //   image: pygame,
    //   buttonText: "Take a look at the code on GitHub",
    //   link: "https://github.com/chamod-gamage/pygamePAINT",
    //   description: `Pygame Paint was one of my first forays into the world of programming. Built in Pygame,
    //   this simple program provides a simple alternative to other drawing applications, providing easy-to-follow
    //    instructions and versatility in illustration. With much room to improve, this program is definitely not
    //     without its flaws. However, I still look back fondly on it and like to show
    //   it to demonstrate how far I have come in my journey in tech.`,
    // },
    // {
    //   title: "Trashemon Go",
    //   skills: ["React Native", "Node.js", "Firebase"],
    //   image: trashemon,
    //   buttonText: "Take a look at this project on Devpost",
    //   link: "https://devpost.com/software/trashemon-go-3jomhr",
    //   description: `Trashemon Go is a mobile app that gamifies the upcycling/recycling of trash in your neighbourhood inspired by the star app of summer 2016 - Pokemon Go. The app was
    //    developed by me and a few classmates. We were very ambitious in trying to combine many different features in a short period of time, including Google Cloud Vision API (using ML
    //      to identify trash from visual images), Twilio Chat API (to create chat rooms for users to interact), as well as the user experience features required to make an effective app.
    //      Personally, I planned out the overall software architecture that would allow all these features to work together and the React Native frontend as well.`,
    // },
  ];

  const Skills = React.memo((props) => {
    return (
      <Fragment>
        <HeaderCard title={"Skills"} />
        <div style={{ height: 20 }} />
        {/* <Card style = {{backgroundColor: "#1d1f2f"}}> */}
        {/* <Card className = "projects"> */}
        <div className="describe" style={{ fontFamily: "Raleway" }}>
          I'm a lifelong learner and I'm always trying to expand the number of
          skills and technologies I have on my toolbelt to help me build what I
          want. Here's a list of technical skills and technologies that I have
          picked up over the years:
        </div>
        <div style={{ height: 20 }} />
        {/* <Container style = {{padding: "5%"}}> */}
        {props.skills.map((skill) => {
          return (
            <div className={"skillItemShape"}>
              <p className={"skillItem"}>{skill}</p>
            </div>
          );
        })}
        {/* <div id = "experience" style = {{height: 100}}/> */}
        {/* </Container> */}
        {/* </Card> */}
      </Fragment>
    );
  });

  const skills = [
    ...new Set(
      [
        "HTML",
        "CSS",
        "Keyframes",
        "JavaScript",
        "TypeScript",
        "React.js",
        "React Native",
        "React Redux",
        "GraphQL",
        "Apollo",
        "Express.js",
        "Node.js",
        "Knex.js",
        "Mongoose.js",
        "Python",
        "Flask",
        "Java",
        "C++",
        "MongoDB",
        "SQL",
        "PostgreSQL",
        "SQLAlchemy",
        "Docker",
        "Microsoft Azure",
        "Kubernetes",
        "Google Cloud Platform",
        "AWS",
        "Consul",
        "Git",
        "LaTeX",
        "Markdown",
        "User Research",
        "Prototyping",
        "Competitive Analysis",
        "Sprint Planning",
      ]
        .concat(jobs.flatMap((job) => job.skills))
        .concat(projects.flatMap((project) => project.skills))
    ),
  ];

  const SydeSlider = withStyles({
    root: {
      marginTop: 5,
      color: "#4a93ff",
      height: 8,
      marginBottom: 0,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      marginTop: -8,
      marginLeft: -12,
      "&:focus, &:hover, &$active": {
        boxShadow: "inherit",
      },
    },
    active: {},
    markLabelActive: {
      padding: 2,
      fontFamily: "Raleway",
      fontWeight: 600,
      color: "#4a93ff",
    },
    valueLabel: {
      color: "#4a93ff",
      left: "calc(-50% + 4px)",
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

  function valuetext(value) {
    return `${value}B`;
  }

  const Footer = React.memo(() => {
    return (
      <Fragment>
        <h2>
          Made by <mark>Chamod Gamage</mark>
        </h2>
        <h1>
          {" "}
          <a
            className="h0"
            href="https://github.com/chamod-gamage"
            target="_blank"
          >
            <GitHubIcon fontSize="inherit" />
          </a>{" "}
          <a
            className="h0"
            href="https://www.linkedin.com/in/chamod-gamage/"
            target="_blank"
          >
            <LinkedInIcon fontSize="inherit" />
          </a>{" "}
          <a
            className="h0"
            href="https://twitter.com/og_chamod"
            target="_blank"
          >
            <TwitterIcon fontSize="inherit" />
          </a>{" "}
          <a
            className="h0"
            href="mailto: chamodgamage26@gmail.com"
            target="_blank"
          >
            <MailIcon fontSize="inherit" />
          </a>{" "}
        </h1>
      </Fragment>
    );
  });
  return (
    <div>
      <NavigationBar />

      <Jumbotron
        style={{
          backgroundColor: "#131313",
          borderRadius: 0,
          margin: 0,
          zIndex: 20,
        }}
      >
        <header className="App-header">
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Roboto+Mono|Raleway"
          />
          <div id="about" />
          <Name />

          <Tickers />
        </header>

        <div ref={ABOUT} style={{ height: 60 }} />
        <Layout>
          <Introduction />

          <div style={{ height: 100 }} />
          <Skills skills={skills} />
          <div ref={EXPERIENCE} id="experience" />
          <div style={{ height: 100 }} />

          <Experience />
          <div id="projects" ref={PROJECTS} style={{ height: 20 }} />
          <div style={{ height: 100 }} />
          <Projects />
          <div style={{ height: 100 }} />
          <Footer />
        </Layout>
      </Jumbotron>
    </div>
  );
};
