import randomdots_img1 from './work_images/RandomDots_1.png'
import randomdots_gif from './work_gifs/random_dots_gif.gif'
import greencycle_img1 from './work_images/GreenCycle_1.png'
import greencycle_gif from './work_gifs/greencycle_gif.gif'
import truetoform_img1 from './work_images/TTFProductOnboarding_1.png'
import truetoform_gif from './work_gifs/truetoform_gif.gif'
import lsm_img from './work_images/FADE_1.png'
import lsm_gif from './work_gifs/lsm_gif.gif'
import aki_img from './work_images/AKI_1.png'
import portfolio_img from './work_images/portfolio.png'
import portfolio_gif from './work_gifs/portfolio_gif.gif'
import tigermarket_img from './work_images/TigerMarket.png'
import tigermarket_gif from './work_gifs/TigerMarket_gif.gif'
import gcrl_img from './work_images/GCRL.png'
import gcrl_gif from './work_gifs/GCRL_gif.gif'
import translator_img from './work_images/Translation.png'
import translator_gif from './work_gifs/Translation_gif.gif'

const mywork_data = [
    {
        w_name: "Neural Machine Translator",
        w_img: translator_img,
        w_gif: translator_gif,
        project_descr: "An Seq2Seq machine learning model built, pretrained, fine-tuned and tested to translate Mandarin sentences to English",
        tags: [["React.js", "#ed7e72"], ["Flask", "#84adf0"],["Tailwind CSS", "#f04198"], ["PyTorch", "#e64e24"]],
        further_details: "https://github.com/venkatsubra01/CS224N-Natural-Language-Processing/tree/main/a4"
    },{
        w_name: "TigerMarket",
        w_img: tigermarket_img,
        w_gif: tigermarket_gif,
        project_descr: "A marketplace app enabling Princeton students to buy and sell items within the campus community.",
        tags: [["React.js", "#ed7e72"], ["Express.js", "#72edb4"],["HeroUI","#58bbed"], ["Tailwind CSS", "#f04198"]],
        further_details: "https://tigermarket-f7555a069d76.herokuapp.com/"
    },{
        w_name: "Benchmarking Goal-Conditioned Reinforcement Learning with Soccer",
        w_img: gcrl_img,
        w_gif: gcrl_gif,
        project_descr: "Introducing two new soccer reinforcement learning (RL) environments and implementing state-of-the-art RL algorithms on these new environments.",
        tags: [["Python", "#61d480"], ["XML", "#eddb93"],["WanDB","#c693ed"]],
        further_details: "https://github.com/venkatsubra01/COS435-Reinforcement-Learning-Final-Project/tree/main"
    },{
        w_name: "This Portfolio Website!",
        w_img: portfolio_img,
        w_gif: portfolio_gif,
        project_descr: "A portfolio website to display my projects and experience.",
        tags: [["React.js", "#ed7e72"], ["Express.js", "#72edb4"],["EmailJS","#8272ed"], ["Framer Motion", "#edf5ab"]],
        further_details: "https://github.com/venkatsubra01/portfolio"
    },
    {
        w_name: "Random Dots Motion Task",
        w_img: randomdots_img1,
        w_gif: randomdots_gif,
        project_descr: "Implementing the Random Dots Saccade Task (from <a href='https://pubmed.ncbi.nlm.nih.gov/12417672/' target='_blank' rel='noopener noreferrer' style='TEXT-DECORATION: underline'>Roitman and Shadlen et al.</a>) for live data collection in neuroscience",
        tags: [["Flask", "#84adf0"], ["JavaScript", "#e9b6fa"],["CSS","#b5e6ba"], ["Matplotlib", "#f2a99d"]],
        further_details: "https://github.com/venkatsubra01/VisualDotsMotionTask"
    },
    {
        w_name: "GreenCycle",
        w_img: greencycle_img1,
        w_gif: greencycle_gif,
        project_descr: "A website that allows users to input their location information and recyclables, and get back their closest recycling plant and estimated financial compensation for turning in the recyclables",
        tags: [["LangChain", "#f5eb95"], ["Tavily API","#90b08b"], ["OpenAI API", "#b7b8ed"], ["Flask", "#84adf0"], ["CSS","#b5e6ba"], ["Figma", "#c98f95"]],
        further_details: "https://github.com/venkatsubra01/GreenCycle/tree/greencycle"
    },
    {
        w_name: "TrueToForm Product Onboarding Tool",
        w_img: truetoform_img1,
        w_gif: truetoform_gif,
        project_descr: "An internal tool that allows garment manufacturers to onboard their garment size charts to TrueToForm's body model app",
        tags: [["FireBase", "#f7bcdc"], ["Shopify API", "#e6b1a5"], ["Google CloudRun", "#bcf7e4"], ["Flask", "#84adf0"], ["CSS","#b5e6ba"]]
    },
    {
        w_name: "LSM Tree Visualizations",
        w_img: lsm_img,
        w_gif: lsm_gif,
        project_descr: "A visualization of the persistence of delete requests in LSM trees",
        tags: [["JavaScript", "#e9b6fa"], ["Bootstrap","#fa6e9f"], ["CSS","#b5e6ba"]],
        further_details: "https://www.bu.edu/summer/files/2022/11/Sun-Grace-RISE-Poster-2022.pdf"
    },
    {
        w_name: "Diagnosing Acute Kidney Injury",
        w_img: aki_img,
        w_gif: aki_img, /* no gif for this */
        project_descr: "An implementation of the KDIGO criterion for diagnosing Acute Kidney Injury",
        tags: [["SQL", "#e2faaf"], ["Microsoft SQL Server", "#f5d6b3"]],
        further_details: "https://github.com/venkatsubra01/MIMIC-IV-AKI-Diagnosis"
    }


]

export default mywork_data;