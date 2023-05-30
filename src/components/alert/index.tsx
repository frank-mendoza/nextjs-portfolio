import { Alert } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";

type AlertProps = {
  error: string;
};
const AlertDialog = ({ error }: AlertProps) => {
  return (
    <Alert mb={20} icon={<IconAlertCircle size="1rem" />} title="Something went wrong!" color="red">
      {error}
    </Alert>
  );
};

export default AlertDialog;
