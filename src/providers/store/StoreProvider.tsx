import React, {useReducer, FunctionComponent} from 'react';
import {IStateTree} from '@typings/store';
import {useCombinedReducers} from '@hooks';
import {StoreContext, DispatchTypes} from './store';
import {settingsReducer, settingsInitState} from './settings/reducers';

const StoreProvider: FunctionComponent<{}> = ({children}) => {
  const [store, dispatch] = useCombinedReducers<IStateTree, DispatchTypes>({
    settings: useReducer(settingsReducer, settingsInitState),
  });

  return (
    <StoreContext.Provider value={{store, dispatch}}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
