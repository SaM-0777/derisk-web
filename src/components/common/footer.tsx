export default function Footer() {
  return (
    <footer className="relative w-full h-96 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(240, 220, 255, 1) 15%, rgba(200, 150, 255, 1) 35%, rgba(150, 100, 255, 1) 55%, rgba(100, 50, 200, 1) 75%, rgba(40, 20, 100, 1) 100%)",
        }}
      />

      <div className="relative h-full flex items-end justify-between px-12 pb-16">
        <div className="flex-1">
          <p className="text-gray-400 text-sm font-light tracking-wide">
            www.derisk.com
          </p>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-6xl font-light text-gray-300 tracking-tight mb-2">
            DeRisk
          </h1>
          <p className="text-gray-400 text-sm font-light tracking-wide">
            Insure Your Assets
          </p>
        </div>

        <div className="flex-1 flex justify-end">
          <p className="text-gray-400 text-sm font-light tracking-wide">
            All Rights Reserved - 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
