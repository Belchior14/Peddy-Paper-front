import React from "react";
import "./homePage.css";
import Slider from "../../Components/Slider";


function HomePage() {
  return (
    <div className="homePage">
      <div className="logoContainer">
        <img
          className="logo"
          src="https://res.cloudinary.com/dmbxv880g/image/upload/v1695827435/HMS/logo_exyplp.jpg"
          alt="logo"
        />
      </div>

      <div>
       {<Slider/>}
      </div>

      <div className="threeContainers">
        <div className="missionContainer">
          <h4 className="containerTitle">Missão</h4>
          <p className="containerText">
            A nossa missão é oferecer soluções de impressão 3D de ponta que
            impulsionam a inovação, a produtividade e a criatividade.
            Trabalhamos com uma variedade de setores, desde prototipagem rápida
            até produção em série, para fornecer peças de qualidade excepcional.{" "}
          </p>
        </div>

        <div className="aboutUsContainer">
          <h4 className="containerTitle">Sobre nós</h4>
          <p className="containerText">
            Na HMS3DPrinting estamos compremetidos em transformar suas ideais em
            realidade tridimensional. Fundada no início de 2023, a nossa emmpresa
            dedica-se a fornecer serviços de impressão 3D de alta qualidade e
            soluções de fabricação personalizadas para atender às suas
            necessidades.
          </p>
        </div>

        <div className="servicesContainer">
          <h4 className="containerTitle">Serviços</h4>
          
            <p>Impressão 3D personalizadas</p>
            <p>Prototipagem rápida</p>
            <p>Modelagem 3D</p>
          
        </div>
      </div>
    </div>
  );
}

export default HomePage;
