import { Request, Response } from 'express'

import Employee from '../models/EmployeeModel'

export class EmployeeController {
	public addNewEmployee(req: Request, res: Response) {
		let newEmployee = new Employee(req.body)

		newEmployee.save((err, Employee) => {
			if (err) {
				res.send(err)
			}
			res.json(Employee)
		})
	}

	public getAllEmployee(req: Request, res: Response) {
		Employee.find({}, (err, Employee) => {
			if (err) {
				res.send(err)
			}
			res.json(Employee)
		})
	}

	public getEmployeeWithID(req: Request, res: Response) {
		Employee.findById(req.params.employeeId, (err, Employee) => {
			if (err) {
				res.send(err)
			}
			res.json(Employee)
		})
	}

	public updateEmployee(req: Request, res: Response) {
		Employee.findOneAndUpdate(
			{ _id: req.params.employeeId },
			req.body,
			{ new: true },
			(err, Employee) => {
				if (err) {
					res.send(err)
				}
				res.json(Employee)
			}
		)
	}

	public deleteEmployee(req: Request, res: Response) {
		Employee.remove({ _id: req.params.employeeId }, err => {
			if (err) {
				res.send(err)
			}
			res.json({ message: 'Successfully deleted Employee!' })
		})
	}
}
