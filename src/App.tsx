import { Hero } from "./components/heroSections/Hero";
import { Trending } from "./components/trendingGame/Trending";
import { Information } from "./components/informations/Information";
import { ChoosePath } from "./components/learning/ChoosePath";
import { ShowProjects } from "./components/projects/ShowProjects";
import { Subscribe } from "./components/subscribe/Subscribe";

export const App = () => {
   return (
      <div>
         <Hero />
         <Trending />
         <Information />
         <ChoosePath />
         <ShowProjects />
         <Subscribe />
      </div>
   );
};
