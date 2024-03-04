'use client'
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: theme.palette.mode === "dark" ? "#177ddc" :
          // change color track
          "rgb(30 58 152)",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          // change color track
          : "rgb(30 58 152)",
      boxSizing: "border-box",
    },
  }));

  type switchProps = {
    state: "Monthly"|"Yearly",
    handleToggle:()=>void
  }

  export default function CustomizedSwitch({state,handleToggle}:switchProps) {
    return (
      <Stack direction="row" spacing={1} alignItems="center">
        <p className={state === "Monthly" ? "font-bold text-blue-900" :"font-semibold text-gray-400"}>Monthly</p>
        <AntSwitch onClick={handleToggle} inputProps={{ "aria-label": "ant design" }} />
        <p className={state === "Yearly" ? "font-bold text-blue-900" :"font-semibold text-gray-400"} >Yearly</p>
      </Stack>
    );
  }
