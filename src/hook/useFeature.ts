import { useState } from 'react';

import { Feature } from '@customTypes/feature';

export const DEFAULT_VALUE = {
  all: [],
  selected: null,
  setSelected: () => {},
  highlighted: null,
  setHighlighted: () => {},
  resetValues: () => {},
};

interface Props {
  allFeatures: Array<Feature>;
}

const useFeature = ({ allFeatures }: Props) => {
  const [all] = useState(allFeatures);
  const [selected, setSelected] = useState(null);
  const [highlighted, setHighlighted] = useState(null);

  function resetValues() {
    setSelected(null);
    setHighlighted(null);
  }

  return {
    all,
    selected,
    setSelected,
    highlighted,
    setHighlighted,
    resetValues,
  };
};

export default useFeature;
