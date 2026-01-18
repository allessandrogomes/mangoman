/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Mail, MapPin, Phone } from 'lucide-react';

interface IFooterProps {
  onHero: () => void;
  onWhoWeAre: () => void;
  onVarieties: () => void;
  onQuality: () => void;
  onCertifications: () => void;
  onGallery: () => void;
  onWhere: () => void;
  onQuote: () => void;
}

export function Footer({
  onHero,
  onWhoWeAre,
  onVarieties,
  onQuality,
  onCertifications,
  onGallery,
  onWhere,
  onQuote,
}: IFooterProps) {
  return (
    <footer className="flex flex-col md:flex-row gap-10 md:gap-5 md:justify-around flex-wrap bg-tertiary text-xs min-[375px]:text-sm text-secondary p-5 xl:p-10">
      <div className="h-full flex flex-col gap-3 justify-center max-w-[400px]">
        <a href="#" className="mb-5 w-40">
          <img
            src="./logo-white.svg"
            alt="MangoMan Logo"
            className="object-cover w-full"
          />
        </a>
        <h4 className="flex gap-1 font-semibold">
          <MapPin className="min-w-[20px]" size={20} /> Empresarial Trade Center
          - R. Joaquim Nabuco, 9° Floor - Center, Petrolina - PE, 56304-040
        </h4>
        <h4 className="flex gap-1 font-semibold">
          <Mail size={20} /> willianaislan@mangomanexportbrazil.com
        </h4>
        <h4 className="flex gap-1 font-semibold">
          <Phone size={20} /> +55 74 98133-4117
        </h4>
      </div>

      <div>
        <h3 className="uppercase font-bold mb-5 text-2xl">Web Map</h3>
        <nav>
          <ul className="flex flex-col gap-2">
            <li
              onClick={onHero}
              className="w-max cursor-pointer border-b-2 border-transparent hover:border-secondary transition-colors duration-300"
            >
              Home
            </li>
            <li
              onClick={onWhoWeAre}
              className="w-max cursor-pointer border-b-2 border-transparent hover:border-secondary transition-colors duration-300"
            >
              About
            </li>
            <li
              onClick={onVarieties}
              className="w-max cursor-pointer border-b-2 border-transparent hover:border-secondary transition-colors duration-300"
            >
              Products
            </li>
            <li
              onClick={onQuality}
              className="w-max cursor-pointer border-b-2 border-transparent hover:border-secondary transition-colors duration-300"
            >
              Processes
            </li>
            <li
              onClick={onCertifications}
              className="w-max cursor-pointer border-b-2 border-transparent hover:border-secondary transition-colors duration-300"
            >
              Certifications
            </li>
            <li
              onClick={onGallery}
              className="w-max cursor-pointer border-b-2 border-transparent hover:border-secondary transition-colors duration-300"
            >
              Gallery
            </li>
            <li
              onClick={onWhere}
              className="w-max cursor-pointer border-b-2 border-transparent hover:border-secondary transition-colors duration-300"
            >
              Localization
            </li>
            <li
              onClick={onQuote}
              className="w-max cursor-pointer border-b-2 border-transparent hover:border-secondary transition-colors duration-300"
            >
              Contact
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex flex-col gap-2">
        <h4>
          All rights reserved <strong>MangoMan</strong> &copy; 2026
        </h4>
        <h4>
          Developed by{' '}
          <a
            href="https://valebytes.com.br"
            target="_blank"
            className="underline font-bold cursor-pointer"
          >
            ValeBytes
          </a>
        </h4>
        <a href="https://valebytes.com.br" target="_blank" className="mt-5">
          <img src="/valebytes-logo.png" className="w-[100px]" />
        </a>
      </div>
    </footer>
  );
}
