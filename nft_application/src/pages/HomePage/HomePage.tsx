import "./HomePage.sass";

import { Header } from "../../components/header_main_page/header";
import { Hero } from "../../components/mainPage/sections/hero/hero";
import { VideoSection } from "../../components/mainPage/sections/video/video_section";
import { Gotchies } from "../../components/mainPage/sections/gotchies/gotchies";
import { Avatars } from "../../components/mainPage/sections/avatars/avatars";
import { Features } from "../../components/mainPage/sections/features/features";
import { Platform } from "../../components/mainPage/sections/platform/platform";
import { Crafting } from "../../components/mainPage/sections/crafting/crafting";
import { Adventures } from "../../components/mainPage/sections/adventures/adventures";
import { Housing } from "../../components/mainPage/sections/housing/housing";
import { Roulette } from "../../components/mainPage/sections/roulette/roulette";
import { Pvp } from "../../components/mainPage/sections/pvp/pvp";
import { Tokens } from "../../components/mainPage/sections/tokens/tokens";
import { Team } from "../../components/mainPage/sections/team/team";
import { Roadmap } from "../../components/mainPage/sections/roadmap/roadmap";
import { Footer } from "../../components/mainPage/sections/footer/footer";
import { Partners } from "../../components/mainPage/sections/partners/partners";
import { Sales } from "../../components/mainPage/sections/sales/sales";
import { Special } from "../../components/mainPage/sections/special/special";

export function HomePage() {
  return (
    <>
      <div className="full_container">
        <Header />

        {/* Bg handlers */}

        <div className="first-bg-handler">
          {/* Content sections */}
          <Hero />

          <VideoSection />

          <Gotchies />

          <Avatars />

          <Features />

          <Platform />
        </div>

        <div className="sec-bg-handler">
          {/* Content sections */}
          <Crafting />

          <Adventures />

          <Housing />

          <Roulette />

          <Pvp />

          <div className="third-bg-handler">
            {/* Content sections */}
            <Tokens />

            <Team />

            <Roadmap />

            <Partners />

            <Special />

            <Sales />

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
