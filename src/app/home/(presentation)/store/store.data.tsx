import { atom, useAtom } from 'jotai';


const value: any = {};
const store = atom(value);

const useStore = () => useAtom(store);

export default useStore;
