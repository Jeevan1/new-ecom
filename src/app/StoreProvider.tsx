"use client";
import React, { useRef } from "react";
import { Provider } from "react-redux";
import { store, AppStore } from "../lib";
import { getProducts } from "@/lib/features/ProductSlice";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = store();
    storeRef.current.dispatch(getProducts());
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
