/* eslint-disable max-lines-per-function */
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import coinApi from "../../services/coinApi";
import { addExpense as addExpenseAction } from "../../actions";
import MethodAndTag from "./MethodAndTag";
import Content from "./styles";

class NewExpense extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 0.01,
      description: "",
      currency: "USD",
      method: "Dinheiro",
      tag: "Alimentação",
      currencies: [],
    };

    this.handleChage = this.handleChage.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    coinApi().then((data) => {
      this.setState({
        currencies: Object.values(data),
      });
    });
  }

  handleChage(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  reset() {
    this.setState({
      value: 0.01,
      description: "",
      currency: "USD",
      method: "Dinheiro",
      tag: "Alimentação",
    });
  }

  submitAll(action) {
    const { value, description, currency, method, tag } = this.state;
    if (description === "") alert("Descrição vazia!");
    else if ( value <= 0 ) alert("Valor zerado ou não permitido!");
    else {
      const newExpense = {
        value,
        description,
        currency,
        method,
        tag,
      };
      action(newExpense);
      this.reset();
    }
  }

  render() {
    const { addExpense } = this.props;
    const { currencies, value, description, currency, method, tag } =
      this.state;
    const currencyWithouUSDT = currencies.filter(
      (act_currency) => act_currency.codein !== "BRLT"
    );

    return (
      <Content>
        <label>
          <span>Valor:</span>
          <input
            id="input-value"
            type="number"
            min="0.01"
            step="0.01"
            name="value"
            value={value}
            onChange={this.handleChage}
          />
        </label>
        <label>
          <span>Descrição:</span>
          <input
            type="text"
            name="description"
            value={description}
            onChange={this.handleChage}
          />
        </label>
        <label>
          <span>Moeda:</span>
          <select name="currency" value={currency} onChange={this.handleChage}>
            {currencyWithouUSDT.map(({ code }) => (
              <option key={code}>{code}</option>
            ))}
          </select>
        </label>
        <MethodAndTag
          method={method}
          tag={tag}
          handleChage={this.handleChage}
        />
        <div className="center">
          <button
            id="add-expense"
            type="button"
            onClick={() => this.submitAll(addExpense)}
          >
            Adicionar despesa
          </button>
        </div>
      </Content>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpenseAction(expense)),
});

NewExpense.propTypes = {
  addExpense: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(NewExpense);
