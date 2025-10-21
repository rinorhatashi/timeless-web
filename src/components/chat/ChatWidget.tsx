"use client";

import { useState } from "react";
import { ChatButton } from "./ChatButton";
import { ChatWindow } from "./ChatWindow";

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ChatButton isOpen={isOpen} onClick={handleToggle} />
      <ChatWindow isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

