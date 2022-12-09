import { useContext } from 'react';
import IngredientContext from '../context/IngredientContext';
const useIngredient = () => useContext(IngredientContext);
export default useIngredient;