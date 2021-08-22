import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import { selectUser, apiUserList } from "../createSlices/user";
import { useForm } from "react-hook-form";
import { apiAddPost, addPost } from "../createSlices/post";
import Loading from "./Loading";

function PostForm({ handleCloseForm }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const users = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    setIsLoading(true);
    await dispatch(apiUserList());
    setIsLoading(false);
  }, []);

  const handleOnSubmit = async (data, e) => {
    setIsLoading(true);
    const response = await dispatch(apiAddPost(data));
    dispatch(addPost(response.payload));
    setIsLoading(false);
    e.target.reset();
    handleCloseForm();
  };

  return (
    <Form onSubmit={handleSubmit(handleOnSubmit)} className="post-form">
      {isLoading && <Loading />}
      <FormGroup className="form-group" row>
        <Label for="exampleEmail" sm={2}>
          Title
        </Label>
        <Col sm={10}>
          <Input
            {...register("title", { required: true, maxLength: 250 })}
            type="text"
            placeholder="Enter post title ..."
            invalid={errors.title?.type ? true : false}
          />
          <p className="text-danger">
            {errors.title?.type === "required" && "Title is required"}
          </p>
        </Col>
      </FormGroup>
      <FormGroup className="form-group" row>
        <Label for="exampleEmail" sm={2}>
          Body
        </Label>
        <Col sm={10}>
          <Input
            {...register("body", { required: true, maxLength: 2000 })}
            type="text"
            placeholder="Enter post body ..."
            invalid={errors.body?.type ? true : false}
          />
          <p className="text-danger">
            {errors.body?.type === "required" && "Body is required"}
          </p>
        </Col>
      </FormGroup>
      <FormGroup className="form-group" row>
        <Label for="exampleSelect" sm={2}>
          User
        </Label>
        <Col sm={10}>
          <Input
            {...register("userId", { required: true })}
            type="select"
            name="userId"
            invalid={errors.userId?.type ? true : false}
          >
            <option value="">---- Choose user to post ----</option>
            {users?.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </Input>
          <p className="text-danger">
            {errors.userId?.type === "required" && "User is required"}
          </p>
        </Col>
      </FormGroup>
      <Button type="submit" style={{ float: "right" }} className="btn-submit">
        Submit
      </Button>
    </Form>
  );
}

export default PostForm;
