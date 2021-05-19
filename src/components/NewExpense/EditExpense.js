/* eslint-disable max-lines-per-function */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import coinApi from '../../services/coinApi';
import { addExpense as addExpenseAction, editedExpenseSave as expenseSaveAdd } from '../../actions';
import MethodAndTag from './MethodAndTag';

import Content from './styles';

class EditExpense extends React.Component {
  constructor(props) {
    super(props);

    const { expenses, expenseId } = this.props;
    const expense = expenses.find((item) => item.id === expenseId);
    const { value, description, currency, method, tag, id } = expense;
    console.log(`Valor: ${value}`);

    this.state = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      currencies: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    coinApi().then((data) => {
      this.setState({
        currencies: Object.values(data),
      });
    });
  }

  handleChange(event) {
     this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state);
  }

  submitEditedExpense(oldValue) {
    const { id, value, description, currency, method, tag } = this.state;
    const { editedExpenseSave } = this.props;
    const newExpense = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      oldValue,
    };
    editedExpenseSave(newExpense);
  }

  render() {
    const { currencies, value, description, currency, method, tag } = this.state;
    const oldValue = value;
    const currencyWithouUSDT = currencies.filter((act_currency) => act_currency.codein !== 'BRLT');

    return (
      <Content>
        <label>
          Valor:
          <input
            id="input-value"
            type="number"
            min="0.01"
            step="0.01"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label>
          Descrição:
          <input
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label>
          Moeda:
          <select
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            {
              currencyWithouUSDT.map(({ code }) => (
                <option
                  key={ code }
                >
                  {code}
                </option>))
            }
          </select>
        </label>
        <MethodAndTag method={ method } tag={ tag } handleChange={ this.handleChange } />
        <button
          id="add-expense"
          type="button"
          onClick={ () => this.submitEditedExpense(oldValue) }
        >
          Editar despesa
        </button>
      </Content>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  expenseId: state.wallet.expenseId,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpenseAction(expense)),
  editedExpenseSave: (expense) => dispatch(expenseSaveAdd(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
