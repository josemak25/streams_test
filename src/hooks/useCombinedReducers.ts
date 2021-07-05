const useCombinedReducers = <T, P>(
  combinedReducers: Record<string, any>,
): [T, React.Dispatch<P>] => {
  // Global Store
  const store = Object.keys(combinedReducers).reduce(
    (acc, key): any => ({...acc, [key]: combinedReducers[key][0]}),
    {},
  ) as T;

  // Global Dispatch Function
  const dispatch: React.Dispatch<P> = action =>
    Object.keys(combinedReducers)
      .map(key => combinedReducers[key][1])
      .forEach(fn => fn(action));

  return [store, dispatch];
};

export default useCombinedReducers;
