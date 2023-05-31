"use client";

import NavProvider from "@/components/navProvider";
import { ProjectDetails } from "@/features/project";
import { useParams } from "next/navigation";
import React from "react";

const Index = () => {
  const params = useParams();
  return (
    <NavProvider>
      <ProjectDetails id={params.id} />
    </NavProvider>
  );
};

export default Index;
