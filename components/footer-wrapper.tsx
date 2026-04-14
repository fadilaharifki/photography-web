"use client";
import Footer from "@/components/footer";
import { useLayoutStore } from "@/store/useLayoutStore";

export default function FooterWrapper() {
  const showFooter = useLayoutStore((state) => state.showFooter);
  
  if (!showFooter) return null;
  return <Footer />;
}