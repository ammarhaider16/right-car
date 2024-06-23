import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url("/body-background.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="intro-container">
        <div
          className="intro-container-textbox"
          style={{ justifyContent: "flex-start" }}>
          Options.
        </div>
        <div
          className="intro-container-textbox"
          style={{ justifyContent: "center" }}>
          Options.
        </div>
        <div
          className="intro-container-textbox"
          style={{ justifyContent: "flex-end" }}>
          Options.
        </div>

        <div className="info-container">
          <div>
            <p style={{ fontSize: "3.5vh", fontWeight: "bold" }}>
              find the Right Car with our AI
            </p>
            <p>
              With over 400+ models on sale today, it is hard to make a choice.
              Our AI simplifies everything for you.
            </p>
          </div>
          <button
            className="button"
            style={{ marginTop: "20px", fontFamily: "Poppins" }}>
            <Link href="/generate">Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
