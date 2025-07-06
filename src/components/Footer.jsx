import {
  Facebook,
  Globe,
  Instagram,
  LocateIcon,
  MailIcon,
  PhoneIcon,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white md:flex md:flex-row justify-between py-5 px-10 text-xs">
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col items-center justify-center">
          <span>
            <LocateIcon className="size-6 mb-2 hover:text-orange-500 cursor-pointer" />
          </span>
          <span className="text-center">
            Youth Resource Centre, <br />
            Near Kintampo Municipal Assembly
          </span>
        </div>
        <div className="flex flex-col items-center justify-center mt-2">
          <span className="flex flex-col items-center justify-center pointerr-cursor">
            <a href="mailto:infor@kya.org" aria-label="Send us an email">
              {" "}
              <MailIcon className="size-6 mb-2 hover:text-orange-500" />
            </a>
          </span>
          <span> info@kya-ghana.org</span>
        </div>
      </div>

      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col items-center justify-center">
          <a href="tel:+233200000000" aria-label="Call us">
            <span className="flex flex-col items-center justify-center">
              <PhoneIcon className="size-5 mb-2 hover:text-orange-500" />
            </span>
          </a>
          <span>+233 20 000 0000</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <a
            href="https://kya-ghana.org"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit KYA website"
          >
            <span className="flex flex-col items-center justify-center">
              <Globe className="size-6 mb-2 hover:text-orange-500" />
            </span>
          </a>
          <span>https://www.kya-ghana.org</span>
        </div>
      </div>

      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col items-center justify-center">
          <span>
            <Facebook className="size-5 mb-2" />
          </span>
          <span>Facebook</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            <Twitter className="size-6 mb-2" />
          </span>
          <span>Twitter</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            <Instagram className="size-5 mb-2" />
          </span>
          <span>Instagram</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
