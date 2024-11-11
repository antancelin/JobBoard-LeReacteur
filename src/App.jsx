import "./App.css";

import Title from "./components/Title";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      {/* HEADER */}
      <header>
        <Title name="The Job Board" />
      </header>
      {/* MAIN */}
      <main>
        <div className="container">
          <Jobs
            className="red"
            title="Full Time Sales - Sydney Boutique"
            contractType="CDI"
            country="Australie"
            city="Syndey"
          />
          <Jobs
            className="green"
            title="Agent de Sécurité - Pantin"
            contractType="CDI"
            country="France"
            city="Pantin"
          />
          <Jobs
            className="yellow"
            title="Responsable d'Atelier (H/F)"
            contractType="CDD"
            country="France"
            city="Paris"
          />
          <Jobs
            className="blue"
            title="Chef de Projets"
            contractType="CDD"
            country="France"
            city="Paris"
          />
          <Jobs
            className="pink"
            title="Développeur React.js"
            contractType="CDI"
            country="France"
            city="Paris"
          />
          <Jobs
            className="red"
            title="Sales Associate Stockholm"
            contractType="CDI"
            country="Suède"
            city="Stockholm"
          />
          <Jobs
            className="green"
            title="Vendeur/se - Crans Montana"
            contractType="CDI"
            country="Suisse"
            city="Crans-Montana"
          />
          <Jobs
            className="yellow"
            title="CRM & Data Quality Analyst"
            contractType="CDI"
            country="USA"
            city="New-York"
          />
          <Jobs
            className="blue"
            title="Infirmier (H/F)"
            contractType="CDI"
            country="France"
            city="Pantin"
          />
        </div>
      </main>
      {/* FOOTER */}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
