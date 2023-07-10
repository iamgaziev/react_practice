import React from "react";
import { Link, Outlet } from "react-router-dom";
import foot from "../assets/footer.png";
import nav2 from "../assets/nav2.png";
import nav from "../assets/логотип_для веб.svg";

import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Typography } from "antd";

import { Button, Drawer } from "antd";
import { useState } from "react";
import Switcher from "../Components/Switcher/Switcher";
import { useTranslation } from "react-i18next";

const items = [
  {
    key: "1",
    label: (
      <Link to="uslugi2">
        <li>Услуги 2</li>
      </Link>
    ),
  },
];
const items2 = [
  {
    key: "2",
    label: (
      <Link to="technica2">
        <li>Teхника 2</li>
      </Link>
    ),
  },
];
const items3 = [
  {
    key: "3",
    label: (
      <Link to="object2">
        <li>Объекты 2</li>
      </Link>
    ),
  },
];
const items4 = [
  {
    key: "4",
    label: (
      <Link to="news2">
        <li>Новости 2</li>
      </Link>
    ),
  },
];
const items5 = [
  {
    key: "5",
    label: (
      <Link to="carier2">
        <li>Карьера 2</li>
      </Link>
    ),
  },
];

const Layout = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="dark:bg-[#1f1e1e] dark:text-white">
      <div className="bg-[#F3F3F3] py-2">
        <div className="container1 flex justify-between px-4 items-center">
          <div className="md:block hidden">
            <img src={nav2} alt="" />
          </div>
          <div className="md:hidden">
            <ul className="flex gap-4 font-[400] text-[14px] text-[#333333]">
              <Link to="company">
                <li>{t("t1")}</li>
              </Link>
              <Link to="contact">
                <li>{t("t2")}</li>
              </Link>
              <Dropdown
                menu={{
                  items: items5,
                  selectable: true,
                  defaultSelectedKeys: ["3"],
                }}
              >
                <Typography.Link>
                  <Space>
                    <Link to="carier">
                      <li className="text-black">{t("t3")}</li>
                    </Link>
                    <DownOutlined />
                  </Space>
                </Typography.Link>
              </Dropdown>
            </ul>
          </div>
          <div className="flex gap-5 dark:text-black">
            <button onClick={() => changeLanguage("en")}>En</button>
            <button onClick={() => changeLanguage("ru")}>Ru</button>
          </div>
          <div className="hidden md:block">
              <Switcher />
            </div>
        </div>
      </div>
      <nav className="container1 flex justify-between items-center md:px-3  mt-5 py-3">
        <div>
          <img src={nav} className="md:w-[250px]" alt="" />
        </div>
        <div className="md:hidden">
          <img src={nav2} alt="" />
        </div>
        <div className="hidden md:block">
          <Button type="primary" onClick={showDrawer} className="text-black dark:text-white dark:border-white">
            Open
          </Button>
          <Drawer
            title="Basic Drawer"
            placement="right"
            onClose={onClose}
            open={open}
            className=""
          >
            <Dropdown
              menu={{
                items,
                selectable: true,
                defaultSelectedKeys: ["3"],
              }}
            >
              <Typography.Link>
                <Space>
                  <Link to="uslugi">
                    <li className="text-white font-[400] text-[18px]  mt-4 md:text-black md:text-[20px] md:mb-3 md:font-[700]">
                      {t("t6")}
                    </li>
                  </Link>
                  <DownOutlined />
                </Space>
              </Typography.Link>
            </Dropdown>
            <Link to="company">
              <li className="md:text-[20px] md:mb-3 md:font-[700]">{t("t1")}</li>
            </Link>
            <Dropdown
              menu={{
                items: items3,
                selectable: true,
                defaultSelectedKeys: ["3"],
              }}
            >
              <Typography.Link>
                <Space>
                  <Link to="object">
                    <li className="text-white font-[400] text-[18px] md:text-black md:text-[20px] md:mb-3 md:font-[700]">
                      {t("t8")}
                    </li>
                  </Link>
                  <DownOutlined />
                </Space>
              </Typography.Link>
            </Dropdown>
            <Link to="contact">
              <li className="md:text-[20px] md:mb-3 md:font-[700]">{t("t2")}</li>
            </Link>
            <Dropdown
              menu={{
                items: items5,
                selectable: true,
                defaultSelectedKeys: ["3"],
              }}
            >
              <Typography.Link>
                <Space>
                  <Link to="carier">
                    <li className="text-black md:text-[20px] md:mb-3 md:font-[700]">{t("t3")}</li>
                  </Link>
                  <DownOutlined />
                </Space>
              </Typography.Link>
            </Dropdown>

            <Link to="/">
              <li className="text-white font-[400] text-[18px] mr-2 md:text-black md:text-[20px] md:mb-3 md:font-[700]">
                {t("t5")}
              </li>
            </Link>
            <Dropdown
              menu={{
                items: items4,
                selectable: true,
                defaultSelectedKeys: ["3"],
              }}
            >
              <Typography.Link>
                <Space>
                  <Link to="news">
                    <li className="text-white font-[400] text-[18px] md:text-black md:text-[20px] md:mb-3 md:font-[700]">
                      {t("t9")}
                    </li>
                  </Link>
                  <DownOutlined />
                </Space>
              </Typography.Link>
            </Dropdown>

            <Link to="otzivi">
              <li className="text-white font-[400] text-[18px] md:text-black md:text-[20px] md:mb-3 md:font-[700]">
                {t("t10")}
              </li>
            </Link>
            <Dropdown
              menu={{
                items: items2,
                selectable: true,
                defaultSelectedKeys: ["3"],
              }}
            >
              <Typography.Link>
                <Space>
                  <Link to="technica">
                    <li className="text-white font-[400] text-[18px] md:text-black md:text-[20px] md:font-[700]">
                      {t("t7")}
                    </li>
                  </Link>
                  <DownOutlined />
                </Space>
              </Typography.Link>
            </Dropdown>
          </Drawer>
        </div>
        <div className="hidden">
          <img src={nav2} alt="" />
        </div>
      </nav>
      <div className="bg-[#0D4373] text-white">
        <nav className="container1 flex justify-between items-center py-3">
          <div className="md:hidden">
            <ul className="flex gap-5 items-center">
              <Link to="/">
                <li className="text-white font-[400] text-[18px] mr-2">
                  {t("t5")}
                </li>
              </Link>
              <Dropdown
                menu={{
                  items,
                  selectable: true,
                  defaultSelectedKeys: ["3"],
                }}
              >
                <Typography.Link>
                  <Space>
                    <Link to="uslugi">
                      <p className="text-white font-[400] text-[18px] mt-4">
                        {t("t6")}
                      </p>
                    </Link>
                    <DownOutlined />
                  </Space>
                </Typography.Link>
              </Dropdown>
              <Dropdown
                menu={{
                  items: items2,
                  selectable: true,
                  defaultSelectedKeys: ["3"],
                }}
              >
                <Typography.Link>
                  <Space>
                    <Link to="technica">
                      <li className="text-white font-[400] text-[18px] ">
                        {t("t7")}
                      </li>
                    </Link>
                    <DownOutlined />
                  </Space>
                </Typography.Link>
              </Dropdown>
              <Dropdown
                menu={{
                  items: items3,
                  selectable: true,
                  defaultSelectedKeys: ["3"],
                }}
              >
                <Typography.Link>
                  <Space>
                    <Link to="object">
                      <li className="text-white font-[400] text-[18px] ">
                        {t("t8")}
                      </li>
                    </Link>
                    <DownOutlined />
                  </Space>
                </Typography.Link>
              </Dropdown>
              <Dropdown
                menu={{
                  items: items4,
                  selectable: true,
                  defaultSelectedKeys: ["3"],
                }}
              >
                <Typography.Link>
                  <Space>
                    <Link to="news">
                      <li className="text-white font-[400] text-[18px] ">
                        {t("t9")}
                      </li>
                    </Link>
                    <DownOutlined />
                  </Space>
                </Typography.Link>
              </Dropdown>

              <Link to="otzivi">
                <li className="text-white font-[400] text-[18px]">
                  {t("t10")}
                </li>
              </Link>
            </ul>
          </div>

          <div className="flex gap-5">
            <div className="md:hidden">
              <Switcher />
            </div>
            <button className="md:hidden px-5 py-2 bg-[#D74C20] rounded-[3px] text-white">
              {t("t11")}
            </button>
          </div>
        </nav>
      </div>

      <div className="">
        <Outlet />
      </div>

      <div className="bg-[#0D4373] text-white">
        <div className="container1">
          <footer className="py-[5%]">
            <img src={foot} className="m-auto" alt="" />
            <p className="font-[400] text-[14px] text-center md:mt-5 md:w-[90%] md:m-auto md:mb-5 w-[50%] m-auto my-5">
              {t("t12")}
            </p>
            <p className="text-[14px] font-[400] text-center">
              © Copyrights 2021 Fundamenta. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>

  );
};

export default Layout;
