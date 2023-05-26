"use-client";

import { useEffect, useState } from "react";

import { CustomButton, ProjectItem } from "@/components";
import { ItemProps } from "@/types/index.types";
import { Container, Group } from "@mantine/core";
import { useRouter } from "next/navigation";

import firebaseApp from "@/firebase/firebase";
import { getDatabase, onValue, ref } from "firebase/database";

const ProjectItems = () => {
  const router = useRouter();

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
      <ProjectItem list={dataList} />

      {dataList.length > 3 && dataList.length !== 0 && (
        <>
          <Group position="center">
            <CustomButton
              text="View more"
              size="lg"
              onClick={() => router.push("./projects")}
            />
          </Group>
        </>
      )}
    </Container>
  );
};

export default ProjectItems;
