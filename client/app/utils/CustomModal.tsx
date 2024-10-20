/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Modal, Box } from '@mui/material';
import React, {FC} from 'react';

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    activeItem: any;
    component: any;
    setRoute?: (route: string) => void;
}

const CustomModal: FC<Props> = ({open,setOpen, setRoute, component:Component }) => {
    console.log("CustomModal open state:", open);
    console.log("Rendering component:", Component);

    return (
    <Modal
    open={open}
    onClose={() => setOpen(false)}
    aria-labelledby= "modal-modal-title"
    aria-describedby= "modal-modal-description"
    >
        <Box
        className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-black dark:bg-white rounded-[8px] shadow p-4 outline-none"
        >
            <Component setOpen={setOpen} setRoute={setRoute} />
        </Box>
        
    </Modal>
  )
}

export default CustomModal