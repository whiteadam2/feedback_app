import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { StyledForm } from "./styled/Form.styled";
import { sendFeedback } from "../redux/feedbackSlice";
import { StatusBar } from "./StatusBar";

export function Form() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(sendFeedback(data));
    reset();
  };

  return (
    <StyledForm inputHeight="60" areaHeight="160">
      <h1>Reach out to us!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Your name:"
          {...register("name", {
            required: { value: true, message: "Empty field!" },
            minLength: { value: 3, message: "Min 3 letters" },
          })}
        />
        {errors?.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        <input
          type="email"
          placeholder="Your email:"
          {...register("email", {
            required: { value: true, message: "Empty field!" },
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
          })}
        />
        {errors?.email && (
          <p style={{ color: "red" }}>{errors.email.message}</p>
        )}
        <textarea
          placeholder="Your feedback:"
          {...register("feedback", {
            required: { value: true, message: "Empty field!" },
            minLength: { value: 10, message: "Min 10 letters" },
            maxLength: { value: 120, message: "Max 120 letters" },
          })}
        />
        {errors?.feedback && (
          <p style={{ color: "red" }}>{errors.feedback.message}</p>
        )}

        <button type="submit">Send message</button>
        <StatusBar />
      </form>
    </StyledForm>
  );
}
