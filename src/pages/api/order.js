import Order from '../../models/Order';
import dbConnect from '../../utils/dbConnect';

dbConnect();
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { token, billItems } = req.body;
      billItems.forEach(
        async (item) =>
          await Order.create({
            ...item,
            token,
          })
      );
      res.status(200).json(token);
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
}
