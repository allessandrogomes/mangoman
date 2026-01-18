/* eslint-disable @next/next/no-img-element */
import { forwardRef, useState } from 'react';
import { HeaderSection } from '../shared/HeaderSection';
import { SectionLayout } from '../shared/SectionLayout';
import { Input } from './Input';
import { Select } from './Select';
import { LoaderCircle, Send } from 'lucide-react';
import { Toast } from './Toast';

const countries = [
  { label: 'Brazil', value: 'Brasil' },
  { label: 'United States', value: 'Estados Unidos' },
  { label: 'Canada', value: 'Canadá' },
  { label: 'Mexico', value: 'México' },

  { label: 'Argentina', value: 'Argentina' },
  { label: 'Chile', value: 'Chile' },
  { label: 'Colombia', value: 'Colômbia' },
  { label: 'Peru', value: 'Peru' },
  { label: 'Uruguay', value: 'Uruguai' },
  { label: 'Paraguay', value: 'Paraguai' },

  { label: 'Portugal', value: 'Portugal' },
  { label: 'Spain', value: 'Espanha' },
  { label: 'France', value: 'França' },
  { label: 'Germany', value: 'Alemanha' },
  { label: 'Italy', value: 'Itália' },
  { label: 'United Kingdom', value: 'Reino Unido' },
  { label: 'Netherlands', value: 'Países Baixos' },
  { label: 'Belgium', value: 'Bélgica' },
  { label: 'Switzerland', value: 'Suíça' },

  { label: 'China', value: 'China' },
  { label: 'Japan', value: 'Japão' },
  { label: 'South Korea', value: 'Coreia do Sul' },
  { label: 'India', value: 'Índia' },

  { label: 'Australia', value: 'Austrália' },
  { label: 'New Zealand', value: 'Nova Zelândia' },

  { label: 'South Africa', value: 'África do Sul' },
  { label: 'Egypt', value: 'Egito' },

  { label: 'United Arab Emirates', value: 'Emirados Árabes Unidos' },
  { label: 'Saudi Arabia', value: 'Arábia Saudita' },

  { label: 'Other', value: 'Outro' },
];

const interests = [
  { label: 'Buy mangoes', value: 'Compra de mangas' },
  { label: 'Business partnership', value: 'Parceria comercial' },
  { label: 'International distribution', value: 'Distribuição internacional' },
  { label: 'Export information', value: 'Informações sobre exportação' },
  { label: 'Other matters', value: 'Outros assuntos' },
];

type FormData = {
  access_key: string;
  nome: string;
  empresa: string;
  pais: string;
  email: string;
  telefone: string;
  interesse: string;
  mensagem: string;
};

type Toast = {
  message: string;
  visible: boolean;
  type: 'success' | 'error';
};

const ACCESS_KEY = '1100e41b-b740-4208-b85b-807e4a356332';

export const RequestAQuote = forwardRef<HTMLElement>((_, ref) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    access_key: ACCESS_KEY,
    nome: '',
    empresa: '',
    pais: '',
    email: '',
    telefone: '',
    interesse: '',
    mensagem: '',
  });
  const [toast, setToast] = useState<Toast>({
    message: '',
    visible: false,
    type: 'success',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error();
      }

      resetForm();

      setToast({
        message: 'Message sent successfully, we will contact you.',
        type: 'success',
        visible: true,
      });
    } catch {
      setToast({
        message:
          'Something went wrong. Please try again later or contact us through one of our official channels.',
        type: 'error',
        visible: false,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData((prev) => ({
      ...prev,
      nome: '',
      empresa: '',
      pais: '',
      email: '',
      telefone: '',
      interesse: '',
      mensagem: '',
    }));
  };

  return (
    <SectionLayout
      id="quote"
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
        <form
          onSubmit={handleSubmit}
          className="flex flex-1 flex-col bg-secondary rounded-lg p-10 w-full"
        >
          <div className="flex flex-col md:flex-row items-stretch gap-5 md:gap-10 w-full">
            <div className="w-full lg:flex-1 flex flex-col gap-5">
              <Input
                id="nome"
                name="nome"
                label="Name"
                value={formData.nome}
                onChange={handleChange}
              />
              <Input
                name="empresa"
                id="empresa"
                label="Enterprise"
                value={formData.empresa}
                onChange={handleChange}
              />
              <Select
                name="pais"
                options={countries}
                label="Country"
                defaultOption="Select your pais"
                value={formData.pais}
                onChange={handleChange}
              />
              <Input
                id="email"
                name="email"
                label="E-mail"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                id="telefone"
                name="telefone"
                label="Phone"
                value={formData.telefone}
                onChange={handleChange}
              />
            </div>
            <div className="w-full lg:flex-1 flex flex-col gap-5">
              <Select
                name="interesse"
                options={interests}
                label="Interest"
                defaultOption="Select your interesse"
                value={formData.interesse}
                onChange={handleChange}
              />
              <div className="flex flex-col">
                <label>Message</label>
                <textarea
                  name="mensagem"
                  onChange={handleChange}
                  value={formData.mensagem}
                  className="w-full min-h-[200px] md:min-h-[285px] border border-primary rounded-lg p-2 text-sm outline-none resize-none"
                  required
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center justify-center gap-2 cursor-pointer bg-primary text-secondary h-10 w-max px-2 mt-5 rounded-lg hover:opacity-90 self-center disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <LoaderCircle size={18} className="animate-spin" />
                Sending
              </>
            ) : (
              <>
                <Send size={18} />
                Send
              </>
            )}
          </button>
        </form>
        <Toast
          message={toast.message}
          visible={toast.visible}
          type={toast.type}
          onClose={() =>
            setToast({
              message: '',
              type: 'success',
              visible: false,
            })
          }
        />

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
