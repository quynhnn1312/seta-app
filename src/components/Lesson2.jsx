import React, { useState } from "react";
import { Col, FormGroup, Input, Label } from "reactstrap";
import findSumIntegerOnTop2 from "../utils/findSumIntegerOnTop2";

function Lesson2() {
  const [output, setOutput] = useState();

  const handleFindSumIntegerOnTop2 = (e) => {
    if (!e.target.value) return;
    setOutput(findSumIntegerOnTop2(e.target.value));
  };

  return (
    <div className="lesson">
      <p>
        2. Provide an array of integers, eg: [1, 4, 2, 3, 5]. Write a function
        to find sum of integers on top 2. Writing the unit test function and
        provide some test-cases. The result for the example array is 9
      </p>
      <FormGroup row>
        <Label for="exampleEmail" sm={12}>
          <h3>Input</h3>
        </Label>
        <Col sm={12}>
          <Input
            type="text"
            name="arrString"
            placeholder="eg: [1, 4, 2, 3, 5]"
            onChange={handleFindSumIntegerOnTop2}
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="exampleEmail" sm={12}>
          <h3>Output</h3>
        </Label>
        <Col sm={12}>
          <div className="output">{output}</div>
        </Col>
      </FormGroup>
    </div>
  );
}

export default Lesson2;
