import React from 'react';
import CurrencyDropdown from "../components/CurrencyDropdown";

const getCurrencyUrl = (base, target) => {
    return `https://api.ratesapi.io/api/latest?base=${base}&symbols=${target}`
}

const allCurrenciesUrl = `https://api.ratesapi.io/api/latest?base=USD`;

export class CalculatorContainer extends React.Component {
    state = {
        amount: '',
        baseCurrency: "PLN",
        targetCurrency: "USD",
        converted: ''
    }
    handleAmountChange = (event) => {
        this.setState({
            amount: Number(event.target.value)
        })
    }

    handleBaseCurrencyChange = (event) => {
        this.setState({
            baseCurrency: event.target.value
        })
    }

    handleTargetCurrencyChange = (event) => {
        this.setState({
            targetCurrency: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(getCurrencyUrl(this.state.baseCurrency, this.state.targetCurrency))
            .then((r => r.json()))
            .then(({rates}) => {
                const rate = rates[this.state.targetCurrency];
                this.setState({
                    converted: this.state.amount * rate
                })
            })
    }

    componentDidMount() {
        fetch(allCurrenciesUrl)
            .then((r => r.json()))
            .then(({rates}) => {
                this.setState({
                    allCurrencies: Object.keys(rates)
                })
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Wprowadziłeś: {this.state.amount} {this.state.baseCurrency} <br/>
                    <input type="number" placeholder={'amount'} value={this.state.amount}
                           onChange={this.handleAmountChange}/>
                    <CurrencyDropdown
                        name={'base'}
                        allCurrencies={this.state.allCurrencies}
                        onChange={this.handleBaseCurrencyChange}
                        value={this.state.baseCurrency}
                    />

                    <CurrencyDropdown
                        name={'target'}
                        onChange={this.handleTargetCurrencyChange}
                        allCurrencies={this.state.allCurrencies}
                        value={this.state.targetCurrency}
                    />

                    <button type='submit'>Submit</button>
                </form>
                Po konwersji:
                {this.state.converted}
            </div>
        )
    }

}

// useWindowSize -> { x: 0, y: 10 }, window.innerWidth, window.innerHeight

// function CalculatorContainer() {
//
//     // const result = useState([]);
//     // result[0] // data: []
//     // result[1] // fn, for modify result[0]
//     // changeData = result[1]
//     // changeData([1, 2, 3, 4])
//     const [users, setUsers] = useState([]);
//
//     useEffect(() => {
//         // componentDidMount
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())
//             .then(data => setUsers(data));
//
//         return () => {
//             // componentWillUnmount
//         }
//
//     }, []);
//
//     return <UsersList users={users}/>
// }
//
// // class CalculatorContainer extends Component {
//
// //   state = {
// //     users: [] // [{id, name, username}, {id, name, username}]
// //   }
//
// //   componentDidMount() {
// //     fetch('https://jsonplaceholder.typicode.com/users')
// //     .then(response => response.json())
// //     .then(data => this.setState({ users: data }));
// //   }
//
// //   // componentWillUnmount() {
//
// //   // }
//
// //   render() {
// //     const { users } = this.state;
// //     return <UsersList users={users} />
// //   }
// // }
//
// export default CalculatorContainer;
