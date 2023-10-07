import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="copyright">
        &copy; Copyright {new Date().getFullYear()} by BetterBooks Inc.
      </p>
    </footer>
  );
}
