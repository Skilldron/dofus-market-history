import { useAppDispatch, useAppSelector } from "@/app/config/hooks";
import React from "react";
import { selectOpacity, setOpacity } from "./preferencesSlice";

export default function Preferences() {
  const opacity = useAppSelector(selectOpacity);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setOpacity(20));
    console.log("opacity", opacity);
  };

  return <button onClick={handleClick}>preferences : {opacity}</button>;
}
