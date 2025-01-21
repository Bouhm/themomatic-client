import { useTheme } from "../hooks/useTheme";
import Modal from "./Modal";
import Button from "./ui/Button";
import { Icon } from '@iconify/react';

type ErrorProps = {
  error: string,
  onClose: () => void
}

export default function Error({ onClose, error }: ErrorProps) {
  const { themeConfig } = useTheme();

  return (
    <Modal>
      <Icon
        className="text-center" 
        icon="material-symbols:report" 
        height="60" 
        width="60" 
      />
      <h2
        className="text-2xl m-4"
        style={{ color: themeConfig.palette.secondaryText, fontFamily: themeConfig.customStyles.primaryFont }}
      >
        {error}
      </h2>
      <div className="absolute bottom-5">
        <Button onClick={onClose}>Close</Button>
      </div>
    </Modal>
  );
}
