/* eslint-disable @next/next/no-img-element */
'use client';

import { Instagram, Linkedin, Mail, Menu, Phone } from 'lucide-react';
import { useState } from 'react';

interface IHeaderProps {
  onHero: () => void;
  onWhoWeAre: () => void;
  onVarieties: () => void;
  onQuality: () => void;
  onCertifications: () => void;
  onGallery: () => void;
  onWhere: () => void;
  onQuote: () => void;
}

export function Header({
  onHero,
  onWhoWeAre,
  onVarieties,
  onQuality,
  onCertifications,
  onGallery,
  onWhere,
  onQuote,
}: IHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed z-1000 bg-secondary w-full">
      {/* Cabeçalho de informações */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start text-sm gap-2 lg:gap-0 px-10 lg:px-20 py-2 bg-primary text-secondary">
        {/* Contatos */}
        <div className="hidden lg:flex flex-col lg:flex-row gap-2 lg:gap-8">
          <span className="flex gap-2 items-center">
            <Phone /> +55 74 98133-4117
          </span>
          <span className="flex gap-2 items-center">
            <Mail /> willianaislan@mangomanexportbrazil.com
          </span>
        </div>

        {/* Redes sociais */}
        <div className="flex gap-4">
          <a href="https://www.instagram.com/mangomanoficial" target="_blank">
            <Instagram />
          </a>
          <a
            href="https://www.linkedin.com/in/willian-lima-443a084b/"
            target="_blank"
          >
            <Linkedin />
          </a>
        </div>
      </div>

      {/* Cabeçalho de navegação */}
      <div className="h-20 flex justify-between items-center px-5 lg:px-20">
        {/* Logo */}
        <a href="#" className="w-40">
          <img src="./logo.png" alt="MangoMan Logo" className="object-cover" />
        </a>

        {/* Barra de navegação */}
        <nav className="hidden lg:block">
          <ul className="flex gap-6">
            <li
              onClick={onHero}
              className="cursor-pointer border-b-2 border-transparent hover:border-primary transition-colors duration-300"
            >
              Home
            </li>
            <li
              onClick={onWhoWeAre}
              className="cursor-pointer border-b-2 border-transparent hover:border-primary transition-colors duration-300"
            >
              About
            </li>
            <li
              onClick={onVarieties}
              className="cursor-pointer border-b-2 border-transparent hover:border-primary transition-colors duration-300"
            >
              Products
            </li>
            <li
              onClick={onQuality}
              className="cursor-pointer border-b-2 border-transparent hover:border-primary transition-colors duration-300"
            >
              Processes
            </li>
            <li
              onClick={onCertifications}
              className="cursor-pointer border-b-2 border-transparent hover:border-primary transition-colors duration-300"
            >
              Certifications
            </li>
            <li
              onClick={onGallery}
              className="cursor-pointer border-b-2 border-transparent hover:border-primary transition-colors duration-300"
            >
              Gallery
            </li>
            <li
              onClick={onWhere}
              className="cursor-pointer border-b-2 border-transparent hover:border-primary transition-colors duration-300"
            >
              Localization
            </li>
            <li
              onClick={onQuote}
              className="cursor-pointer border-b-2 border-transparent hover:border-primary transition-colors duration-300"
            >
              Contact
            </li>
          </ul>
        </nav>

        {/* Botão menu mobile */}
        <button className="lg:hidden" onClick={() => setIsOpen(true)}>
          <Menu />
        </button>

        {/* Overlay (fundo escuro) */}
        <div
          className={`fixed h-lvh inset-0 z-11 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Sidebar */}
        <div
          className={`fixed h-lvh top-0 right-0 w-64 bg-white shadow-xl z-50 p-6 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <button className="mb-6" onClick={() => setIsOpen(false)}>
            ✕
          </button>

          <ul className="flex flex-col gap-4 text-lg">
            <li
              onClick={() => {
                onHero();
                setIsOpen(false);
              }}
              className="cursor-pointer"
            >
              Home
            </li>

            <li
              onClick={() => {
                onWhoWeAre();
                setIsOpen(false);
              }}
              className="cursor-pointer"
            >
              About
            </li>

            <li
              onClick={() => {
                onVarieties();
                setIsOpen(false);
              }}
              className="cursor-pointer"
            >
              Products
            </li>

            <li
              onClick={() => {
                onQuality();
                setIsOpen(false);
              }}
              className="cursor-pointer"
            >
              Processes
            </li>

            <li
              onClick={() => {
                onCertifications();
                setIsOpen(false);
              }}
              className="cursor-pointer"
            >
              Certifications
            </li>

            <li
              onClick={() => {
                onGallery();
                setIsOpen(false);
              }}
              className="cursor-pointer"
            >
              Gallery
            </li>

            <li
              onClick={() => {
                onWhere();
                setIsOpen(false);
              }}
              className="cursor-pointer"
            >
              Localization
            </li>

            <li
              onClick={() => {
                onQuote();
                setIsOpen(false);
              }}
              className="cursor-pointer"
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
