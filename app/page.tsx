import Image from "next/image";
import _Header from "./_components/header";
import _Accueil from "./_components/accueil";
import _Apropos from "./_components/apropos";
import _MySkils from "./_components/my-skills";
// import _ProjectTabs from "./_components/project";
import _ProjectTabs from "./_components/project_tabs";
import _Contact from "./_components/contact";
import _Contact_flottant from "./_components/contact_flottant";

export default function Home() {
  return (
    <main>
      {/* <_Header /> */}
      <_Accueil />
      <_Apropos />
      <_MySkils />
      <_ProjectTabs />
      <_Contact_flottant />
      {/* <_ProjectTabs /> */}
      {/* <_Contact /> */}
    </main>
  );
}
