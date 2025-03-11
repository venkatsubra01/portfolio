import truetoform_logo from './experience_images/truetoform_icon.png'
import billcare_logo from './experience_images/billcare_logo.png'
import character_logo from './experience_images/character_logo.png'
import bmp_logo from './experience_images/bmp_logo.jpeg'
import pvl_logo from './experience_images/pvl_logo.png'
import pillow_logo from './experience_images/pillow_lab_logo.png'
import princeton_cs_logo from './experience_images/princeton_cs_logo.jpg'
import bu_disc_logo from './experience_images/bu_disc_logo.jpeg'
import kiryluk_lab_logo from './experience_images/kiryluk_lab_logo.jpeg'


const myexperience_data = [
    {
        name: "TrueToForm",
        title: "Software Engineering Intern",
        dates: "December '24 - February '25",
        img: truetoform_logo,
        points: ["Enhanced accuracy of TrueToForm’s computer vision edge detection algorithm for human body movement in boundary cases and cluttered environments by 81% by implementing a moving median filter in TypeScript.",
            "Developed Flask web app with Firebase database integration and deployed using Docker and Google Cloud Run to provide a no-code web interface for users to upload garment measurement data"],
        tags: [["TypeScript", "#98afed"],["FireBase", "#f7bcdc"], ["Shopify API", "#e6b1a5"], ["Google CloudRun", "#bcf7e4"], ["Flask", "#84adf0"], ["CSS","#b5e6ba"]],
        category: ["software-development"] /*Formatted like this so that it can be used as a className */
    },
    {
        name: "BillCare.ai ",
        title: "Software Engineering Intern",
        dates: "May '24 - September '24",
        img: billcare_logo,
        points: ["Implemented TensorFlow Neural Network and linear regression model based on open-source and in-house datasets that can accurately predict medical procedure prices 64% more accurately than leading competitors",
            "Developed a Python script to automate scraping of medical bill PDFs and scaled in-house medical bill database from zero to 1,500+ rows",
            "Hosted medical bill and reference medical pricing databases using an AWS RDS MySQL database by chunk-importing rows into the cloud from a local DuckDB instance"],
        tags: [["AWS Relational Database Service", "#d0b2ed"], ["DuckDB", "#b2edd0"], ["TensorFlow", "#edd1b2"], ["Python", "#f5f0a6"]],
        category: ["software-development", "data-analysis"]
    },
    {
        name: "Character Labs",
        title: "Startup Accelerator Participant",
        dates: "August '24 - September '24",
        img: character_logo,
        points: ["Youngest member of Character Labs 2024 cohort (3% acceptance rate, pre-seed funding @ $125k for 4% equity)", 
            "Served as technical face of BillCare.ai when pitching to VCs and doing customer interviews", 
            "Mocked product design templates in Figma and iterated in weekly sprints for 6 weeks"],
        tags: [["Figma", "#c98f95"]],
        category: ["other"]
    },
    {
        name: "Blackmore Partners",
        title: "Technology and Private Equity Intern",
        dates: "November '23 - March '24",
        img: bmp_logo,
        points: ["Developed a Python script using APIs to automatically scrape contact information for 100+ C-suite executives",
            "Implemented Excel macros to automate analysis of target company growth and revenue statistics from PitchBook",
            "Utilized PitchBook, Cyndx, and D&B Hoovers to vet, analyze, and contact target acquisition companies"],
        tags: [["Hunter.io API", "#98cfed"], ["Python", "#f5f0a6"]],
        category: ["software-development"]
    },
    {
        name: "Princeton Vision Lab",
        title: "Undergraduate Researcher",
        dates: "January '25 - Present",
        img: pvl_logo,
        points: ["Collaborating with Ph.D. students in developing computer vision models to detect transparent and reflective objects",
            "3rd author on research paper submitted to the International Conference on Computer Vision (ICCV) 2025"],
        tags: [],
        category:["research"]
    },
    {
        name: "Princeton Neural Coding and Computation Group",
        title: "Undergraduate Researcher",
        dates: "January '25 - Present",
        img: pillow_logo,
        points: ["Researching computational neural models for mouse behavior and decision making over time using PsyTrack",
            "Youngest researcher in lab group history"],
        tags: [],
        category: ["research"]
    },
    {
        name: "Princeton Department of Computer Science",
        title: "Undergraduate Course Assistant",
        dates: "January '25 - Present",
        img: princeton_cs_logo,
        points: ["TA for both 'Data Structures and Algorithms' and 'Introduction to Programming Systems'",
            "Host weekly office hours for technical and conceptual questions",
            "Assist ∼ 20 students weekly in debugging assignments in Java and C"],
        tags: [["Java", "#a4b1ed"], ["C", "#b7eda4"]],
        category: ["other"]
    },
    {
        name: "Boston University Data-intensive Systems and Computing Lab",
        title: "Research Intern",
        dates: "June '22 - August '22",
        img: bu_disc_logo,
        points: ["Worked with post-doctoral researchers in developing new business-facing Log-Structured Merge (LSM) trees",
            "Developed online visualization of LSM tree deletion and insertion processes using HTML and JavaScript"],
        tags: [["JavaScript", "#e9b6fa"], ["Bootstrap","#fa6e9f"], ["CSS","#b5e6ba"]],
        category: ["research"]
    },
    {
        name: "Columbia University Irving Medical Center: Kiryluk Lab",
        title: "Research Intern",
        dates: "April '22 - July '22",
        img: kiryluk_lab_logo,
        points: ["Developed SQL algorithm to diagnose Acute Kidney Injury (AKI) onset using biomedical data from the MIMIC IV hospital dataset",
            "Algorithm retrospectively diagnosed AKI 35.1% more accurately than Beth Israel Deaconess Medical Center nephrologists"],
        tags: [["SQL", "#e2faaf"], ["Microsoft SQL Server", "#f5d6b3"]],
        category: ["research"]
    }




]

export default myexperience_data;