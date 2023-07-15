import styled from "@emotion/styled";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { addUser } from "../services/api";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;
const defaultValue = {
  name: "",
  username: "",
  email: "",
  phonenumber: "",
};
const AddUsers = () => {
  const [user, setUser] = useState(defaultValue);
  const addUsersDetails = async() => {
    await addUser(user)
    console.clear();
    console.log(user);
  };
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });

    console.log(user);
  };
  return (
    <Container>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone Number</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phonenumber" />
      </FormControl>

      <FormControl>
        <Button variant="contained" onClick={() => addUsersDetails()}>
          Add Users
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUsers;
