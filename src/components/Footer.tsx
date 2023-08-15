import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer footer-center  w-full p-4 bg-gray-300 text-gray-800">
      <div className="text-center">
        <p>
          Copyright © 2023 -
          <Link
            className="font-semibold"
            to="https://github.com/BernabeSuarez"
            target="_blank"
          >
            Bernabe Suarez
          </Link>
        </p>
      </div>
    </footer>
  );
}
