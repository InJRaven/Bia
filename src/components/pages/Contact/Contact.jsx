import { FaSquarePhoneFlip } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className="w-full rounded-[0.6rem] h-[50vh] bg-gray-100 flex flex-col items-center justify-center gap-[2.4rem]">
      <div className="flex flex-col items-center justify-center gap-[1.8rem]">
        <h3 className="text-display-sm font-bold text-dark">
          Thông tin liên hệ
        </h3>
        <div className="flex flex-col gap-[1.8rem]">
          <p className="text-lg font-medium">Số 999 đường 2/9</p>
          <p className="text-lg font-medium flex gap-[0.5rem] items-center">
            0363 *** *** <FaSquarePhoneFlip className="h-[3rem] w-[3rem]" />
          </p>
          <p className="text-lg font-medium flex gap-[0.5rem] items-center">
            0905 *** *** <FaSquarePhoneFlip className="h-[3rem] w-[3rem]" />
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-[1.8rem]">
        <h3 className="text-display-sm font-bold text-dark">Email</h3>
        <p className="text-lg font-medium">account@gmail.com</p>
      </div>
    </div>
  );
};
export default Contact;
