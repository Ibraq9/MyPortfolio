"use client";

export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-indigo-600/15 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-blue-600/10 blur-[100px]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
