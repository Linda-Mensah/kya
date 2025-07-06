import {
  Facebook,
  Globe,
  Instagram,
  LocateIcon,
  MailIcon,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white px-8 pt-8 pb-2 text-xs">
      <div className="top md:flex md:flex-row justify-around items-center">
        <div className="flex flex-col items-center justify-center gap-y-2 mb-5">
          <a href="mailto:info@kya-ghana.org">
            {" "}
            <span>
              <MailIcon className="text-orange-500 hover:text-orange-700 cursor-pointer" />
            </span>
          </a>
          <span> info@kya-ghana.org</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2 mb-5">
          <span>
            <LocateIcon className="text-orange-500 hover:text-orange-700 cursor-pointer" />
          </span>
          <span className="text-center">
            Youth Resource Centre,
            <br />
            Near Kintampo Municipal Assembly
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2">
          <a href="https://www.kya-ghana-org">
            <span>
              <Globe className="text-orange-500 hover:text-orange-700 cursor-pointer" />
            </span>
          </a>
          <span>www.kya-ghana.org</span>
        </div>
      </div>
      <hr className="my-2 text-gray-700" />
      <div className="flex flex-row justify-between text-[9px]">
        <div className="flex flex-row gap-x-2">
          <a href="www.facebook.com">
            <span>
              <Facebook className="size-3 hover:text-orange-500" />
            </span>
          </a>
          <a href="www.instagram.com">
            <span>
              <Instagram className="size-3 hover:text-orange-500" />
            </span>
          </a>
          <a href="www.twitter.com">
            <span>
              <Twitter className="size-3 hover:text-orange-500" />
            </span>
          </a>
        </div>
        <div>
          <p>&copy; 2025 Kintampo Youth Association. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
