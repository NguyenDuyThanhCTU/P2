import React from "react";

const Section6 = () => {
  return (
    <div className="flex h-screen w-full items-center">
      <div className="flex-1 font-Montserrat  ">
        <div className="p-[100px] flex flex-col gap-5">
          <h3 className="text-[32px] font-light">Dịch vụ hậu mãi</h3>
          <div>
            <h4 className="font-semibold text-[22px]">Chính sách bảo hành</h4>
            <p>
              Xe được bảo hành 03 năm hoặc 150.000km tùy theo điều kiện nào đến
              trước
            </p>
            <p>
              Pin xe được bảo hành 07 năm hoặc 150.000km tùy theo điều kiện nào
              đến trước
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[22px]">Đặt lịch bảo dưỡng</h4>
            <p>
              Quý Khách hàng vui lòng liên hệ đại lý của TMT Motors gần nhất
              hoặc gọi cho số hotline 1900 545462 để được hỗ trợ các vấn đề Dịch
              vụ hậu mãi
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <img
          src="https://wuling-ev.vn/Content/images/img-service.jpg"
          alt="img"
        />
      </div>
    </div>
  );
};

export default Section6;
