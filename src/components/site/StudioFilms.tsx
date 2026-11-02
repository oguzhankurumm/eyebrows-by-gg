import { IG } from "@/lib/site";
import { Icon } from "./Icon";
const films = [
  {
    file: "nano-brows",
    poster: "ig-DdWwOkBheBV",
    title: "Nano brows",
    description: "A closer look at hair-stroke brow detail.",
    code: "DdWwOkBheBV",
  },
  {
    file: "client-stories",
    poster: "ig-DdCQ7h5O7UU",
    title: "Different faces. Individual designs.",
    description: "A selection of the studio’s clients and brow work.",
    code: "DdCQ7h5O7UU",
  },
  {
    file: "combo-brows",
    poster: "ig-DPOpz7wjgUO",
    title: "Combo brows",
    description: "Stroke detail and shading in GG’s original portfolio.",
    code: "DPOpz7wjgUO",
  },
  {
    file: "brow-transformation",
    poster: "ig-DPwH4WIjkCD",
    title: "The finished detail",
    description: "Brow work, filmed up close in the studio.",
    code: "DPwH4WIjkCD",
  },
];
export function StudioFilms() {
  return (
    <section className="section container studio-films" id="studio-films">
      <div className="section-heading">
        <div>
          <h2>
            From GG’s studio.
            <br />
            Into your feed.
          </h2>
          <p className="lead">
            The work, the faces and the detail.
            <br />
            Watch the original portfolio films.
          </p>
        </div>
        <a className="secondary-button" href={IG}>
          Follow @eyebrows_by_gg
          <Icon name="diagonal" size={18} />
        </a>
      </div>
      <div className="social-films">
        {films.map((film) => (
          <article className="social-film" key={film.code}>
            <video
              controls
              playsInline
              muted
              preload="none"
              poster={`/assets/photos/${film.poster}-640.webp`}
              width={540}
              height={960}
              aria-label={`${film.title}, silent studio portfolio film`}
            >
              <source
                src={`/assets/instagram/${film.file}.mp4`}
                type="video/mp4"
              />
              Your browser cannot play this film.
            </video>
            <div>
              <h3>{film.title}</h3>
              <p>{film.description}</p>
              <a href={`https://www.instagram.com/p/${film.code}/`}>
                Original Instagram post
                <Icon name="diagonal" size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="small muted film-note">
        Silent portfolio films. Open the original Instagram post for the
        published audio and caption.
      </p>
    </section>
  );
}
