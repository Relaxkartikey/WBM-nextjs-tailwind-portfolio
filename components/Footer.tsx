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
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Address Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-teal-500">Address</h3>
          <p>WhiteBoxMedia Pvt Ltd</p>
          <p>123 Event Street</p>
          <p>New Delhi, India - 110001</p>
          <p>Email: info@whiteboxmedia.com</p>
        </div>

        {/* Pages Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-teal-500">Pages</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/portfolio" className="hover:underline">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* More Pages Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-teal-500">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/careers" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:underline">
                Terms & Conditions
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
          <span className="text-teal-500 font-bold">RelaxKartikey</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
