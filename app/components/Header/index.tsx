/* eslint-disable @next/next/no-img-element */
'use client';

import { Mail, Menu, Phone } from 'lucide-react';
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
};

export function Header({
  onHero,
  onWhoWeAre,
  onVarieties,
  onQuality,
  onCertifications,
  onGallery,
  onWhere,
  onQuote
}: IHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed z-1000 bg-secondary w-full">
      {/* Cabeçalho de informações */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start text-sm gap-2 lg:gap-0 px-10 lg:px-20 py-4 lg:py-2 bg-primary text-secondary">
        {/* Contatos */}
        <div className="hidden lg:flex flex-col lg:flex-row gap-2 lg:gap-8">
          <span className="flex gap-2 items-center">
            <Phone /> +55 (87) 9990284-4482
          </span>
          <span className="flex gap-2 items-center">
            <Mail /> contato@empresa.com.br
          </span>
        </div>

        {/* Redes sociais */}
        <div className="flex gap-4">
          <a href="#" target="_blank">
            <img src="./facebook-icon.png" alt="Facebook Icon" />
          </a>
          <a href="#" target="_blank">
            <img src="./instagram-icon.png" alt="Instagram Icon" />
          </a>
          <a href="#" target="_blank">
            <img src="./linkedin-icon.png" alt="LinkedIn Icon" />
          </a>
        </div>
      </div>

      {/* Cabeçalho de navegação */}
      <div className="h-20 flex justify-between items-center px-10 lg:px-20">
        {/* Logo */}
        <a href="#">
          <img src="./logo.png" alt="MangoMan Logo" />
        </a>

        {/* Barra de navegação */}
        <nav className="hidden lg:block">
          <ul className="flex gap-6">
            <li onClick={onHero} className="cursor-pointer border-b-2 border-transparent hover:border-primary transition-colors duration-300">
              Início
            </li>
            <li onClick={onWhoWeAre} className="cursor-pointer border-b-2 border-transparent hover:border-primary transition-colors duration-300">
              Sobre
            </li>
            <li onClick={onVarieties} className="cursor-pointer border-b-2 border-transparent hover:border-primary transition-colors duration-300">
              Produtos
            </li>
            <li onClick={onQuality} className="cursor-pointer border-b-2 border-transparent hover:border-primary transition-colors duration-300">
              Processos
            </li>
            <li onClick={onCertifications} className="cursor-pointer border-b-2 border-transparent hover:border-primary transition-colors duration-300">
              Certificações
            </li>
            <li onClick={onGallery} className="cursor-pointer border-b-2 border-transparent hover:border-primary transition-colors duration-300">
              Galeria
            </li>
            <li onClick={onWhere} className="cursor-pointer border-b-2 border-transparent hover:border-primary transition-colors duration-300">
              Localização
            </li>
            <li onClick={onQuote} className="cursor-pointer border-b-2 border-transparent hover:border-primary transition-colors duration-300">
              Contato
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
              Início
            </li>

            <li
              onClick={() => {
                onWhoWeAre();
                setIsOpen(false);
              }}
              className="cursor-pointer"
            >
              Sobre
            </li>

            <li
              onClick={() => {
                onVarieties();
                setIsOpen(false);
              }}
              className="cursor-pointer"
            >
              Produtos
            </li>

            <li
              onClick={() => {
                onQuality();
                setIsOpen(false);
              }}
              className="cursor-pointer"
            >
              Processos
            </li>

            <li
              onClick={() => {
                onCertifications();
                setIsOpen(false);
              }}
              className="cursor-pointer"
            >
              Certificações
            </li>

            <li
              onClick={() => {
                onGallery();
                setIsOpen(false);
              }}
              className="cursor-pointer"
            >
              Galeria
            </li>

            <li
              onClick={() => {
                onWhere();
                setIsOpen(false);
              }}
              className="cursor-pointer"
            >
              Localização
            </li>

            <li
              onClick={() => {
                onQuote();
                setIsOpen(false);
              }}
              className="cursor-pointer"
            >
              Contato
            </li>

          </ul>
        </div>
      </div>
    </header>
  );
}
