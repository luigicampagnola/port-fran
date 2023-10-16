import Image from "next/image";

export default function ArtComponent() {
  return (
    <div className="relative w-full h-full">
      <Image src="/sashat.png" width={1920} height={1080} />
      <div className="mt-20">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ top: "29.8rem", left: "12rem", fontSize: "2rem" }}
        >
          <span style={{ color: "#ff2525" }} className="text-white font-bold">
            [ 2D ]
          </span>
        </div>
      </div>
    </div>
  );
}
