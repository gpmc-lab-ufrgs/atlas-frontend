import { formatPopulationNumber } from "../utils/population";

export type propsMappingContentType = {
  id: string;
  label: string;
  format: any;
  type?: string;
};

export type propsMappingSectionType = {
  title: string;
  content: Array<propsMappingContentType>;
};

// OBSERVED: number,
// EXPECTED: string,
// RR_PREV: string,
// HDI: string,
// HDI_educ: string,
// HDI_long: string,
// HDI_inc: string,
// GeoSES: string,
// GeoSESed: string,
// GeoSESpv: string,
// GeoSESdp: string,
// GeoSESwl: string,
// GeoSESin: string,
// GeoSESsg: string,

const propsMapping: propsMappingSectionType[] = [
  {
    title: "Demographic Summary",
    content: [
      {
        id: "OBSERVED",
        label: "Número de mortes observadas por causas evitáveis de 5 a 74 anos (2013 a 2017)",
        format: (e: any) => e,
        type: 'none',
      },
      {
        id: "EXPECTED",
        label: "Número de mortes esperadas para a distribuição da população de acordo com sexo e grupos de idade",
        format: (e: any) => e,
        type: 'none',
      },
      {
        id: "RR_PREV",
        label: "Risco relativo de mortalidade por causas evitáveis de 5 a 74 anos por padronização indireta por sexo e idade",
        format: (e: any) => e,
        type: 'none',
      },
      {
        id: "HDI",
        label: "Índice de Desenvolvimento Humano calculado por município",
        format: (e: any) => e,
        type: 'none',
      },
      {
        id: "HDI_educ",
        label: "Índice de Desenvolvimento Humano, dimensão educacional",
        format: (e: any) => e,
        type: 'none',
      },
      {
        id: "HDI_long",
        label: "Índice de Desenvolvimento Humano, dimensão da longevidade",
        format: (e: any) => e,
        type: 'none',
      },
      {
        id: "GeoSESed",
        label: "Dimensão de educação (%)",
        format: (e: any) => `${Math.floor(parseInt(e))}%`,
        type: 'bar',
      },
    ],
  },
  {
    title: "Economic Summary",
    content: [
      {
        id: "HDI_inc",
        label: "Índice de Desenvolvimento Humano, dimensão de renda",
        format: (e: any) => e,
        type: 'none',
      },
      {
        id: "GeoSESpv",
        label: "Dimensão da pobreza (%)",
        format: (e: any) => `${Math.floor(parseInt(e))}%`,
        type: 'bar',
      },
      {
        id: "GeoSESdp",
        label: "Dimensão de privação (%)",
        format: (e: any) => `${Math.floor(parseInt(e))}%`,
        type: 'bar',
      },
      {
        id: "GeoSESwl",
        label: "Dimensão de riqueza (%)",
        format: (e: any) => `${Math.floor(parseInt(e))}%`,
        type: 'bar',
      },
      {
        id: "GeoSESsg",
        label: "Dimensão de segregação por raça e renda (Índice de Concentração nos Extremos, variando de -1 a +1)",
        format: (e: any) => e,
        type: 'none',
      },
      {
        id: "GeoSESin",
        label: "Dimensão da renda (em reais; 1 dólar americano = 1,76 reais em 2010)",
        format: (e: any) => e,
        type: 'none',
      },
    ],
  },
  {
    title: "Growth Summary",
    content: [],
  },
  {
    title: "Residential Housing Summary",
    content: [],
  },
  {
    title: "Financial Transactions",
    content: [],
  },
  {
    title: "Business Counts",
    content: [],
  },
  {
    title: "Turnover vs. Cost of Sales",
    content: [],
  },
  {
    title: "Business Rental Costs",
    content: [],
  },
];

export default propsMapping;
