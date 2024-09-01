"use client"
import useWindowWidth from "@/hooks/width";

function Background() {
  const width = useWindowWidth();

  return (
    <div className="fixed w-screen h-screen z-0 top-0" style={{
      backgroundImage: width < 1240 ? "url(/images/backgroundPhone.jpg)" : "url(/images/background.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
    </div>
  );
}

export default Background;