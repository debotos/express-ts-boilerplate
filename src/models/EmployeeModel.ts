import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

const EmployeeSchema = new Schema({
	firstName: {
		type: String,
		required: 'Enter a first name'
	},
	lastName: {
		type: String,
		required: 'Enter a last name'
	},
	email: {
		unique: true,
		type: String
	},
	company: {
		type: String
	},
	created_date: {
		type: Date,
		default: Date.now
	}
})

export default mongoose.model('Employee', EmployeeSchema)
