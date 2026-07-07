export default function Icon({ cid }: { cid?: string }) {
  return (
    <svg className="w-auto h-6 inline overflow-hidden" data-component="icon" fill="none" height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg" data-cid={cid}>
      <path d="M15.0032 15.5L18.5039 12M18.5039 12L15.0032 8.5M18.5039 12L9.50061 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
      <path d="M12.0032 18.5L15.9429 14.5607C16.8879 13.6158 16.2187 12 14.8823 12L9.50061 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
      <path d="M12.0032 5.5L15.9429 9.43928C16.8879 10.3842 16.2187 12 14.8823 12L5.50061 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}
