// Coloque aqui suas actions
import coinApi from '../services/coinApi';

let id = 0;

export const login = (email) => ({ type: 'LOGIN', email });
export const newExpense = (expense) => ({ type: 'ADD_EXPENSE', expense });
export const editExpense = (expense) => ({ type: 'EDIT_EXPENSE', expense });
export const editedExpenseSave = (expense) => ({ type: 'EDITED_EXPENSE', expense });
export const deleteExpense = (expense) => ({ type: 'DELETE_EXPENSE', expense });

export const addExpense = (expense) => async (dispatch) => {
  const exchangeRates = await coinApi();
  delete exchangeRates.USDT;
  expense = { id, ...expense, exchangeRates };
  id += 1;
  dispatch(newExpense(expense));
};
