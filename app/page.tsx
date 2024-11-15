<<<<<<< HEAD
<<<<<<< HEAD
"use client"
import Image from "next/image";

import Banner from "./_components/Banner/Banner";
import Footer from "./_components/Footer/Footer";
import Navbar from "./_components/Navbar/Navbar";
import Provide from "./_components/Provide";
import Why from "./_components/Why";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";
import Newsletter from "./_components/Newsletter/Newsletter";
import { Separator } from "@/components/ui/separator";
import { SeparatorHorizontal } from "lucide-react";

export default function Home() {

  const {user}=useKindeBrowserClient();

  useEffect(()=>{
    console.log("--",user)
  },[user])
  return (
    <div>
      
      <Navbar />
      <Banner />
      <Separator />
      <Provide />
      <Separator/>
      <Why />
    <Newsletter />
      <Footer />
    </div>
  );
}
=======
=======
"use client"
>>>>>>> 29311ad (Initial Commit)
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";

export default function Home() {

  const {user}=useKindeBrowserClient();

  useEffect(()=>{
    console.log("--",user)
  },[user])
  return (
    <div>
      <Header/>
      <Hero/>
    </div>
  );
}
>>>>>>> 827a0ea (Initial commit from Create Next App)
