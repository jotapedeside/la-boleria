import connection from '../models/index.js';
import { queryGetOrders, queryGetOrdersByDate, queryPostOrder, getClientById, getCakeById, queryGetOrdersById } from '../repository/ordersQuery.js';

export const getOrders = async (req, res) => {
  const { date } = req.query;
  try {
    if (!date) {
      const orders = await connection.query(queryGetOrders());
      res.status(200).json({status: 200, orders: orders.rows});
    } else if (date) {
      const orders = await connection.query(queryGetOrdersByDate(date));
      res.status(200).json({status: 200, orders: orders.rows});
    }

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postOrder = async (req, res) => {
  try {
    const order = req.body;

    const client = await connection.query(getClientById(order.clientId));
    if(client.rowCount <= 0) {
      return res.status(404).json({ status: 404, message: 'Client not found' });
    };

    const cake = await connection.query(getCakeById(order.cakeId));
    if(cake.rowCount <= 0) {
      return res.status(404).json({ status: 404, message: 'Cake not found' });
    };

    await connection.query(queryPostOrder(order));
    res.status(201).json({ status: 201, message: 'Order created successfully' });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getOrdersById = async (req, res) => {
  try {
    const { id } = req.params;
    const orders = await connection.query(queryGetOrdersById(id));

    if(orders.rowCount <= 0) {
      return res.status(404).json({ status: 404, message: 'Order not found' });
    }

    res.status(200).json({status: 200, orders: orders.rows});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};