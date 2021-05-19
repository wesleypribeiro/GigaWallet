// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editing: false,
  expenseId: null,
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, action.expense],
    };

  case 'EDIT_EXPENSE':
    return {
      ...state,
      editing: true,
      expenseId: action.expense.id,
    };

  case 'EDITED_EXPENSE':
    return {
      ...state,
      expenses: state.expenses.map((item) => {
        if (item.id === action.expense.id) return { ...item, ...action.expense };
        return item;
      }),
      editing: false,
      expenseId: null,
    };
  case 'DELETE_EXPENSE':
    return {
      ...state,
      expenses: state.expenses.filter((item) => item.id !== action.expense.id),
    };
  default:
    return state;
  }
}

export default walletReducer;
