import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import React from "react";

function OpenPoolModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent className="bg-primary border-2 border-green-600 !text-white">
        <ModalHeader>
          <h2 className="">Stake VGR</h2>
        </ModalHeader>
        <hr className="border-green-600" />
        <ModalCloseButton />
        <ModalBody>
          <input
            type="number"
            name=""
            id=""
            className="mb-3 bg-transparent block w-full border border-gray-600 p-1 rounded-md"
          />

          {/* stake and unstake button */}
          <div className="flex justify-between gap-3 mb-5">
            <button
              className="w-full default-gradient btn rounded-md "
              disabled
            >
              Stake
            </button>
            <button className="w-full default-gradient btn rounded-md">
              Unstake
            </button>
          </div>

          <div className="flex justify-between gap-3 ">
            <button className="border-2 border-green-600 btn w-full rounded-lg">
              Claim
            </button>
            <button className="border-2 border-green-600 btn w-full rounded-lg">
              Claim Unpaid
            </button>
            <button className="border-2 border-green-600 btn w-full rounded-lg">
              Auto Compound
            </button>
          </div>
        </ModalBody>
        <hr className="border-green-600" />

        <ModalFooter>
          {/* other staking information */}
          <div className="flex justify-between w-full">
            <InfoItem amount={0.0} text={"Your Stakings"} />
            <InfoItem amount={0.0} text={"Your Earnings"} />
            <InfoItem amount={0.0} text={"Wallet Balance"} />
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default OpenPoolModal;

const InfoItem = ({ text, amount }) => {
  return (
    <div className="flex flex-col text-center gap-2">
      <b>{text}</b>
      <p>{amount}</p>
    </div>
  );
};
