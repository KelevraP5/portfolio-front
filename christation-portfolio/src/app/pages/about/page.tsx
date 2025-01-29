import "../../styles/reset.css";
import "../../styles/globals.css";

export default function About() {
  return (
    <section className="about-section w-full h-full relative">
      <div className="bg-deco w-full bg-green-500"></div>

      <div className="infos-canva w-full h-full absolute top-0 border border-solid border-1">
        <div className="wrap">
          <div className="identite flex justify-start items-center bg-red-600">
            <div className="img-moi w-[152px] h-[152px] aspect-square bg-pink-500">
              {/* <picture>
                <source srcSet="" type="image/webp" className="" />
                <img src="" alt="image christophe nehlig" />
              </picture> */}
            </div>

            <div className="nom-prenom">
              <p className="text-font-64px font-titre">Christophe Nehlig</p>
            </div>
          </div>

          <div className="infos-about flex justify-between items-center">
            <div className="about-menu w-[45vw]">
                <ul className="w-full flex flex-col">
                    <div>
                        <li>à propos de moi</li>
                    </div>

                    <div>
                        <li>mes formations</li>
                    </div>

                    <div>
                        <li>mes expériences professionnelles</li>
                    </div>
                </ul>
            </div>

            <div className="cadre-texte-about w-[40vw] border border-1 border-solid">
                <div className="texte-about moi">
                    <p>A propos de moi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur culpa ratione aliquid necessitatibus, quas incidunt ad velit sequi natus deserunt.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ullam consequuntur delectus cumque, rem quam ab non voluptatum laudantium architecto omnis quibusdam, eligendi mollitia molestiae, saepe animi ea dolores sint.</p>
                </div>

                <div className="texte-about formations">
                    <p>Mes formations. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur culpa ratione aliquid necessitatibus, quas incidunt ad velit sequi natus deserunt.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ullam consequuntur delectus cumque, rem quam ab non voluptatum laudantium architecto omnis quibusdam, eligendi mollitia molestiae, saepe animi ea dolores sint.</p>
                </div>

                <div className="texte-about exp-pro">
                    <p>Mes experiences pro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur culpa ratione aliquid necessitatibus, quas incidunt ad velit sequi natus deserunt.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ullam consequuntur delectus cumque, rem quam ab non voluptatum laudantium architecto omnis quibusdam, eligendi mollitia molestiae, saepe animi ea dolores sint.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
