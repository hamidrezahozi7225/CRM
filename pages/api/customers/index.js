import Customer from '@/models/customer';
import ConnectDB from '@/utils/connectDB';

export default async function handler(req, res) {
  try {
    await ConnectDB();

    if (req.method === 'POST') {
      try {
        const { data } = req.body;
        const customers = await Customer.create(data);
        res
          .status(201)
          .json({ status: 'success', message: 'created', data: customers });
      } catch (error) {
        console.log(error.message);
        return res.status(400).json({ message: 'Bad Requests' });
      }
    } else if (req.method === 'GET') {
      try {
        const customer = await Customer.find();
        res.status(200).json({ status: 'success', data: customer });
      } catch (error) {
        console.log(error.message);
        return res.status(400).json({ message: 'Bad Requests' });
      }
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Interval Services' });
  }
}
