import randomdots_img1 from './work_images/RandomDots_1.png'
import randomdots_gif from './work_gifs/random_dots_gif.gif'
import greencycle_img1 from './work_images/GreenCycle_1.png'
import greencycle_gif from './work_gifs/greencycle_gif.gif'
import truetoform_img1 from './work_images/TTFProductOnboarding_1.png'
import truetoform_gif from './work_gifs/truetoform_gif.gif'
import lsm_img from './work_images/FADE_1.png'
import lsm_gif from './work_gifs/lsm_gif.gif'
import aki_img from './work_images/AKI_1.png'


const mywork_data = [
    {
        w_no:1,
        w_name: "Random Dots Motion Task",
        w_img: randomdots_img1,
        w_gif: randomdots_gif,
        project_descr: "Random Dots Motion Task for NEU 437",
        tags: [["Flask", "#84adf0"], ["JavaScript", "#e9b6fa"],["CSS","#b5e6ba"], ["Matplotlib", "#f2a99d"]],
        further_details: "https://github.com/venkatsubra01/VisualDotsMotionTask"
    },
    {
        w_no:2,
        w_name: "GreenCycle",
        w_img: greencycle_img1,
        w_gif: greencycle_gif,
        project_descr: "A website that allows users to input their location information and recyclables, and get back their closest recycling plant and estimated financial compensation for turning in the recyclables",
        tags: [["LangChain", "#f5eb95"], ["Tavily API","#90b08b"], ["OpenAI API", "#b7b8ed"], ["Flask", "#84adf0"], ["CSS","#b5e6ba"]],
        further_details: "https://github.com/venkatsubra01/GreenCycle/tree/greencycle"
    },
    {
        w_no:3,
        w_name: "TrueToForm Product Onboarding Tool",
        w_img: truetoform_img1,
        w_gif: truetoform_gif,
        project_descr: "An internal tool that allows garment manufacturers to onboard their garment size charts to TrueToForm's body model app",
        tags: [["FireBase", "#f7bcdc"], ["Shopify API", "#e6b1a5"], ["Google CloudRun", "#bcf7e4"], ["Flask", "#84adf0"], ["CSS","#b5e6ba"]]
    },
    {
        w_no:4,
        w_name: "LSM Tree Visualizations",
        w_img: lsm_img,
        w_gif: lsm_gif,
        project_descr: "A visualization of the persistence of delete requests in LSM trees",
        tags: [["JavaScript", "#e9b6fa"], ["Bootstrap","#fa6e9f"], ["CSS","#b5e6ba"]],
        further_details: "https://www.bu.edu/summer/files/2022/11/Sun-Grace-RISE-Poster-2022.pdf"
    },
    {
        w_no:5,
        w_name: "Diagnosing Acute Kidney Injury",
        w_img: aki_img,
        w_gif: aki_img, /* no gif for this */
        project_descr: "An implementation of the KDIGO criterion for diagnosing Acute Kidney Injury",
        tags: [["SQL", "#e2faaf"], ["Microsoft SQL Server", "#f5d6b3"]],
        further_details: "https://github.com/venkatsubra01/MIMIC-IV-AKI-Diagnosis"
    }


]

export default mywork_data;