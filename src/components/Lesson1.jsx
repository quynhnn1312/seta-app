import React, { useState } from "react";
import { Col, FormGroup, Input, Label } from "reactstrap";
import calculateArrayString from "../utils/calculateArrayString";
function Lesson1() {
  const [output, setOutput] = useState("[ ]");
  const handleArrString = (e) => {
    if (!e.target.value) return;
    const result = calculateArrayString(e.target.value);
    const result2 = JSON.stringify(result, null, 4);
    setOutput(result2.slice(1, -1));
  };

  return (
    <div className="lesson">
      <p>
        1. Provide an array of strings, eg: ['a', 'ab', 'abc', 'cd', 'def',
        'gh']. Write a function to find the strings’ length that appear most in
        this array. Writing the unit test function and provide some test-cases.
        The result for example array is ['ab', 'cd', 'gh'].
      </p>
      <FormGroup row>
        <Label for="exampleEmail" sm={12}>
          <h3>Input</h3>
        </Label>
        <Col sm={12}>
          <Input
            type="text"
            name="arrString"
            placeholder="eg: ['a', 'ab', 'abc', 'cd', 'def', 'gh']"
            onChange={handleArrString}
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

export default Lesson1;
