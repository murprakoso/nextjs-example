import React from "react";

interface IChildren {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: IChildren) => {
  return (
    <div>
      <h1 className="text-lg">AuthLayout</h1>
      {children}
    </div>
  );
};

export default AuthLayout;
