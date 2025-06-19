"use client";
import React from "react";

import { useGetAllClientsQuery } from "@/store/clients/clientsApi";

type Props = {};

const page = (props: Props) => {
  const data = useGetAllClientsQuery();

  return <div>page</div>;
};

export default page;
