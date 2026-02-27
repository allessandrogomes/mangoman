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

async function getProducts() {
  const { data } = await api.get<ProductsResponse>(
    '/products?populate[imagem][fields][0]=url',
  );
  return data;
}

export function useGetProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    refetchOnWindowFocus: false,
  });
}
