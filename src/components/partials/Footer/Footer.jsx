import { useContext } from "react";
import {
  FacebookIcon,
  MessageIcon,
  PhoneIcon,
  YoutubeIcon,
} from "../../ui/Icon/Icon";
import { TranslationContext } from "../../../context/TranslationContext";

const Footer = () => {
  const { language, t } = useContext(TranslationContext);

  const company = t("footer.company")
  const introduction = t("footer.introduction")

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container--item">
          <h4 className="text-lg text-light font-bold title">
            {company.name}
          </h4>
          <div className="flex flex-col gap-[1rem] information">
            <p className="text-gray-500 text-md break-words">
              <span className="text-light font-bold">{language === 'vi' ? 'Địa Chỉ:' : 'Address:'}</span> {company.address}
            </p>
            <p className="text-gray-500 text-md break-words">
              <span className="text-light font-bold">{language === 'vi' ? 'Xưởng SX:' : 'Factory:'}</span> {company.factory}
            </p>
            <p className="text-gray-500 text-md break-words">
              <span className="text-light font-bold">{language === 'vi' ? 'Điện thoại:' : 'Phone Number:'}</span> {company.phoneNumber}
            </p>
            <p className="text-gray-500 text-md break-words">
              <span className="text-light font-bold">Email:</span>{" "}
              {company.email}
            </p>
            <p className="text-gray-500 text-md break-words">
              <span className="text-light font-bold">{language === 'vi' ? 'Thời gian làm việc:' : 'Working:'}</span>{" "}
              {company.working}
            </p>
            <p className="text-gray-500 text-md break-words">
              <span className="text-light font-bold">Website:</span>{" "}{company.website}
            </p>
          </div>
        </div>

        <div className="footer__container--item px-[7rem]">
          <h4 className="text-lg text-light font-bold title grid grid-cols-1">
            {introduction.title}
          </h4>
          <div className="flex flex-col gap-[1rem] information">
            <p className="text-gray-500 text-md break-words">{introduction.founder}</p>
            <p className="text-gray-500 text-md break-words">{introduction.workshop}</p>
            <p className="text-gray-500 text-md break-words">{introduction.personal}</p>
            <p className="text-gray-500 text-md break-words">
              {introduction.recruitment}
            </p>
            <p className="text-gray-500 text-md break-words">
              {introduction.process}
            </p>
            <p className="text-gray-500 text-md break-words">{introduction.channel}</p>
            <div className="social">
              <span className="w-[3.2rem] h-[3.2rem] rounded-[5rem] flex items-center justify-center bg-blue-500">
                <FacebookIcon />
              </span>
              <span className="w-[3.2rem] h-[3.2rem] rounded-[5rem] flex items-center justify-center bg-light-dark">
                <MessageIcon />
              </span>
              <span className="w-[3.2rem] h-[3.2rem] rounded-[5rem] flex items-center justify-center bg-green-500">
                <PhoneIcon />
              </span>
              <span className="w-[3.2rem] h-[3.2rem] rounded-[5rem] flex items-center justify-center bg-red-500">
                <YoutubeIcon />
              </span>
            </div>
          </div>
        </div>

        <div className="footer__container--item px-[7rem]">
          <h4 className="text-lg text-light font-bold title grid grid-cols-1">
            {introduction.title}
          </h4>
          <div className="flex flex-col gap-[1rem] information">
            <p className="text-gray-500 text-md break-words">{introduction.founder}</p>
            <p className="text-gray-500 text-md break-words">{introduction.workshop}</p>
            <p className="text-gray-500 text-md break-words">{introduction.personal}</p>
            <p className="text-gray-500 text-md break-words">
              {introduction.recruitment}
            </p>
            <p className="text-gray-500 text-md break-words">
              {introduction.process}
            </p>
            <p className="text-gray-500 text-md break-words">{introduction.channel}</p>
            <div className="social">
              <span className="w-[3.2rem] h-[3.2rem] rounded-[5rem] flex items-center justify-center bg-blue-500">
                <FacebookIcon />
              </span>
              <span className="w-[3.2rem] h-[3.2rem] rounded-[5rem] flex items-center justify-center bg-light-dark">
                <MessageIcon />
              </span>
              <span className="w-[3.2rem] h-[3.2rem] rounded-[5rem] flex items-center justify-center bg-green-500">
                <PhoneIcon />
              </span>
              <span className="w-[3.2rem] h-[3.2rem] rounded-[5rem] flex items-center justify-center bg-red-500">
                <YoutubeIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
