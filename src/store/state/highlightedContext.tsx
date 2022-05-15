import React, { createContext, useContext, useState } from 'react';

import { State } from '@customTypes/feature';

import { DEFAULT_VALUE } from '@hook/useFeature';

interface StateActions {
  highlighted: State | null;
  setHighlighted: React.Dispatch<React.SetStateAction<any>>;
}

const highlightedStatesContext = createContext<StateActions>(DEFAULT_VALUE);

export function HighlightedStatesProvider({ children }: any) {
  const [highlighted, setHighlighted] = useState(null);

  return (
    <highlightedStatesContext.Provider
      value={{
        setHighlighted,
        highlighted,
      }}
    >
      {children}
    </highlightedStatesContext.Provider>
  );
}

export function useHighlightedState() {
  const context = useContext(highlightedStatesContext);
  const state = context;
  return state;
}
