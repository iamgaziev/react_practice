import React from "react";
import "./Carier.css";
import fr from "../../assets/Frame 26 (9).png";
import acc from "../../assets/accor.png";
import resume from "../../assets/resume.png";
import mk from "../../assets/mk.png";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useTranslation } from "react-i18next";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Carier = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="sec1">
        <div className="container1">
          <div className="md:ml-5">
            <img src={fr} className="my-3" alt="" />
            <p className="font-[600] text-[24px] text-[#0D4373] mb-4">
              {t("t3")}
            </p>
            <p className="font-[700] text-[18px] text-[#333333] mb-2 md:w-[90%]">
              {t("x28")}
            </p>
            <p className="font-[400] text-[16px] text-[#868686] md:w-[95%]">
              {t("x29")} <br />
              {t("x30")}
            </p>
            <p className="my-3 font-[700] text-[18px] text-[#333333] md:mt-5">
              
              {t("x31")}
            </p>
            <p className="font-[400] text-[16px] text-[#868686]">
              {t("x32")}
            </p>
          </div>
          <div className="mt-[3%] shadow shadow-black md:w-[90%] md:m-auto md:mt-5">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="text-[#D74C20] text-[18px] font-[700]">
                  {t("x33")}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div>
                    <p className="font-[700] text-[18px]">
                    {t("x34")}
                    </p>
                    <div className="flex items-center gap-3 mt-5">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x35")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x36")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x37")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x38")}
                      </p>
                    </div>
                    <p className="font-[700] text-[18px] mt-5">
                    {t("x39")}
                    </p>
                    <div className="flex items-center gap-3 mt-5">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x40")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x41")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x42")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x43")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x44")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x45")}
                      </p>
                    </div>
                    <p className="font-[700] text-[18px] mt-5">
                    {t("x46")}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x47")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x48")}
                      </p>
                    </div>
                  </div>
                  <div className="mt-[3%]">
                    <Button
                      onClick={handleOpen}
                      className="px-6 py-2 bg-[#D74C20] hover:bg-[#D74C20] text-white rounded-[3px]"
                    >
                      {t("x49")}
                    </Button>
                  </div>
                  <div>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography
                          id="modal-modal-title"
                          variant="h3"
                          component="h1"
                          className="text-center text-[#0D4373] text-[24px]"
                        >
                          Резюме
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          <p className="font-[700] text-[18px] text-center">
                            Пожалуйста, заполните форму ниже
                          </p>
                          <p className="font-[400] text-[16px] text-[#868686] mt-5 mb-2">
                            Ваше имя
                          </p>
                          <input
                            type="text"
                            className="bg-[#F3F3F3] w-[100%] h-10 rounded-[3px]"
                          />
                          <p className="font-[400] text-[16px] text-[#868686] mt-5 mb-2">
                            Контактный телефон
                          </p>
                          <input
                            type="text"
                            className="bg-[#F3F3F3] w-[100%] h-10 rounded-[3px]"
                          />
                          <p className="font-[400] text-[16px] text-[#868686] mt-5 mb-2">
                            E-mail (обязательно)
                          </p>
                          <input
                            type="text"
                            className="bg-[#F3F3F3] w-[100%] h-10 rounded-[3px] mb-5"
                            placeholder="user@example.com"
                          />
                          <Accordion>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <Typography>Менеджер по продажам</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                          <div className="w-[70%] m-auto mt-5">
                            <button className="bg-[#D74C20] text-[white] px-5 py-2 rounded-[3px] w-[100%]">
                              Отправить
                            </button>
                          </div>
                        </Typography>
                      </Box>
                    </Modal>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="mt-[1%] shadow shadow-black md:my-5 md:w-[90%] md:m-auto">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="text-[#D74C20] text-[18px] font-[700]">
                  {t("x33")}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                <div>
                    <p className="font-[700] text-[18px]">
                    {t("x34")}
                    </p>
                    <div className="flex items-center gap-3 mt-5">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x35")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x36")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x37")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x38")}
                      </p>
                    </div>
                    <p className="font-[700] text-[18px] mt-5">
                    {t("x39")}
                    </p>
                    <div className="flex items-center gap-3 mt-5">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x40")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x41")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x42")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x43")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x44")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x45")}
                      </p>
                    </div>
                    <p className="font-[700] text-[18px] mt-5">
                    {t("x46")}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x47")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x48")}
                      </p>
                    </div>
                  </div>
                  <div className="mt-[3%]">
                    <button className="px-6 py-2 bg-[#D74C20] text-white rounded-[3px]">
                      {t("x49")}
                    </button>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="mt-[1%] shadow shadow-black md:w-[90%] md:m-auto">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="text-[#D74C20] text-[18px] font-[700]">
                  {t("x33")}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                <div>
                    <p className="font-[700] text-[18px]">
                    {t("x34")}
                    </p>
                    <div className="flex items-center gap-3 mt-5">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x35")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x36")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x37")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x38")}
                      </p>
                    </div>
                    <p className="font-[700] text-[18px] mt-5">
                    {t("x39")}
                    </p>
                    <div className="flex items-center gap-3 mt-5">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x40")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x41")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x42")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x43")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x44")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x45")}
                      </p>
                    </div>
                    <p className="font-[700] text-[18px] mt-5">
                    {t("x46")}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x47")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={mk} alt="" />
                      <p className="font-[400] text-[16px] text-[#868686]">
                      {t("x48")}
                      </p>
                    </div>
                  </div>
                  <div className="mt-[3%]">
                    <button className="px-6 py-2 bg-[#D74C20] text-white rounded-[3px]">
                      {t("x49")}
                    </button>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <p className="font-[400] text-[16px] text-[#868686] my-[4%] md:w-[90%] md:m-auto md:my-5">
            {t("x50")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carier;
