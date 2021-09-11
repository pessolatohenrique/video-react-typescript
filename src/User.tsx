import React from "react";

interface IUser {
  name: string;
  email: string;
}

interface Props {
  user: IUser;
}

const User: React.FC<Props> = ({ user }) => {
  return <h1>{user.name}</h1>;
};

export { User };
