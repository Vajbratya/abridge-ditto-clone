type SpeechToReportCardProps = {
  className?: string;
  heightClassName?: string;
  fitToFrame?: boolean;
};

export default function SpeechToReportCard({ className = "", heightClassName = "h-[620px]", fitToFrame = false }: SpeechToReportCardProps) {
  if (fitToFrame) {
    return (
      <div className={`relative overflow-hidden rounded-[28px] border border-[#e7dfd3] bg-[#f0eae2] shadow-2xl shadow-black/30 ${className}`}>
        <iframe
          title="Speech-to-report Laudos.AI"
          src="/assets/laudos/speech-to-report-card"
          className="absolute left-1/2 top-1/2 block h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 scale-[0.38] border-0 bg-[#f0eae2] md:scale-[0.56] lg:scale-[0.66] 2xl:scale-[0.7]"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className={`overflow-hidden rounded-[28px] border border-[#e7dfd3] bg-[#f0eae2] shadow-2xl shadow-black/30 ${className}`}>
      <iframe
        title="Speech-to-report Laudos.AI"
        src="/assets/laudos/speech-to-report-card"
        className={`block ${heightClassName} w-full border-0 bg-[#f0eae2]`}
        loading="lazy"
      />
    </div>
  );
}
