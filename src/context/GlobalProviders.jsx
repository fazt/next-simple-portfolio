"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export function GlobalProviders({ children }) {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#38BDF8"
        // options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}
