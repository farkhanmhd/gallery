export default function Card({ imageSource, children }) {
  return (
    <div className="card relative cursor-pointer rounded-xl overflow-hidden mb-5 w-full group shadow-md hover:shadow-lg break-inside-avoid">
      <img
        src={imageSource}
        alt={"image"}
        className="w-full h-auto grayscale-[.4] group-hover:grayscale-0 duration-300 group-hover:scale-110"
      />
      <p className=" px-5 pb-2 leading-7 absolute bottom-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent to-slate-900 text-white duration-300 line-clamp-2 text-ellipsis">
        {children}
      </p>
    </div>
  );
}
