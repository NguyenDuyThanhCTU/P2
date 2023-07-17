import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaCloudUploadAlt } from "react-icons/fa";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getStorage } from "firebase/storage";

import { notification } from "antd";

import { useStateProvider } from "../../../../../Context/StateProvider";
import Input from "../../../Item/Input";
import {
  addDocument,
  getDocumentByField,
} from "../../../../../Config/Services/Firebase/FireStoreDB";
import { AdminPostSection } from "../../../../../Utils/item";

const AddProduct = ({ type }) => {
  const [imageUrl, setImageUrl] = useState();
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [error, setError] = useState(false);
  const [Section, setSection] = useState("Thông Tin Mới");
  const [Type, setType] = useState("");
  const [DataFetch, setDataFetch] = useState([]);
  const { setIsUploadProduct, setIsRefetch } = useStateProvider();

  useEffect(() => {
    getDocumentByField("posttype", "section", Section).then((data) => {
      setDataFetch(data);
      setType(data[0]?.name);
    });
  }, [Section]);

  const handleDiscard = () => {
    setImageUrl();
    setTitle("");
    setContent("");
  };

  const HandleSubmit = () => {
    if (!Title || !Content) {
      notification["error"]({
        message: "Tải lên không thành công!",
        description: `Vui lòng bổ sung đầy đủ thông tin !`,
      });
    } else {
      let Post = "";
      if ((type = "chủ")) {
        Post = "Home";
      } else {
        Post = "News";
      }
      const data = {
        image: "",
        content: Content,
        title: Title,
        post: Post,
        section: Section,
        type: Type,
      };

      addDocument("posts", data).then(() => {
        notification["success"]({
          message: "Tải lên thành công!",
          description: `Sản phẩm của bạn đã được tải lên !`,
        });
        setIsRefetch("Add Home Post");
        handleDiscard();
      });
    }
  };

  const uploadImage = async (e) => {
    let selectImage = e.target.files[0];
    const filetypes = ["image/jpeg", "image/jpg", "image/png"];

    if (filetypes.includes(selectImage.type)) {
      const storage = getStorage();
      let storageRef = ref(storage, `${selectImage.name}`);
      if (type === "Home") {
        storageRef = ref(storage, `Post/Home/${selectImage.name}`);
      } else if (type === "News") {
        storageRef = ref(storage, `Post/News/${selectImage.name}`);
      }

      uploadBytes(storageRef, selectImage)
        .then((snapshot) => {
          console.log("Uploaded a blob or file!");

          getDownloadURL(snapshot.ref)
            .then((url) => {
              setImageUrl(url);
            })
            .catch((error) => {
              console.error("Error getting download URL:", error);
            });
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    } else {
      setError(true);
    }
  };

  return (
    <div
      className={`bg-[rgba(0,0,0,0.3)] w-full 
       h-full
      z-50 absolute rounded-md duration-300`}
    >
      <div className="w-[1500px] h-[700px] absolute bg-white bottom-[15%] left-[12%]  font-LexendDeca cursor-pointer rounded-sm flex flex-col justify-center">
        <p className="text-2xl font-bold text-center text-[30px] mb-5">
          Tải bài viết lên Trang {type} của bạn
        </p>
        <div className="flex">
          <div className="justify-center   w-full flex items-center gap-20">
            <div className="">
              <div className="">
                <p className="text-md text-gray-400 mt-1">
                  Chọn ảnh cho bài viết của bạn
                </p>
              </div>
              <div className=" border-dashed rounded-xl border-4 border-gray-200 flex flex-col justify-center items-center  outline-none mt-5 w-[260px] h-[458px] p-10 cursor-pointer hover:border-red-300 hover:bg-gray-100">
                {imageUrl ? (
                  <div>
                    <img
                      src={imageUrl}
                      className="w-[100%] h-[100%] object-cover"
                      alt=""
                    />
                    <label>
                      <p className="bg-[#F51997] text-center mt-8 rounded text-white text-md font-medium p-2 w-52 outline-none">
                        Chọn lại
                      </p>
                      <input
                        id="fileInput"
                        type="file"
                        onChange={(e) => uploadImage(e)}
                        className="w-0 h-0"
                      />
                    </label>
                  </div>
                ) : (
                  <label className="cursor-pointer">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="flex flex-col justify-center items-center">
                        <p className="font-bold text-xl">
                          <FaCloudUploadAlt className="text-gray-300 text-6xl" />
                        </p>
                        <p className="text-xl font-semibold">
                          Chọn hình ảnh để tải lên
                        </p>
                      </div>
                      <p className="text-gray-400  text-center mt-10 text-sm leading-10">
                        Định dạng jpg hoặc png <br />
                      </p>
                      <p className="bg-[#0047AB] hover:bg-[#0000FF] text-center mt-8 rounded text-white text-md font-medium p-2 w-52 outline-none">
                        Chọn từ thiết bị
                      </p>
                    </div>
                    <input
                      type="file"
                      onChange={(e) => uploadImage(e)}
                      className="w-0 h-0"
                      id="fileInput"
                    />
                  </label>
                )}
              </div>
              {error && (
                <p className="text-center text-xl text-red-400 font-semibold mt-4 w-[260px]">
                  Vui lòng chọn đúng định dạng
                </p>
              )}
            </div>
            <div className="flex items-center gap-10">
              <form class=" max-w-lg w-[500px]">
                <Input
                  text="Tiêu đề bài viết"
                  Value={Title}
                  setValue={setTitle}
                  type="input"
                />
                <Input
                  text="Nội dung bài viết"
                  Value={Content}
                  setValue={setContent}
                  type="textarea"
                />

                <div className="flex flex-col gap-2">
                  <label className="block text-gray-700 text-sm font-bold ">
                    Section:
                  </label>
                  <select
                    className="outline-none lg:w-650 border-2 border-gray-200 text-md capitalize lg:p-4 p-2 rounded cursor-pointer"
                    onChange={(e) => {
                      setSection(e.target.value);
                    }}
                  >
                    {AdminPostSection?.map((item) => (
                      <option
                        key={item.name}
                        className=" outline-none capitalize bg-white text-gray-700 text-md p-2 hover:bg-slate-300"
                        value={item.name}
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2 mt-5">
                  <label className="block text-gray-700 text-sm font-bold  ">
                    Loại bài viết:
                  </label>
                  <select
                    className="outline-none lg:w-650 border-2 border-gray-200 text-md capitalize lg:p-4 p-2 rounded cursor-pointer "
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                  >
                    {DataFetch?.map((item, idx) => (
                      <option
                        key={idx}
                        className=" outline-none capitalize bg-white text-gray-700 text-md p-2 hover:bg-slate-300 "
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
              </form>
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

export default AddProduct;
