import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';

export interface IProduct {
  nome: string;
  descricao: string;
  imagem: {
    url: string;
  };
}

interface ProductsResponse {
  data: IProduct[];
}

async function getProducts(locale: string) {
  const { data } = await api.get<ProductsResponse>(
    `/products?locale=${locale}&populate[imagem][fields][0]=url`,
  );
  return data;
}

export function useGetProducts(locale: string) {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(locale),
    refetchOnWindowFocus: false,
  });
}
