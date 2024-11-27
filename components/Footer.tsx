import React from "react";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer id="footers" className="bg-black text-gray-200 py-12">
      {/* Address, Pages, and Social Links Section */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Address Section with Logo */}
        <div className="flex items-start space-x-4">
          <img src="/logo.svg" alt="WhiteBox Media Logo" className="w-12 h-12" />
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-500">Address</h3>
            <p>WhiteBoxMedia Pvt Ltd</p>
            <p>123 Event Street</p>
            <p>New Delhi, India - 110001</p>
            <p>Email: info@whiteboxmedia.com</p>
          </div>
        </div>

        {/* Pages Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-teal-500">Pages</h3>
          <ul className="space-y-2">
            <li>
              <a href="/contact" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="/team" className="hover:underline">
                Our Team
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-teal-500">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <AiOutlineGithub
                className="hover:scale-110 transition-transform text-teal-500"
                size={30}
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <AiOutlineTwitter
                className="hover:scale-110 transition-transform text-teal-500"
                size={30}
              />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <AiOutlineLinkedin
                className="hover:scale-110 transition-transform text-teal-500"
                size={30}
              />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <AiOutlineYoutube
                className="hover:scale-110 transition-transform text-teal-500"
                size={30}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Note */}
      <hr className="w-full h-0.5 mt-8 bg-gray-600 border-0" />
<div className="mt-6 text-center text-gray-400 text-sm">
  <p>
    © 2024 WhiteBoxMedia. Developed By{" "}
    <a
      href="https://linkedin.com/in/relaxkartikey"
      target="_blank"
      rel="noreferrer"
      className="text-teal-500 font-bold"
    >
      RelaxKartikey
    </a>.
  </p>
</div>

    </footer>
  );
};

export default Footer;
