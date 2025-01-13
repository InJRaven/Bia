import {
  FacebookIcon,
  MessageIcon,
  PhoneIcon,
  YoutubeIcon,
} from "../../ui/Icon/Icon";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container--item">
          <h4 className="text-lg text-light font-bold title">
            Công ty TNHH KINKIN DECOR
          </h4>
          <div className="flex flex-col gap-[1rem] information">
            <p className="text-gray-500 text-md break-words">
              <span className="text-light font-bold">Địa Chỉ:</span> Số 19 Ngõ
              68 Phố Lưu Hữu Phước, Cầu Diễn, Nam Từ Liêm, Hà Nội
            </p>
            <p className="text-gray-500 text-md break-words">
              <span className="text-light font-bold">Xưởng SX:</span> Số 19 Ngõ
              68 Phố Lưu Hữu Phước, Cầu Diễn, Nam Từ Liêm, Hà Nội
            </p>
            <p className="text-gray-500 text-md break-words">
              <span className="text-light font-bold">Điện thoại:</span> 097 955
              xx xx
            </p>
            <p className="text-gray-500 text-md break-words">
              <span className="text-light font-bold">Email:</span>{" "}
              toan.dm@webdemo.com
            </p>
            <p className="text-gray-500 text-md break-words">
              <span className="text-light font-bold">Thời gian làm việc:</span>{" "}
              8:00h - 18h:00(T2-T7)
            </p>
            <p className="text-gray-500 text-md break-words">
              <span className="text-light font-bold">Website:</span> webdemo.com
            </p>
          </div>
        </div>

        <div className="footer__container--item px-[7rem]">
          <h4 className="text-lg text-light font-bold title grid grid-cols-1">
            Giới thiệu
          </h4>
          <div className="flex flex-col gap-[1rem] information">
            <p className="text-gray-500 text-md break-words">Sáng lập</p>
            <p className="text-gray-500 text-md break-words">Xưởng sản xuất</p>
            <p className="text-gray-500 text-md break-words">Nhân sự công ty</p>
            <p className="text-gray-500 text-md break-words">
              Tuyển dụng nhân sự
            </p>
            <p className="text-gray-500 text-md break-words">
              Quy trình làm việc
            </p>
            <p className="text-gray-500 text-md break-words">Kênh Youtube</p>
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
            Giới thiệu
          </h4>
          <div className="flex flex-col gap-[1rem] information">
            <p className="text-gray-500 text-md break-words">Sáng lập</p>
            <p className="text-gray-500 text-md break-words">Xưởng sản xuất</p>
            <p className="text-gray-500 text-md break-words">Nhân sự công ty</p>
            <p className="text-gray-500 text-md break-words">
              Tuyển dụng nhân sự
            </p>
            <p className="text-gray-500 text-md break-words">
              Quy trình làm việc
            </p>
            <p className="text-gray-500 text-md break-words">Kênh Youtube</p>
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
