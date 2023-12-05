"use client"

import { useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import UploadDropzone from "./UploadDropzone";

const UploadButton = () => {
  const [ isOpen, setIsOpen ] = useState<boolean>(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        !v && setIsOpen(v);
      }}
    >
      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
        <Button>Upload PDF</Button>
      </DialogTrigger>
      <DialogContent>
        <UploadDropzone />
      </DialogContent>
    </Dialog>
  );
}

export default UploadButton;