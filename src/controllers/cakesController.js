import connection from '../models/index.js';
import { queryGetCakes, queryPostCake, queryGetCakeByName } from '../repository/cakesQuery.js';

export const getCakes = async (req, res) => {
  try {
    const cakes = await connection.query(queryGetCakes());

    if(cakes.rowCount <= 0) {
      return res.status(404).json({ status: 404, message: cakes.rows });
    }

    res.status(200).json({status: 200, cakes: cakes.rows});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postCake = async (req, res) => {
  try {
    const cake = req.body;
    
    const cakeName = await connection.query(queryGetCakeByName(cake.name));
    if(cakeName.rowCount > 0) {
      return res.status(409).json({ status: 409, message: "This cake already exists" });
    }

    connection.query(queryPostCake(cake));
    res.status(201).json({ status: 201, message: 'Cake created successfully' });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};