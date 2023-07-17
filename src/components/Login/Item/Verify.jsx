import React, { useEffect, useState } from "react";
import { Modal, notification } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import { useAuth } from "../../../Context/AuthProviders";
import { updateDocument } from "../../../Config/Services/Firebase/FireStoreDB";
import { useData } from "../../../Context/DataProviders";
import { useNavigate } from "react-router-dom";

const Verify = ({ verify, isId }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const { accounts } = useData();
  const { setVerify } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 1000);
    setTimeout(() => {
      setIsLogin(true);
    }, 2000);
  };

  const onFinish = (values) => {
    if (
      values.username === accounts.username &&
      values.password === accounts.password
    ) {
      const newData = {
        admin: true,
      };
      updateDocument("users", isId, newData).then(() => {
        setVerify(true);
        notification["success"]({
          message: "Đăng nhập thành công !",
          description: `Chào mừng đến với ${window.location.hostname} !`,
        });
        setTimeout(() => {
          navigate("/admin");
        }, 2000);
      });
    } else {
      notification["error"]({
        message: "Đăng nhập không thành công !",
        description: `
        Vui lòng đăng nhập bằng tài khoản đã được CẤP QUYỀN QUẢN TRỊ !`,
      });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Modal
        title="Lần đầu đăng nhập bằng Google?"
        open={open}
        onOk={handleOk}
        okText="Tiếp tục"
        okType="danger"
        confirmLoading={confirmLoading}
        onCancel={() => verify(false)}
        cancelText="Hủy bỏ"
      >
        <p>"Tiếp tục" để nhập tài khoản và mật khẩu QUẢN TRỊ</p>
      </Modal>

      {isLogin && (
        <div class="z-50 fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          {" "}
          <div>
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              className="bg-white shadow-2xl w-[500px] flex flex-col items-center justify-center py-10"
            >
              <Form.Item
                label="Username"
                labelAlign="left"
                name="username"
                className="w-[300px]"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                labelAlign="left"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
                className="w-[200px]"
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      )}
    </>
  );
};
export default Verify;
