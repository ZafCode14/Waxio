"use client";
// components/Loading.tsx
export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loading-spinner"></div>
      <style jsx>{`
        .loading-spinner {
          border: 8px solid rgba(0, 0, 0, 0.1);
          border-top: 8px solid #000;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}