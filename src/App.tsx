import React from "react";
import "animate.css";

import { Button } from "./shared";
import { PaymentModal } from "./PaymentModal/PaymentModal";
import { useBoolean } from "react-hanger/array";

const App = (): JSX.Element => {
  const [isModalOpen, { toggle }] = useBoolean(false);

  return (
    <section className="p-10">
      <Button onClick={toggle} className="px-6">
        Pay
      </Button>
      {isModalOpen && <PaymentModal onClose={toggle} />}
    </section>
  );
};

export default App;
