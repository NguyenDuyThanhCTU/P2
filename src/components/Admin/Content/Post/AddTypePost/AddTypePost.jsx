import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import { Popconfirm, message, notification } from "antd";

import { useStateProvider } from "../../../../../Context/StateProvider";
import Input from "../../Item/Input";
import { AdminPostSection } from "../../../../../Utils/item";
import { useData } from "../../../../../Context/DataProviders";
import { FiEdit } from "react-icons/fi";
import { FcViewDetails } from "react-icons/fc";
import { MdDeleteForever } from "react-icons/md";
import { addDocument } from "../../../../../Config/Services/Firebase/FireStoreDB";

const AddTypePost = () => {
  const [Type, setType] = useState("Thông tin mới");
  const [Name, setName] = useState("");
  const { setIsRefetch, setIsUploadProduct } = useStateProvider();
  const { TypePost } = useData();

  const handleDiscard = () => {
    setType("Thông tin mới");
    setName("");
  };

  const HandleSubmit = () => {
    if (!Name) {
      notification["error"]({
        message: "Lỗi !",
        description: `
            Vui lòng nhập thông tin trước khi THÊM MỚI !`,
      });
    }
    const data = {
      section: Type,
      name: Name,
    };

    addDocument("posttype", data).then(() => {
      notification["success"]({
        message: "Thành công !",
        description: `
      Thông tin đã được CẬP NHẬT !`,
      });
      setIsRefetch("addHomeType");
      setName("");
    });
  };

  return (
    <div
      className={`bg-[rgba(0,0,0,0.3)] w-full 
       h-full
      z-50 absolute rounded-md duration-300`}
    >
      <div className="w-[1500px] h-[700px] absolute bg-white bottom-[15%] left-[12%] flex font-LexendDeca cursor-pointer rounded-sm ">
        <div className="justify-center   w-full flex items-center gap-20">
          <div className="w-[500px] h-[400px]">
            <p className="text-2xl font-bold text-center mb-3">
              Danh sách thể loại bài viết
            </p>
            <div className="grid  cols-4 items-center py-2  justify-start  border-t border-l border-r border-black">
              <p> </p>
              <p>Tên thể loại</p>
              <p>Section</p>
              <p>Thời gian</p>
            </div>
            <div className="w-full border border-black h-[300px] overflow-y-scroll">
              {TypePost?.map((data, idx) => (
                <div
                  key={idx}
                  className="grid  cols-4 items-center  my-5  ml-1  px-5 "
                >
                  <div className="group relative ">
                    <FiEdit className="text-red-600 hover:scale-125 duration-300 " />
                    <div className="w-[120px] bg-white opacity-90 absolute -top-2 h-8 left-5 rounded-lg hidden group-hover:block ">
                      <div className="mx-3 flex  justify-between text-[24px] h-full items-center ">
                        <FcViewDetails className="hover:scale-125 duration-300" />
                        <FiEdit className="text-green-600 hover:scale-125 duration-300" />
                        <Popconfirm
                          title="Xóa sản phẩm"
                          description="Bạn muốn xóa sản phẩm này?"
                          //   onConfirm={() => {
                          //     HandleDelete(data.id);
                          //   }}
                          onCancel={() => {
                            message.error("Sản phẩm chưa được xóa!");
                          }}
                          okText="Yes"
                          okType="danger"
                          cancelText="No"
                        >
                          <MdDeleteForever className="text-red-600 hover:scale-125 duration-300" />
                        </Popconfirm>
                      </div>
                      <div className="absolute bg-none w-3 h-8 top-0 -left-2"></div>
                    </div>
                  </div>
                  <p className=" w-[100px]">{data.name}</p>

                  <div className=" truncate">{data.section}</div>
                  <div className="ml-5">
                    {data.daysSinceCreation > 0 ? (
                      <div>
                        {" "}
                        <p className="text-[12px] w-[85px] truncate  py-1 border px-2 rounded-3xl text-orange-300 border-orange-300">
                          {data.daysSinceCreation} ngày trước
                        </p>
                      </div>
                    ) : (
                      <>
                        {" "}
                        <p className="text-[12px] w-[65px] truncate  border px-2 py-1 rounded-3xl text-green-300 border-green-300">
                          Bây giờ
                        </p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[500px] ">
            <p className="text-2xl font-bold text-center mb-3">
              Thêm thể loại bài viết
            </p>

            <div>
              <Input text="Tên thể loại" Value={Name} setValue={setName} />
              <div className="flex flex-col gap-2">
                <label className="text-md font-medium ">Section:</label>
                <select
                  className="outline-none lg:w-650 border-2 border-gray-200 text-md capitalize lg:p-4 p-2 rounded cursor-pointer"
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                >
                  {AdminPostSection?.map((item, idx) => (
                    <option
                      key={idx}
                      className=" outline-none capitalize bg-white text-gray-700 text-md p-2 hover:bg-slate-300"
                      value={item.name}
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-6 mt-10">
                <button
                  onClick={() => handleDiscard()}
                  type="button"
                  className="border-gray-300 border-2 text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
                >
                  Xóa
                </button>
                <button
                  //disabled={videoAsset?.url ? false : true}
                  onClick={() => HandleSubmit()}
                  type="button"
                  className="bg-[#df6cad] hover:bg-red-500 focus:outline-none focus:shadow-outline text-white text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
                >
                  Tải lên
                </button>
              </div>
            </div>
          </div>
        </div>

        <AiFillCloseCircle
          className="absolute -top-5 -right-5 text-[40px] border-white border-4 bg-black rounded-3xl text-white "
          onClick={() => {
            setIsUploadProduct("");
          }}
        />
      </div>
    </div>
  );
};

export default AddTypePost;
