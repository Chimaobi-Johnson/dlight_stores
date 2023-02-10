import AboutPage from "../components/AboutPage/AboutPage";
import BasicLayout from "../components/layout/BasicLayout/BasicLayout";



export default function About () {
  
    return (
      <BasicLayout metaData={{
        title: "About Us | Delight Stores",
        description: "Everything household",
        keywords: "gift items, online store, wedding gifts, souvenirs, household items"
      }}>
        <AboutPage />
      </BasicLayout>
    )
  }
  