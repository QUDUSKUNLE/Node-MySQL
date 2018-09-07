/** 
 * knex module to connect to mysql
 */
import { saltHashPassword } from '../salts/salt';

const knex = require('knex')(require('../knexfile'))

/**
 * @export
 * @class Store
 */
export default class Store {

  /**
   * 
   * @static createUser
   * @param {any} req 
   * @param {any} res 
   * 
   * @memberOf Store
   */
  static createUser(req, res) {
    const { username, password } = req.body;
    const { salt, hash } = saltHashPassword({ password });
    knex('users').insert({ salt, encrypted_password: hash, username})
      .then((e) => {
        if (e) {
          return res.status(201).json({
            message: 'Signup successful',
            status: true
          })
        }
      }).catch((err) => {
        return res.status(400).json({
          error: 'Incoreect message'
        })
      })
  }

  /**
   * 
   * @static authenticate user
   * @param {any} req 
   * @param {any} res 
   * @returns 
   * 
   * @memberOf Store
   */
  static authenticate(req, res) {
    const { username, password } = req.body;
    return knex('users').where({ username })
      .then(([user]) => {
        if (!user) return res.status(401).json({ success: false });
        const { hash } = saltHashPassword({ password, salt: user.salt });
        return res.status(200).json({
          success: hash === user.encrypted_password
        });
      })
      .catch((e) => {
        return res.status(404).json({ err: e });
      }) 
  }
}
