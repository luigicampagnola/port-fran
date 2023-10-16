import Image from "next/image";

export default function HeroBanner({ src, layout }) {
  return (
    <div className="relative">
      <div className="grid place-items-center w-full h-full">
        <Image src="/office.png" width={1920} height={1080} />
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center">
            <h1 className="text-white text-6xl font-bold">
              Francesco Campagnola
            </h1>
            <div className="mt-3">
              <p
                style={{ letterSpacing: "0.94rem", color: "" }}
                className="text-white text-2xl font-bold uppercase"
              >
                Concept Artist
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
