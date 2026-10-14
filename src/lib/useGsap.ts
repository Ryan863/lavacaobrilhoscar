import { useEffect, useLayoutEffect, type RefObject } from "react";
import { gsap } from "gsap";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** Minimal GSAP context hook with safe cleanup. */
export function useGSAP(fn: () => void, scope: RefObject<Element | null>) {
  useIso(() => {
    const ctx = gsap.context(fn, scope as RefObject<Element>);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
