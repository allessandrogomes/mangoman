/* eslint-disable @next/next/no-img-element */
import { forwardRef } from 'react';
import { HeaderSection } from '../shared/HeaderSection';
import { SectionLayout } from '../shared/SectionLayout';
import { Input } from './Input';
import { Select } from './Select';
import { Send } from 'lucide-react';

const countries = [
  { label: 'Brazil', value: 'BR' },
  { label: 'United States', value: 'US' },
  { label: 'Canada', value: 'CA' },
  { label: 'Mexico', value: 'MX' },

  { label: 'Argentina', value: 'AR' },
  { label: 'Chile', value: 'CL' },
  { label: 'Colombia', value: 'CO' },
  { label: 'Peru', value: 'PE' },
  { label: 'Uruguay', value: 'UY' },
  { label: 'Paraguay', value: 'PY' },

  { label: 'Portugal', value: 'PT' },
  { label: 'Spain', value: 'ES' },
  { label: 'France', value: 'FR' },
  { label: 'Germany', value: 'DE' },
  { label: 'Italy', value: 'IT' },
  { label: 'United Kingdom', value: 'GB' },
  { label: 'Netherlands', value: 'NL' },
  { label: 'Belgium', value: 'BE' },
  { label: 'Switzerland', value: 'CH' },

  { label: 'China', value: 'CN' },
  { label: 'Japan', value: 'JP' },
  { label: 'South Korea', value: 'KR' },
  { label: 'India', value: 'IN' },

  { label: 'Australia', value: 'AU' },
  { label: 'New Zealand', value: 'NZ' },

  { label: 'South Africa', value: 'ZA' },
  { label: 'Egypt', value: 'EG' },

  { label: 'United Arab Emirates', value: 'AE' },
  { label: 'Saudi Arabia', value: 'SA' },
  { label: 'Other', value: 'OTHER' },
];

const interests = [
  { label: 'Buy mangoes', value: 'purchase' },
  { label: 'Business partnership', value: 'partnership' },
  { label: 'International distribution', value: 'distribution' },
  { label: 'Export information', value: 'export_info' },
  { label: 'Other matters', value: 'other' },
];

export const RequestAQuote = forwardRef<HTMLElement>((_, ref) => {
  return (
    <SectionLayout
      className="bg-gradient-to-b from-primary to-green-900 pb-20"
      ref={ref}
    >
      <HeaderSection
        title="Request a quote"
        subtitle="Contact our team to discuss exports, partnerships, and product availability"
        titleColor="secondary"
        subtitleColor="secondary"
      />

      <div className="flex flex-wrap w-full">
        <form className="flex flex-1 flex-col bg-secondary rounded-lg p-10 w-full">
          <div className="flex flex-col md:flex-row items-stretch gap-5 md:gap-10 w-full">
            <div className="w-full lg:flex-1 flex flex-col gap-5">
              <Input id="name" label="Name" />
              <Input id="enterprise" label="Enterprise" />
              <Select options={countries} label="Country" />
              <Input id="email" label="E-mail" type="email" />
              <Input id="phone" label="Phone" />
            </div>
            <div className="w-full lg:flex-1 flex flex-col gap-5">
              <Select options={interests} label="Interest" />
              <div className="flex flex-col">
                <label>Message</label>
                <textarea className="w-full min-h-[200px] md:min-h-[285px] border border-primary rounded-lg p-2 text-sm outline-none resize-none" />
              </div>
            </div>
          </div>
          <button
            type="button"
            className="flex items-center justify-center gap-2 cursor-pointer bg-primary text-secondary h-10 w-22 mt-5 rounded-lg hover:opacity-90 self-center"
          >
            <Send size={18} />
            Send
          </button>
        </form>

        <div className="hidden lg:block flex-1 max-h-[500px]">
          <img
            src="/manga-form.png"
            className="w-full h-full object-contain scale-60"
            alt="Mango"
          />
        </div>
      </div>
    </SectionLayout>
  );
});

RequestAQuote.displayName = 'RequestAQuote';
