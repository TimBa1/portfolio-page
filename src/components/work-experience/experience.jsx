import kudi from "../../assets/home/kudi.png"
import duro from "../../assets/home/duro.jpg";
import grandilo from "../../assets/home/grandilo.jpg";


const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experience: [
      {
        role: "Frontend Engineer",
        company: "Kudi Inc.",
        companylogo: kudi,
        date: "May 2021 – Present",
        desc: "Kudi is a financial technology organization that aims at making financial services accessible and affordable to all Africans across the world, through its agent network, especially  the underbanked and unbanked.",
        descBullets: ["Currently working on Kudi Market Place product"]
      },
      {
        role: "Frontend Engineer",
        company: "DuroNetworks",
        companylogo: duro,
        date: "July 2020 – May 2021",
        desc: "DuroNetworks is a financial technology organization that provides fast and convenient transaction. Worked on the following products alongside team members from scratch.",
        descBullets: [
          "GetriPay - Provides users with bank accounts and has fetaures of inter and intra bank transfers, bill payments(airtime, data, cable tv etc), loans, bulk payments.",
          "GetriSave - GetriSave allows users to cultivate an healthy savings habit either through indiviual savings, group savings or by enabling auto save.",
          "GetriVest - GetriVest allows user invest in a particular product for a given amount of time.",
          "GetriShop - Provides all the features of a virtual shop you can think of"
        ]
      },
      {
        role: "Software Engineer Intern",
        company: "Grandilo Technology",
        companylogo: grandilo,
        date: "Dec 2019 – Mar 2020",
        desc: "Grandilo is a software development company",
        descBullets: [
          "Developed, enhanced and maintained front end functionalites of website",
          "Developed 3 responsive websites"
        ]
      }
    ]
  };
export default workExperiences
