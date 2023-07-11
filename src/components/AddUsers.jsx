import styled from "@emotion/styled";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import React from "react";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;
const AddUsers = () => {
  return (
    <Container>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input />
      </FormControl>
      <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input />
      </FormControl>
      <FormControl>
        <InputLabel>Phone Number</InputLabel>
        <Input />
      </FormControl>

      <FormControl>
        <Button variant="contained">Add Users</Button>
      </FormControl>
    </Container>
  );
};

export default AddUsers;
