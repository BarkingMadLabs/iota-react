import './App.css'
import {composeAPI} from "@iota/core"
import {useEffect, useState} from "react"

function App() {
    const [balance, setBalance] = useState(0)

    useEffect(() => {
        const address =
            'NBZLOBCWG9BAQTODDKNF9LYYTBOUWSQSGCWFQVZZR9QXCOAIBRYDTZOEGBGMZKJYZOPPGRGFFWTXUKUKW';
        const iota = composeAPI({
            provider: 'https://nodes.devnet.iota.org:443'
        });
        iota.getBalances([address])
            .then(({balances}) => {
                console.log(balances)
                setBalance(balances[0])
            })
            .catch(err => {
                console.error(err)
            });
    });

    return (
        <div>
            <h1>Iota Wallet</h1>
            <span>Your balance is ${balance}</span>
        </div>


    );
}

export default App;
