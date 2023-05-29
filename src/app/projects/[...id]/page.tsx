'use client'

import { ProjectDetails } from "@/features/project";
import { useParams } from "next/navigation";
import React from "react";


const Index = () => {
  const params = useParams()
  return <ProjectDetails id={params.id} />;
};

export default Index;
