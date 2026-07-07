export type TextLinkData = {
  ariacontrols: string;
  label: string;
};
/** A text link. */
export default function TextLink({ d, cids }: { d: TextLinkData; cids: string[] }) {
  return (
    <button data-cid={cids[0]} className="block relative z-10 py-1.5 px-4 rounded-lg text-color-004 font-medium tracking-[-0.16px] text-center cursor-pointer" data-component="button" aria-controls={d.ariacontrols} aria-expanded="false">
      {d.label}
    </button>
  );
}
