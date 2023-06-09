import TypingAnimation from "./TypingAnimation";

const BannerContent = () => {
  return (
    <div className="banner-content">
      {/*Banner Text*/}
      <h1 className="mb-20">
        Boris <span>Čivčić</span>
      </h1>
      {/*Animated Text*/}
      <p className="cd-headline clip is-full-width">
        <span></span>{" "}
        <span className="cd-words-wrapper">
          <TypingAnimation />
        </span>
      </p>
    </div>
  );
};
export default BannerContent;
