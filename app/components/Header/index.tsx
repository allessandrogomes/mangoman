/* eslint-disable @next/next/no-img-element */
'use client';

import {
  Instagram,
  Languages,
  Linkedin,
  Mail,
  Menu,
  Phone,
} from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export type Section =
  | 'hero'
  | 'who'
  | 'varieties'
  | 'quality'
  | 'certifications'
  | 'gallery'
  | 'where'
  | 'quote';

interface IHeaderProps {
  header: {
    language: string;
    navbar: {
      home: string;
      about: string;
      products: string;
      processes: string;
      certifications: string;
      gallery: string;
      localization: string;
      contact: string;
    };
  };
  onHero: () => void;
  onWhoWeAre: () => void;
  onVarieties: () => void;
  onQuality: () => void;
  onCertifications: () => void;
  onGallery: () => void;
  onWhere: () => void;
  onQuote: () => void;
}

const SUPPORTED_LOCALES = ['en', 'pt-br', 'es', 'fr'] as const;
type Locale = (typeof SUPPORTED_LOCALES)[number];

export function Header({
  header,
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
  const [activeSection, setActiveSection] = useState<Section>('hero');

  const pathname = usePathname();
  const router = useRouter();

  const [locale, setLocale] = useState<Locale>('en');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as Locale;
    router.push(`/${newLocale}`);
  };

  useEffect(() => {
    const sections: Section[] = [
      'hero',
      'who',
      'varieties',
      'quality',
      'certifications',
      'gallery',
      'where',
      'quote',
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as Section);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  useEffect(() => {
    const segment = pathname.split('/').filter(Boolean)[0];

    if (SUPPORTED_LOCALES.includes(segment as Locale)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocale(segment as Locale);
    }
  }, [pathname]);

  const navItemClass = (section: Section) =>
    `cursor-pointer border-b-2 transition-colors duration-300
   ${
     activeSection === section
       ? 'border-primary'
       : 'border-transparent hover:border-primary'
   }`;

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
          <a
            href="mailto:willianaislan@mangomanexportbrazil.com"
            className="lg:hidden hover:opacity-80 transition-opacity text-sm"
          >
            <Mail />
          </a>
          <a
            href="tel:+5574981334117"
            className="lg:hidden hover:opacity-80 transition-opacity text-sm"
          >
            <Phone />
          </a>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1">
            <Languages size={20} /> {header.language ?? 'Language'}:
          </span>
          <select
            value={locale}
            onChange={handleChange}
            className="border-1 rounded-lg outline-none text-center"
          >
            <option className="text-black" value="en">
              English
            </option>
            <option className="text-black" value="pt-br">
              Português - Brasil
            </option>
            <option className="text-black" value="es">
              Español
            </option>
            <option className="text-black" value="fr">
              Français
            </option>
          </select>
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
              onClick={() => {
                onHero();
                setActiveSection('hero');
              }}
              className={navItemClass('hero')}
            >
              {header.navbar.home ?? 'Home'}
            </li>
            <li
              onClick={() => {
                onWhoWeAre();
                setActiveSection('who');
              }}
              className={navItemClass('who')}
            >
              {header.navbar.about ?? 'About'}
            </li>
            <li
              onClick={() => {
                onVarieties();
                setActiveSection('varieties');
              }}
              className={navItemClass('varieties')}
            >
              {header.navbar.products ?? 'Products'}
            </li>
            <li
              onClick={() => {
                onQuality();
                setActiveSection('quality');
              }}
              className={navItemClass('quality')}
            >
              {header.navbar.processes ?? 'Processes'}
            </li>
            <li
              onClick={() => {
                onCertifications();
                setActiveSection('certifications');
              }}
              className={navItemClass('certifications')}
            >
              {header.navbar.certifications ?? 'Certifications'}
            </li>
            <li
              onClick={() => {
                onGallery();
                setActiveSection('gallery');
              }}
              className={navItemClass('gallery')}
            >
              {header.navbar.gallery ?? 'Gallery'}
            </li>
            <li
              onClick={() => {
                onWhere();
                setActiveSection('where');
              }}
              className={navItemClass('where')}
            >
              {header.navbar.localization ?? 'Localization'}
            </li>
            <li
              onClick={() => {
                onQuote();
                setActiveSection('quote');
              }}
              className={navItemClass('quote')}
            >
              {header.navbar.contact ?? 'Contact'}
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
              className={`${activeSection === 'hero' && 'border-primary border-b-2 '} cursor-pointer w-max`}
            >
              {header.navbar.home ?? 'Home'}
            </li>

            <li
              onClick={() => {
                onWhoWeAre();
                setIsOpen(false);
              }}
              className={`${activeSection === 'who' && 'border-primary border-b-2 '} cursor-pointer w-max`}
            >
              {header.navbar.about ?? 'About'}
            </li>

            <li
              onClick={() => {
                onVarieties();
                setIsOpen(false);
              }}
              className={`${activeSection === 'varieties' && 'border-primary border-b-2 '} cursor-pointer w-max`}
            >
              {header.navbar.products ?? 'Products'}
            </li>

            <li
              onClick={() => {
                onQuality();
                setIsOpen(false);
              }}
              className={`${activeSection === 'quality' && 'border-primary border-b-2 '} cursor-pointer w-max`}
            >
              {header.navbar.processes ?? 'Processes'}
            </li>

            <li
              onClick={() => {
                onCertifications();
                setIsOpen(false);
              }}
              className={`${activeSection === 'certifications' && 'border-primary border-b-2 '} cursor-pointer w-max`}
            >
              {header.navbar.certifications ?? 'Certifications'}
            </li>

            <li
              onClick={() => {
                onGallery();
                setIsOpen(false);
              }}
              className={`${activeSection === 'gallery' && 'border-primary border-b-2 '} cursor-pointer w-max`}
            >
              {header.navbar.gallery ?? 'Gallery'}
            </li>

            <li
              onClick={() => {
                onWhere();
                setIsOpen(false);
              }}
              className={`${activeSection === 'where' && 'border-primary border-b-2 '} cursor-pointer w-max`}
            >
              {header.navbar.localization ?? 'Localization'}
            </li>

            <li
              onClick={() => {
                onQuote();
                setIsOpen(false);
              }}
              className={`${activeSection === 'quote' && 'border-primary border-b-2 '} cursor-pointer w-max`}
            >
              {header.navbar.contact ?? 'Contact'}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
