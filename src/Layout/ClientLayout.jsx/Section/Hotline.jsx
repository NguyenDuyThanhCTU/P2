import { BiPhoneCall } from "react-icons/bi";
import { SiZalo } from "react-icons/si";
function Hotline() {
  return (
    <div className="fixed bottom-7 right-10 z-20 box-border flex flex-col gap-5">
      <div className="">
        <SiZalo className="text-white bg-blue-500 h-16 w-16 p-3 rounded-full" />
      </div>
      <div className="flex items-center">
        <div className="text-black font-semibold p:hidden  rounded-full w-[250px]  h-[60px] bg-white shadow-2xl absolute right-5 flex items-center ">
          <a href="tel:0971706658">
            <span className="ml-5">Liên hệ với chúng tôi</span>
          </a>
        </div>
        <div className="h-16 w-16 call-animation">
          <BiPhoneCall className="text-white text-[40px]" />
        </div>
      </div>
    </div>
  );
}

export default Hotline;
