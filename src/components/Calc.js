import { useState } from "react";
import React from "react";
import { Button2, Container, Current, Previous, Screen } from "./Style";
function Calc() {
  const [current, setCurrent] = useState("");
  const [previous, setPrevious] = useState("");
  const [operation, setOperation] = useState("");

  const Append_Value = (e) => {
    const valueBtn = e.target.getAttribute("data");

    if (valueBtn === "." && current.includes(".")) return;
    setCurrent(current + valueBtn);
  };

  const delete_handler = () => {
    setCurrent(String(current).slice(0, -1));
  };
  const clear_all_handler = () => {
    setCurrent("");
    setPrevious("");
    setOperation("");
  };
  const operation_handler = (e) => {
    if (current === "") return;
    if (previous !== "") {
      let val = hisobla();
      setPrevious(val);
    } else {
      setPrevious(current);
    }

    setCurrent("");
    setOperation(e.target.getAttribute("data"));
  };

  const equals_handler = () => {
    let val = hisobla();
    if (val === undefined || val === null) return;

    setCurrent(val);
    setPrevious("");
    setOperation("");
  };
  const hisobla = () => {
    let result;
    let previous_number = parseFloat(previous);
    let current_number = parseFloat(current);

    if (isNaN(previous_number) || isNaN(current_number)) return;
    switch (operation) {
      case "÷":
        result = previous_number / current_number;
        break;
      case "×":
        result = previous_number * current_number;
        break;
      case "+":
        result = previous_number + current_number;
        break;
      case "-":
        result = previous_number - current_number;
        break;
      default:
        return;
    }

    return result;
  };
  return (
    <Container>
      <Screen>
        <Previous>
          {previous} {operation}
        </Previous>
        <Current>{current}</Current>
      </Screen>
      <Button2 gridSpan={2} onClick={clear_all_handler}>
        AC
      </Button2>
      <Button2 control onClick={delete_handler}>
        DEL
      </Button2>
      <Button2 data={"÷"} onClick={operation_handler} operation>
        ÷
      </Button2>
      <Button2 data={"7"} onClick={Append_Value}>
        7
      </Button2>
      <Button2 data={"8"} onClick={Append_Value}>
        8
      </Button2>
      <Button2 data={"9"} onClick={Append_Value}>
        9
      </Button2>
      <Button2 data={"×"} onClick={operation_handler} operation>
        ×
      </Button2>
      <Button2 data={"4"} onClick={Append_Value}>
        4
      </Button2>
      <Button2 data={"5"} onClick={Append_Value}>
        5
      </Button2>
      <Button2 data={"6"} onClick={Append_Value}>
        6
      </Button2>
      <Button2 data={"+"} onClick={operation_handler} operation>
        +
      </Button2>
      <Button2 data={"1"} onClick={Append_Value}>
        1
      </Button2>
      <Button2 data={"2"} onClick={Append_Value}>
        2
      </Button2>
      <Button2 data={"3"} onClick={Append_Value}>
        3
      </Button2>
      <Button2 data={"-"} onClick={operation_handler} operation>
        -
      </Button2>
      <Button2 period data={"."} onClick={Append_Value}>
        .
      </Button2>
      <Button2 data={"0"} onClick={Append_Value}>
        0
      </Button2>

      <Button2 onClick={equals_handler} equals={2}>
        =
      </Button2>
    </Container>
  );
}

export default Calc;
