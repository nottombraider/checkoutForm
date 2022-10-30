import React from "react";
import "animate.css";
import { useBoolean } from "react-hanger/array";

import { Button } from "./shared";
import { PaymentModal } from "./PaymentModal/PaymentModal";

const App = (): JSX.Element => {
  const [isModalOpen, { toggle }] = useBoolean(false);

  return (
    <section className="p-10">
      <Button onClick={toggle}>Pay</Button>
      {isModalOpen && <PaymentModal onClose={toggle} />}
    </section>
  );
};

export default App;
