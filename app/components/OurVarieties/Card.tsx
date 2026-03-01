import { getImageUrl } from "@/app/utils/get-image-url";

/* eslint-disable @next/next/no-img-element */
interface ICard {
  src: string;
  altImage: string;
  title: string;
  description: string;
  premium?: boolean;
}

export function Card({
  src,
  altImage,
  title,
  description,
  premium = false,
}: ICard) {
  return (
    <div className="relative group flex justify-center">
      <div
        className="relative w-[300px] h-[470px] flex flex-col p-10 items-center justify-between text-tertiary cursor-pointer bg-secondary rounded-lg shadow-xl
            transition-transform duration-300 hover:scale-105 group overflow-hidden"
      >
        {premium && (
          <span
            className="absolute top-4 left-[-25px] rotate-[-35deg] 
                    bg-primary text-white font-bold px-10 py-1 shadow-md"
          >
            {' '}
            Premium{' '}
          </span>
        )}
        <div className="w-[150px] h-[150px] rounded-full p-2 border border-b border-tertiary ribbon transition-transform duration-2000 group-hover:scale-115">
          <img
            src={getImageUrl(src)}
            alt={altImage}
            className="w-full h-full object-cover rounded-full transition-transform duration-2000 group-hover:rotate-360"
          />
        </div>
        <h3 className="text-2xl text-center font-bold border-b border-tertiary p-2 bg-gradient-to-br from-tertiary to-red-500 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-sm text-justify">{description}</p>
      </div>
    </div>
  );
}
