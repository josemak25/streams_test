import {createContext, useContext} from 'react';
import {IStateTree} from '@typings/store';
import {settingsInitState} from './settings/reducers';
import {SettingsActionTypes} from './settings/models';

// We define our type for the context properties right here
export type DispatchTypes = SettingsActionTypes;

type IDispatcherType = (
  e: React.Dispatch<DispatchTypes>,
) => Promise<void> | void;

// We define our type for the context properties right here
interface ContextProps {
  store: IStateTree;
  dispatch: React.Dispatch<DispatchTypes>;
}

const StoreContext = createContext<ContextProps>({
  store: {settings: settingsInitState},
  dispatch: () => {},
});

function useSelector<TSelected = unknown>(
  selector: (state: IStateTree) => TSelected,
): TSelected {
  const {store} = useContext(StoreContext);
  return selector(store);
}

const useStore = (): ContextProps => useContext(StoreContext);

const useDispatch = (): ((
  dispatcher: IDispatcherType,
) => void | Promise<void>) => {
  const {dispatch} = useContext(StoreContext);
  return (dispatcher: IDispatcherType) => dispatcher(dispatch);
};

export {StoreContext, useStore, useDispatch, useSelector};
