import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import './styles.css';
import Content from './styles';
import formatPrice from '../../utils/format';
import { editExpense as editExpenseAction, deleteExpense as deleteExpenseAction } from '../../actions';
import editIcon from '../../assets/edit.png';
import deleteIcon from '../../assets/delete.png';

class Expenses extends React.Component {
  render() {
    const { expenses, editExpense, deleteExpense } = this.props;
    return (
      <Content>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {
              expenses.map(
                (expense) => {
                  const { id, description, tag, method, value, currency, exchangeRates } = expense;

                  return (
                    <tr key={ id }>
                      <td>{ description }</td>
                      <td>{ tag }</td>
                      <td>{ method }</td>
                      <td>{ value }</td>
                      <td>{ exchangeRates[currency].name }</td>
                      <td>{ parseFloat(exchangeRates[currency].ask).toFixed(2) }</td>
                      <td>{ formatPrice(value * exchangeRates[currency].ask) }</td>
                      <td>Real</td>
                      <td>
                        <button type="button" style={ { backgroundColor: '#f9ab1a' } } onClick={ () => editExpense(expense) }><img src={editIcon} /></button>
                        <button type="button" style={{backgroundColor: 'brown'}} onClick={ () => deleteExpense(expense) }><img src={deleteIcon} /></button>
                      </td>
                    </tr>
                  );
                },
              )
            }
          </tbody>
        </table>
      </Content>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  editExpense: (expense) => dispatch(editExpenseAction(expense)),
  deleteExpense: (expense) => dispatch(deleteExpenseAction(expense)),
});

Expenses.propTypes = {
  expenses: PropTypes.arrayOf(Array).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
