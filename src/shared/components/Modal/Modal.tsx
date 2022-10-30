import React from "react";
import classnames from "classnames";
import { IoClose } from "react-icons/all";
import { useBoolean } from "react-hanger/array";

import { Button } from "../Button";
import { ModalProps } from "./Modal.types";
import { ModalFooter } from "./ModalFooter";

export const Modal = ({ onClose, children }: ModalProps): JSX.Element => {
  const [isClose, { toggle }] = useBoolean(false);

  return (
    <section
      className={classnames(
        "fixed left-0 top-0 right-0 bottom-0 bg-indigo-700 md:bg-black md:bg-opacity-70 z-10 flex flex-col items-center py-2 animation-in",
        {
          "animation-out": isClose,
        }
      )}
    >
      <div
        className={classnames("flex flex-col md:gap-2 modal-animation-in", {
          "modal-animation-out": isClose,
        })}
      >
        <Button
          variant="icon"
          className="text-white self-end"
          onClick={() => {
            toggle();

            setTimeout(onClose, 1200);
          }}
        >
          <IoClose className="w-5 h-5" />
        </Button>
        <main className="px-2 md:px-6 md:py-0 max-h-[calc(100vh-7.75rem)] max-w-[100vw] overflow-y-auto scrollbar">
          {children}
        </main>
        <ModalFooter />
      </div>
    </section>
  );
};
