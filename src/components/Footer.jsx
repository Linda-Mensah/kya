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
    <div className="bg-black text-white">
      <div className="div2">
        <div>
          <span>
            <LocateIcon />
          </span>
          <span>
            Youth Resource Centre, <br />
            Near Kintampo Municipal Assembly
          </span>
        </div>
        <div>
          <span>
            <MailIcon />
            <span> info@kya-ghana.org</span>
          </span>
        </div>
      </div>

      <div className="div2">
        <div>
          <span>
            <PhoneIcon />
          </span>
          <span>+233 20 000 0000</span>
        </div>
        <div>
          <span>
            <Globe />
            <span>http://www.kya-ghana.org</span>
          </span>
        </div>
      </div>

      <div className="div3">
        <div>
          <span>
            <Facebook />
          </span>
          <span>Facebook</span>
        </div>
        <div>
          <span>
            <Twitter />
            <span>Twitter</span>
          </span>
        </div>
        <div>
          <span>
            <Instagram />
            <span>Instagram</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
