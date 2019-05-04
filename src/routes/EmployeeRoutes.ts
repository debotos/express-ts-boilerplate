import express = require('express')

import { EmployeeController } from '../controllers/EmployeeController'

const router = express.Router()
const Controller: EmployeeController = new EmployeeController()

export function EmployeeRoutes(): any {
	return router
		.get('/', Controller.getAllEmployee)
		.post('/', Controller.addNewEmployee)
		.get('/:employeeId', Controller.getEmployeeWithID)
		.put('/:employeeId', Controller.updateEmployee)
		.delete('/:employeeId', Controller.deleteEmployee)
}
