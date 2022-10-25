import connection from '../models/index.js';
import { queryGetClients, queryPostClient, queryGetClientOrders } from '../repository/clientsQuery.js';

export const getClients = async (req, res) => {
  try {
    const clients = await connection.query(queryGetClients());
    res.status(200).json({status: 200, clients: clients.rows});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postClient = async (req, res) => {
  try {
    const client = req.body;
    await connection.query(queryPostClient(client));
    res.status(201).json({ status: 201, message: 'Client created successfully' });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getClientOrders = async (req, res) => {
  try {
    const { id } = req.params;
    const clientOrders = await connection.query(queryGetClientOrders(id));

    if(clientOrders.rowCount <= 0) {
      return res.status(404).json({ status: 404, message: 'Client not found' });
    }

    res.status(200).json({status: 200, "Client Orders": clientOrders.rows});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};