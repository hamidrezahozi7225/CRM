import Customer from '@/models/customer';
import ConnectDB from '@/utils/connectDB';

export default async function handler(req, res) {
  try {
    await ConnectDB();

    if (req.method === 'GET') {
      try {
        const id = req.query.customerId;
        const customer = await Customer.findOne({ _id: id });
        res.status(200).json({ status: 'success', data: customer });
      } catch (error) {
        console.log(error.message);
        return res.status(400).json({ message: 'Bad Requests' });
      }
    } else if (req.method === 'PATCH') {
      try {
        const id = req.query.customerId;
        const { data } = req.body;
        const customer = await Customer.findOne({ _id: id });
        customer.firstName = data.firstName;
        customer.lastName = data.lastName;
        customer.email = data.email;
        customer.phone = data.phone;
        customer.postal = data.postal;
        customer.address = data.address;
        customer.products = data.products;
        customer.updatedAt = Date.now();

        customer.save();

        res.status(200).json({ status: 'success', data: customer });
      } catch (error) {
        console.log(error.message);
        return res.status(400).json({ message: 'Bad Requests' });
      }
    } else if (req.method === 'DELETE') {
      try {
        const id = req.query.customerId;
        await Customer.findByIdAndDelete({ _id: id });

        res.status(200).json({ status: 'success' });
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
