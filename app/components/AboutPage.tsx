import Image from "next/image";
import Link from "next/link";
import { FaBookOpen, FaFilm, FaGamepad, FaSpotify } from "react-icons/fa";
import { aboutImageAssets, journeyCards } from "../data/about";
import { getAboutImageUrl } from "../lib/about-images";

const cardIcons = {
  spotify: FaSpotify,
  bingeboxd: FaFilm,
  goodreads: FaBookOpen,
  backloggd: FaGamepad,
} as const;

function ApplePhotosMark() {
  return <svg className="apple-photos-mark" viewBox="0 0 32 32" aria-hidden="true">
    <ellipse cx="16" cy="7.2" rx="3.6" ry="6.3" fill="#ff5b57" />
    <ellipse cx="16" cy="7.2" rx="3.6" ry="6.3" fill="#ff9f0a" transform="rotate(45 16 16)" />
    <ellipse cx="16" cy="7.2" rx="3.6" ry="6.3" fill="#ffd60a" transform="rotate(90 16 16)" />
    <ellipse cx="16" cy="7.2" rx="3.6" ry="6.3" fill="#34c759" transform="rotate(135 16 16)" />
    <ellipse cx="16" cy="7.2" rx="3.6" ry="6.3" fill="#30d5c8" transform="rotate(180 16 16)" />
    <ellipse cx="16" cy="7.2" rx="3.6" ry="6.3" fill="#0a84ff" transform="rotate(225 16 16)" />
    <ellipse cx="16" cy="7.2" rx="3.6" ry="6.3" fill="#5e5ce6" transform="rotate(270 16 16)" />
    <ellipse cx="16" cy="7.2" rx="3.6" ry="6.3" fill="#bf5af2" transform="rotate(315 16 16)" />
    <circle cx="16" cy="16" r="3.2" fill="#fff" />
  </svg>;
}

export async function AboutPage() {
  const portraitUrl = await getAboutImageUrl("portrait");
  const cards = await Promise.all(journeyCards.map(async (card) => ({ ...card, image: await getAboutImageUrl(card.id), alt: aboutImageAssets[card.id].alt })));

  return (
    <main className="about-page">
      <header className="about-header">
        <Link href="/" className="about-back">← Portfolio</Link>
        <p>About Prince</p>
      </header>

      <section className="journey" aria-labelledby="journey-title">
        <h1 id="journey-title">My Journey</h1>
        <div className="journey-grid">
          <article className="journey-intro">
            <div className="journey-photo">
              <Image src={portraitUrl} alt={aboutImageAssets.portrait.alt} fill sizes="(max-width: 720px) 100vw, 360px" priority />
              <span className="photo-badge" aria-label="Apple Photos gallery"><ApplePhotosMark /></span>
            </div>
            <div className="journey-copy">
              <p>I&apos;m Prince Das, Developer + Designer originally from India <span aria-label="India">🇮🇳</span>. After my graduation, I started building my career in web development and UI/UX design.</p>
              <p>Sports and Music helped shape who I am. I spent my free time learning about new technologies and experimenting with creative coding.</p>
              <p>My first design adventure started with a few Figma frames and late-night curiosity turning ideas into reality.</p>
            </div>
          </article>

          {cards.map((card) => {
            const Icon = cardIcons[card.id];
            return (
              <article className={`journey-card journey-card--${card.id}`} key={card.id}>
                <div className="journey-art"><Image src={card.image} alt={card.alt} fill sizes="(max-width: 680px) 100vw, 360px" /></div>
                <div className="journey-card__meta">
                  <div><h2>{card.label}</h2><p>{card.subtitle}</p></div>
                  <Icon aria-hidden="true" />
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
