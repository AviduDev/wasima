import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
      <Navbar />
      <title>{pageTitle}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </header>
  );
}
