import Image from "next/image";

// One deliberate full-bleed break in the section rhythm — not repeated elsewhere.
// 16:9, daylight-neutral grade, no grain, per the imagery treatment for this build.
export default function ImageBand() {
  return (
    <section data-shot="image-band" aria-label="Door sill trim detail" className="relative h-[38vh] min-h-[220px] w-full overflow-hidden sm:h-[46vh]">
      <Image
        src="https://images.unsplash.com/photo-1748621020181-d9a7eac97877?auto=format&fit=crop&w=1800&h=1000&q=80"
        alt="Platinum trim door-sill plate on a vehicle, lettering pressed into brushed metal, shot in close crop."
        fill
        sizes="100vw"
        className="object-cover"
        style={{ filter: "saturate(1.02) contrast(1.04) brightness(1.0)" }}
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-5 py-6 sm:px-8">
        <p className="mx-auto max-w-6xl text-xs uppercase tracking-wide text-asphalt/85">
          Trim detail, door sill · every issue is shot on the actual test unit
        </p>
      </div>
    </section>
  );
}
