"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Fragment, useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
} from "@/components/ui/dialog";
import LogInForm from "@/components/auth/login-form";

const LoginPage = () => {
  const [openVideo, setOpenVideo] = useState(false);
  return (
    <Fragment>
      <div className="min-h-screen bg-background  flex items-center  overflow-hidden w-full">
        <div className="min-h-screen basis-full flex flex-wrap w-full  justify-center overflow-y-auto">
          <div className="basis-1/2 bg-black w-full relative hidden xl:flex justify-center items-center">
            <video
              src="/videos/login-video.mp4"
              autoPlay
              muted
              loop
              className="absolute top-0 left-0 w-full h-full object-contain"
            />
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <h1
                className="text-4xl font-bold text-white"
                style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)" }}
              >
                Every Rep. Every Move.
              </h1>
            </div>
          </div>

          <div className=" min-h-screen basis-full md:basis-1/2 w-full px-4 py-5 flex justify-center items-center">
            <div className="lg:w-[480px] ">
              <LogInForm />
            </div>
          </div>
        </div>
      </div>
      <Dialog open={openVideo} >
        <DialogContent size="lg" className="p-0" hiddenCloseIcon>
                  <DialogHeader className="hidden">
                    <DialogTitle className="hidden"></DialogTitle>
                  </DialogHeader>
          <Button
            size="icon"
            onClick={() => setOpenVideo(false)}
            className="absolute -top-4 -right-4 bg-default-900"
          >
            <X className="w-6 h-6" />
          </Button>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/8D6b3McyhhU?si=zGOlY311c21dR70j"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen 
          ></iframe>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default LoginPage;

