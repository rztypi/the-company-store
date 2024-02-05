import PropTypes from "prop-types";
import { useState } from "react";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import BoxButton from "./BoxButton.jsx";

const QtySpinner = ({ qtyState, min = 1, max = 99 }) => {
  const [inputValue, setInputValue] = useState(min);
  const [qty, setQty] = qtyState;

  const getValidQty = (newQty, spin = false) => {
    if (newQty < min) {
      newQty = spin ? max : min;
    } else if (newQty > max) {
      newQty = spin ? min : max;
    }
    return newQty;
  };

  const handleChangeValue = (event) => {
    const value = event.target.value;
    setInputValue(value);
    if (!isNaN(value)) {
      setQty(getValidQty(Math.floor(value)));
    }
  };

  const handleClick = (newQty) => {
    const validQty = getValidQty(newQty, true);
    setQty(validQty);
    setInputValue(validQty.toString());
  };

  return (
    <div className="inline-flex items-center gap-1">
      <BoxButton title="Subtract quantity" onClick={() => handleClick(qty - 1)}>
        <Icon path={mdiChevronLeft} size={1} />
      </BoxButton>
      <input
        type="number"
        className="w-6 rounded bg-zinc-800 text-center"
        min={min}
        max={max}
        step="1"
        value={inputValue}
        onChange={handleChangeValue}
      />
      <BoxButton title="Add quantity" onClick={() => handleClick(qty + 1)}>
        <Icon path={mdiChevronRight} size={1} />
      </BoxButton>
    </div>
  );
};

QtySpinner.propTypes = {
  qtyState: PropTypes.array.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default QtySpinner;
