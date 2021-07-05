import React, {useReducer, FunctionComponent} from 'react';
import {IStateTree} from '@typings/store';
import {useCombinedReducers} from '@hooks';
import {StoreContext, DispatchTypes} from './store';
import {usersReducer, usersInitState} from './users/reducers';
import {settingsReducer, settingsInitState} from './settings/reducers';

const StoreProvider: FunctionComponent<{}> = ({children}) => {
  const [store, dispatch] = useCombinedReducers<IStateTree, DispatchTypes>({
    settings: useReducer(settingsReducer, settingsInitState),
    users: useReducer(usersReducer, usersInitState),
  });

  return (
    <StoreContext.Provider value={{store, dispatch}}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
