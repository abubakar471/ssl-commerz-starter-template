const express = require('express');
const app = express();
const cors = require('cors');
const SSLCommerzPayment = require('sslcommerz-lts');
require('dotenv').config();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('hello')
})

app.get('/transaction', async (req, res) => {
    const data = {
        total_amount: 100,
        currency: 'BDT',
        tran_id: 'REF123',
        success_url: `${process.env.ROOT}/success`,
        fail_url: `${process.env.ROOT}/fail`,
        cancel_url: `${process.env.ROOT}/cancel`,
        shipping_method: 'No',
        product_name: 'Computer.',
        product_category: 'Electronic',
        product_profile: 'general',
        cus_name: 'Customer Name',
        cus_email: 'cust@yahoo.com',
        cus_add1: 'Dhaka',
        cus_add2: 'Dhaka',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: '1000',
        cus_country: 'Bangladesh',
        cus_phone: '01711111111',
        cus_fax: '01711111111',
        multi_card_name: 'mastercard',
        value_a: 'ref001_A',
        value_b: 'ref002_B',
        value_c: 'ref003_C',
        value_d: 'ref004_D',
        ipn_url: `${process.env.ROOT}/ssl-payment-notification`,
    };

    const sslcommer = new SSLCommerzPayment(process.env.SSLCOMMERZ_STORE_ID, process.env.SSLCOMMERZ_STORE_PASSWORD, false);

    sslcommer.init(data).then(data => {

        //process the response that got from sslcommerz 
        //https://developer.sslcommerz.com/doc/v4/#returned-parameters

        if (data?.GatewayPageURL) {
            return res.status(200).send(data?.GatewayPageURL);
        }
        else {
            return res.status(400).json({
                message: "Session was not successful"
            });
        }
    });
})

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})