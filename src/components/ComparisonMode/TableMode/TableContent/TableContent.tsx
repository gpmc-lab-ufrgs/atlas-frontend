import React, { useEffect, useState } from 'react';
import { Tooltip } from '@mui/material';
import Collapsible from '@components/Collapsible';
import MetricDetails from '@components/MetricDetails';
import { MapPropsContentType, MapPropsSectionType } from '@customTypes/map';
import { District } from '@customTypes/district';
import * as Styles from './styles';

interface Props {
  comparison: Array<District>;
}

interface DictionaryData {
  title: string;
  content: Array<MapPropsContentType>;
  title_english: string; // Added property for English title
}

const TableContent: React.FC<Props> = ({ comparison }) => {
  const [dictionaryData, setDictionaryData] = useState<Array<DictionaryData>>([]);

  useEffect(() => {
    const cachedData = localStorage.getItem('dictionaryData');

    if (cachedData) {
      setDictionaryData(JSON.parse(cachedData));
    } else {
      async function fetchData() {
        const response = await fetch('http://3.92.188.34:8001/dictionary/dictionary/json/');
        const data = await response.json();
        setDictionaryData(data);
        localStorage.setItem('dictionaryData', JSON.stringify(data));
      }
      fetchData();
    }
  }, []);

  const isEnglish = window.location.href.includes('/comparison_en');

  // Define the order of sections
  const sectionOrder = isEnglish
              ? [
                  'Demographic',
                  'Economy',
                  'Entrepreneurship',
                  'Education',
                  'Health',
                  'Safety',
                  'Urbanism',
                  'Technology and inovation',
                  'Environment',
                  'Mobility'
                ]
              : [
                  'Demográfica',
                  'Economia',
                  'Empreendedorismo',
                  'Educação',
                  'Saúde',
                  'Segurança',
                  'Urbanismo',
                  'Tecnologia e Inovação',
                  'Meio Ambiente',
                  'Mobilidade'
                ];

  // Sort the sections based on the predefined order
  const sortedSections = dictionaryData.sort((a, b) => {
    return sectionOrder.indexOf(a.title) - sectionOrder.indexOf(b.title);
  });

  return (
    <>
      {sortedSections.map((section: DictionaryData) => (
        <Collapsible
          isTitle={true}
          title={isEnglish ? section.title_english : section.title}
          key={isEnglish ? section.title_english : section.title}
        >
          {section.content.map((content: MapPropsContentType, id) => (
            <>
              {!content.nestedData ? (
                <Styles.Table lineTableNumber={id} key={id}>
                  <Tooltip
                    title={
                      <div>
                        <div>{isEnglish ? content.description_en : content.description}</div>
                      </div>
                    }
                  >
                    <Styles.ColumnTitle>{isEnglish ? content.title_en : content.title}</Styles.ColumnTitle>
                  </Tooltip>
                  {comparison.map((region, idx) => (
                    <Styles.Column gridColumnNumber={idx + 2} key={idx}>
                      <MetricDetails district={region} metric={content} />
                    </Styles.Column>
                  ))}
                </Styles.Table>
              ) : (
                <Collapsible isTitle={false} title={content.title}>
                  {content.nestedData?.map((data, index) => (
                    <div key={index}>
                      <Styles.Table lineTableNumber={index} key={index}>
                        <Tooltip
                          title={
                            <div>
                              <div>{data.title}</div>
                              <div>{data.description}</div>
                            </div>
                          }
                        >
                          <Styles.ColumnTitle>{data.title}</Styles.ColumnTitle>
                        </Tooltip>
                        {comparison.map((region, idx) => (
                          <Styles.Column gridColumnNumber={idx + 2} key={idx}>
                            <MetricDetails district={region} metric={data} />
                          </Styles.Column>
                        ))}
                      </Styles.Table>
                    </div>
                  ))}
                </Collapsible>
              )}
            </>
          ))}
        </Collapsible>
      ))}
    </>
  );
};

export default TableContent;
