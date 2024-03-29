import { Card, Modal, Box } from "@mui/material";
import React, { useState } from "react";
import Login from "./src/pages/Login";
import Register from "./src/pages/Register";

const AuthModal = ({
  open = false,
  handleClose = () => {},
  setStatus = () => {},
  setUser = () => {},
}) => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <Modal open={open} onClose={handleClose}>
      <Card
        sx={{
          width: { xs: "60vw", lg: "40vw" },
          maxWidth: "600px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "16px",
          backgroundColor: "#ffffffCC",
        }}
      >
        <Box
          sx={{
            width: { xs: "120vw", lg: "80vw" },
            maxWidth: "1200px",
            display: "flex",
            overflow: "hidden",
            transition: "all .2s ease-in-out",
            translate: isLogin ? "0%" : "-50%",
          }}
        >
          <Login
            handleClose={handleClose}
            setIsLogin={setIsLogin}
            setStatus={setStatus}
            setUser={setUser}
          />
          <Register setIsLogin={setIsLogin} setStatus={setStatus} />
        </Box>
      </Card>
    </Modal>
  );
};

export default AuthModal;
