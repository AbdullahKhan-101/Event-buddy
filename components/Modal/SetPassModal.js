import React, { useState } from "react";
import classes from "../../styles/SetPassModal.module.css";
import { Input } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Image from "next/image";

function SetPassModal({ closeModal }) {
  const [passReqNext, setPassReqNext] = useState(true);
  const [emailAuth, setEmailAuth] = useState(false);
  const [newPasssubmit, setNewPassSubmit] = useState(false);
  const [data, setData] = useState({ email: "", code: "", password: "" });

  const handleInputs = (e) => {
    let name, value;
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const AuthNext = async () => {
    if (!data.email) {
      toast.error("Please Enter Email");
    } else {
      const payload = {
        Email: data.email,
      };
      try {
        let fata = await axios.post(
          "http://54.144.168.52:3000/user/forget-password",
          payload
        );
        console.log(fata, "api payload");
        if (fata?.data?.Status == 200) {
          setData({ ...data, email: "" });
          closeModal(false);
          toast.success(fata?.data?.Data?.Message);
        } else {
          toast.error(fata?.data?.Message);
          throw new Error(fata?.data);
        }
      } catch (error) {
        toast.error(error);
        console.log(error, "api payload");
      }
    }
  };

  return (
    <div className={classes.modalBackground}>
      <div
        className={classes.modalCloseBackground}
        onClick={() => closeModal(false)}
      ></div>
      <div className={classes.modalContainer}>
        <div className={classes.titleCloseBtn}>
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className={classes.title}>
          <h1 className={classes.h1}>Forget Password..?</h1>
        </div>
        <div className={classes.body}>
          <Input
            required=""
            name="email"
            type="email"
            className={classes.input}
            placeholder="Please Enter Your Email Address"
            id="exampleInputEmail1"
            onChange={handleInputs}
            autoComplete="off"
          />
        </div>
        <div className={classes.footer}>
          <button className={classes.nextBtn} onClick={AuthNext}>
            Send
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SetPassModal;
