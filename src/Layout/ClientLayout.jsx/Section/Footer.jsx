import { CiLocationOn, CiMail } from "react-icons/ci";
import { BiChevronDown, BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FooterContact } from "../../../Utils/temp";
import { FooterRoles, IconMapping, SocialMedia } from "../../../Utils/item";

const Footer = () => {
  return (
    <div className="font-NunitoSans  h-screen w-full" id="Footer">
      <div className="overflow-hidden  h-[715px] relative">
        <img
          src="https://wuling-ev.vn/Content/images/bg-showroom-web.png"
          alt="image"
          className="object-bottom h-full  w-full"
        />
        <div className="bg-[rgba(0,0,0,.5)] absolute w-full h-full top-0 flex items-center justify-center ">
          <div className="text-white font-Montserrat flex flex-col items-center gap-5">
            <h3 className="text-[32px]">Hệ thống phân phối</h3>
            <div className=" border-b-2  text-[20px] w-[120%]">
              <div className="flex justify-between items-center py-2 ">
                <button className=" ">Tỉnh thành</button>
                <BiChevronDown className="text-[25px]" />
              </div>
            </div>
            <div className=" border-b-2  text-[20px] w-[120%]">
              <div className="flex justify-between items-center py-2 ">
                <button className=" ">Quận Huyện</button>
                <BiChevronDown className="text-[25px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-start gap-5text-[13px] pt-5">
        <div className="flex flex-col w-[400px]">
          <div className="flex items-center h-[54px] gap-5">
            <img
              src="https://wuling-ev.vn/Content/images/logo-TMT.svg"
              alt="logo"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/xedienmientay-346f8.appspot.com/o/Xe%20%C4%90i%E1%BB%87n%20Mi%E1%BB%81n%20T%C3%A2y.png?alt=media&token=27e5018e-ffbe-4c11-9e08-11ba0d15c594"
              alt="logo"
              className="h-full"
            />
          </div>

          <div className="mt-2 flex flex-col gap-2">
            <div className="flex items-start gap-1">
              <CiLocationOn className="w-10 h-6  text-blue-600" />
              <p>
                Trụ sở chính: Tòa nhà Coninco, số 4 Tôn Thất Tùng, Phường Trung
                Tự, Quận Đống Đa, TP. Hà Nội, Việt Nam.{" "}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <BiPhoneCall className="text-blue-600" />
              <p>1900545462</p>
            </div>
            <div className="flex items-center gap-1 text-blue-600">
              <CiMail className="" />
              <p>trungtamcskh@tmt-vietnam.com </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[210px] gap-2">
          {FooterContact.map((items, idx) => (
            <div key={idx}>
              <h3 className="font-light uppercase ">{items.name}</h3>
              {items.items && (
                <div className="ml-4">
                  {items.items.map((items, idx) => (
                    <li className="text-[12px] text-[#666666]">{items.name}</li>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3 uppercase ">
          {FooterRoles.map((items, idx) => (
            <div key={idx} className="hover:text-blue-600">
              <Link href={items.link}>{items.name}</Link>
            </div>
          ))}
        </div>
        <div>
          <h3>Kết nối với chúng tôi</h3>
          <div className="flex mt-2 gap-2">
            {SocialMedia.map((items, idx) => {
              let Icon = IconMapping[items.icon];
              return (
                <div
                  key={idx}
                  className={`text-[15px] cursor-pointer border p-1 border-blue-600 text-blue-600 hover:scale-125 duration-300`}
                >
                  {Icon && <Icon />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
