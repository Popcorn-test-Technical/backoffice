"use client";

import { Provider } from "react-redux";
import { store } from "../store";
import { FC } from "react";

type Props = {
  children: React.ReactNode;
};

const ReduxProvider: FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
