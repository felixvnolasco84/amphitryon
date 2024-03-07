export default function IFrameMap({ url }: { url: string }) {
  return (
    <iframe
      src={url}
      className="h-full w-full"
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
