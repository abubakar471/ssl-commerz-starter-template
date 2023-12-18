import SSLCommerzPayment from 'sslcommerz';

const handler = async (req, res) => {

    const { store_id, store_passwd, total_amount,
        currency, tran_id, success_url, fail_url, cancel_url,
        cus_name, cus_email, cus_add1, cus_add2, cus_city, cus_state,
        cus_postcode, cus_country, cus_phone, cus_fax, ship_name, ship_add1, ship_add2,
        ship_city, ship_state, ship_postcode, ship_country,
        multi_card_name, value_a,
        value_b, value_c, value_d } = req.body;


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

    try {
       
    } catch (err) {
        console.log(err);
    }



}


export default handler