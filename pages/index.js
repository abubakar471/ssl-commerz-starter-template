import axios from "axios"
import { useRouter } from "next/router";
import React, { useState } from "react"

const Home = () => {
  const [result, setResult] = useState('');
  const router = useRouter();

  const sendData = async (e) => {
    e.preventDefault();
    let settings = {
      isSandboxMode: true, //false if live version
      store_id: process.env.SSLCOMMERZ_STORE_ID,
      store_passwd: process.env.SSLCOMMERZ_STORE_PASSWORD
    }
    // const { data } = await axios.post('http://localhost:3000/api/transaction', {
    //   store_id: process.env.SSLCOMMERZ_STORE_ID,
    //   store_passwd: process.env.SSLCOMMERZ_STORE_PASSWORD,
    //   total_amount: 1200,
    //   currency: 'BDT',
    //   tran_id: 'REF123',
    //   success_url: 'http://localhost:3000/success',
    //   fail_url: 'http://localhost:3000/fail',
    //   cancel_url: 'http://localhost:3000/cancel',
    //   cus_name: 'muhib',
    //   cus_email: 'muhib@gmail.com',
    //   cus_add1: 'Dhaka',
    //   cus_add2: 'Dhaka',
    //   cus_city: 'Dhaka',
    //   cus_state: 'Dhaka',
    //   cus_postcode: 1000,
    //   cus_country: 'Bangladesh',
    //   cus_phone: '01862033733',
    //   cus_fax: '01711111111',
    //   ship_name: 'muhib',
    //   ship_add1: 'Dhaka',
    //   ship_add2: 'Dhaka',
    //   ship_city: 'Dhaka',
    //   ship_state: 'Dhaka',
    //   ship_postcode: 1000,
    //   ship_country: 'Bangladesh',
    //   multi_card_name: 'mastercard, visacard, amexcard',
    //   value_a: 'ref001_A',
    //   value_b: 'ref002_B',
    //   value_c: 'ref003_C',
    //   value_d: 'ref004_D'
    // });
    const { data } = await axios.get('http://localhost:8000/transaction');
    router.push(data);
  }
  return (
    <div>
      {result && <code>{result}</code>}
      <form onSubmit={sendData}>
        <button className="btn-prime" type="submit">send</button>
      </form>
    </div>
  )
}

export default Home