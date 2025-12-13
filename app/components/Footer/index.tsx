import { Mail, MapPin, Phone } from "lucide-react";


export function Footer() {
    return (
        <footer className="flex flex-col md:flex-row gap-10 md:gap-5 md:justify-around flex-wrap bg-tertiary text-secondary p-10">
            <div className="h-full flex flex-col gap-3 justify-center max-w-[400px]">
                <a href="#" className="mb-5">
                    <img src="./logo-white.png" alt="MangoMan Logo" className="w-[100px]" />
                </a>
                <h4 className="flex gap-1 font-semibold"><MapPin className="min-w-[24px]"/> Rua Joaquim Nabuco, 541 - Centro, Petrolina - PE, 56.302-140</h4>
                <h4 className="flex gap-1 font-semibold"><Mail /> contato@empresa.com.br</h4>
                <h4 className="flex gap-1 font-semibold"><Phone /> +55 (87) 9990284-4482r</h4>
            </div>

            <div>
                <h3 className="uppercase font-bold mb-5 text-2xl">Mapa Web</h3>
                <nav>
                    <ul className="flex flex-col gap-2">
                        <li className="w-max cursor-pointer border-b-2 border-transparent hover:border-secondary transition-colors duration-300">
                            Início
                        </li>
                        <li className="w-max cursor-pointer border-b-2 border-transparent hover:border-secondary transition-colors duration-300">
                            Sobre
                        </li>
                        <li className="w-max cursor-pointer border-b-2 border-transparent hover:border-secondary transition-colors duration-300">
                            Produtos
                        </li>
                        <li className="w-max cursor-pointer border-b-2 border-transparent hover:border-secondary transition-colors duration-300">
                            Processos
                        </li>
                        <li className="w-max cursor-pointer border-b-2 border-transparent hover:border-secondary transition-colors duration-300">
                            Certificações
                        </li>
                        <li className="w-max cursor-pointer border-b-2 border-transparent hover:border-secondary transition-colors duration-300">
                            Galeria
                        </li>
                        <li className="w-max cursor-pointer border-b-2 border-transparent hover:border-secondary transition-colors duration-300">
                            Localização
                        </li>
                        <li className="w-max cursor-pointer border-b-2 border-transparent hover:border-secondary transition-colors duration-300">
                            Contato
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="flex flex-col gap-2">
                <h4>Todos os direitos reservados <strong>MangoMan</strong> &copy; 2026</h4>
                <h4>Desenvolvido por <a href="https://valebytes.com.br" target="_blank" className="underline font-bold cursor-pointer">ValeBytes</a></h4>
                <a href="https://valebytes.com.br" target="_blank" className="mt-5">
                    <img src="/valebytes-logo.png" className="w-[100px]" />
                </a>
            </div>
        </footer>
    )
}