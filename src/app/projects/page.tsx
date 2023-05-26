"use client";
import { ProjectItem } from "@/components";
import { Container } from "@mantine/core";

import { getDatabase, onValue, ref } from "firebase/database";

import firebaseApp from "@/firebase/firebase";
import { useEffect, useState } from "react";
import { ItemProps } from "@/types/index.types";

const Projects = () => {
  const db = getDatabase(firebaseApp);
  const [dataList, setDataList] = useState<ItemProps[] | []>([]);

  useEffect(() => {
    const recordRef = ref(db, "/porfolio/");

    onValue(recordRef, (data) => {
      const record = data.val();
      const newData: ItemProps[] = [];

      for (let id in record) {
        newData.push({ id, ...record[id] });
      }

      setDataList(newData.filter((status) => status.active === true));
    });
  }, [db]);

  return (
    <Container size={1000} py="xl">
      <ProjectItem list={dataList} pageType="project" />
    </Container>
  );
};

export default Projects;
