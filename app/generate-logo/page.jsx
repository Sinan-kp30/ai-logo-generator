"use client";
import React, { useContext, useEffect, useState } from "react";
import { UserDetailConstext } from "../_context/UserDetailContext";
import Prompt from "../_data/Prompt";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

function GenerateLogo() {
  const { userDetail } = useContext(UserDetailConstext);
  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);
  const [logoImage, setLogoImage] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && userDetail?.email) {
      const storage = localStorage.getItem("formData");
      if (storage) {
        setFormData(JSON.parse(storage));
      }
    }
  }, [userDetail]);

  useEffect(() => {
    if (formData?.title) {
      GenerateAILogo();
    }
  }, [formData]);

  const GenerateAILogo = async () => {
    setLoading(true);
    const PROMPT = Prompt.LOGO_PROMPT
      .replace("{logoTitle}", formData?.title)
      .replace("{logoDesc}", formData?.desc)
      .replace("{logoColor}", formData.palette)
      .replace("{logoDesign}", formData?.design?.title)
      .replace("{logoPrompt}", formData?.design?.prompt);

    const result = await axios.post("/api/ai-logo-model", {
      prompt: PROMPT,
      email: userDetail?.email,
      title: formData.title,
      desc: formData.desc,
    });

    setLogoImage(result.data?.image);
    setLoading(false);
  };

  const handleDownload = async () => {
    if (!logoImage) return;

    try {
      const response = await fetch(logoImage);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "logo.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      {/* Loading Text */}
      {loading && <h2 className="text-gray-500 text-lg font-semibold">Loading...</h2>}

      {/* Show Logo, Title & Buttons Only After Image is Loaded */}
      {!loading && logoImage && (
        <>
          {/* Title */}
          <h2 className="text-red-600 text-lg font-semibold mb-4">
            Your logo is being created
          </h2>

          {/* Logo */}
          <div className="relative">
            <Image
              src={logoImage

              }
              alt="logo"
              width={250}
              height={250}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-red-600 transition"
            >
              ⬇️ Download
            </button>
            <button
              onClick={() => router.push("/dashboard")}
              className="flex items-center gap-2 border px-6 py-2 rounded-md shadow-md hover:bg-gray-100 transition"
            >
              📊 Dashboard
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default GenerateLogo;
