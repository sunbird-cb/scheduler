/**
 * name : validators/v1/mentees.js
 * author : Aman Gupta
 * Date : 19-Nov-2021
 * Description : Validations of mentees controller
 */

module.exports = {
	sessions: (req) => {
		req.checkQuery('enrolled')
			.notEmpty()
			.withMessage('enrolled query is empty')
			.isBoolean()
			.withMessage('enrolled is invalid')
			.toBoolean()
	},
	homeFeed: (req) => {},

	reports: (req) => {
		req.checkQuery('filterType')
			.notEmpty()
			.withMessage('filterType query is empty')
			.isIn(['MONTHLY', 'WEEKLY', 'QUARTERLY'])
			.withMessage('filterType is invalid')
	},
	create: (req) => {
		req.checkBody('designation').optional().notEmpty().withMessage('Designation is required')

		req.checkBody('area_of_expertise').optional().isArray().withMessage('Area of expertise must be an array')

		req.checkBody('education_qualification')
			.optional()
			.isArray()
			.withMessage('Education qualification must be an array')

		req.checkBody('rating.average')
			.optional()
			.isFloat({ min: 0, max: 5 })
			.withMessage('Average rating must be between 0 and 5')

		req.checkBody('rating.count')
			.optional()
			.isInt({ min: 0 })
			.withMessage('Rating count must be a non-negative integer')

		req.checkBody('user_type').optional().notEmpty().withMessage('User type is required')

		req.checkBody('meta.age').optional().isInt({ min: 0 }).withMessage('Age must be a non-negative integer')

		req.checkBody('meta.experience').optional().notEmpty().withMessage('Experience is required')

		req.checkBody('stats.sessions_attended')
			.optional()
			.isInt({ min: 0 })
			.withMessage('Sessions attended must be a non-negative integer')

		req.checkBody('stats.students_mentored')
			.optional()
			.isInt({ min: 0 })
			.withMessage('Students mentored must be a non-negative integer')

		req.checkBody('tags').optional().isArray().withMessage('Tags must be an array')

		req.checkBody('configs.notification')
			.optional()
			.isBoolean()
			.withMessage('Notification config must be a boolean')

		req.checkBody('configs.visibility').optional().notEmpty().withMessage('Visibility config is required')

		req.checkBody('visibility').optional().notEmpty().withMessage('Visibility is required')

		req.checkBody('organisation_ids').optional().isArray().withMessage('Organisation IDs must be an array')

		req.checkBody('external_session_visibility')
			.optional()
			.notEmpty()
			.withMessage('External session visibility is required')

		req.checkBody('external_mentor_visibility')
			.optional()
			.notEmpty()
			.withMessage('External mentor visibility is required')
	},

	update: (req) => {
		req.checkBody('designation').optional().notEmpty().withMessage('Designation is required')

		req.checkBody('area_of_expertise').optional().isArray().withMessage('Area of expertise must be an array')

		req.checkBody('education_qualification')
			.optional()
			.isArray()
			.withMessage('Education qualification must be an array')

		req.checkBody('rating.average')
			.optional()
			.isFloat({ min: 0, max: 5 })
			.withMessage('Average rating must be between 0 and 5')

		req.checkBody('rating.count')
			.optional()
			.isInt({ min: 0 })
			.withMessage('Rating count must be a non-negative integer')

		req.checkBody('user_type').optional().notEmpty().withMessage('User type is required')

		req.checkBody('meta.age').optional().isInt({ min: 0 }).withMessage('Age must be a non-negative integer')

		req.checkBody('meta.experience').optional().notEmpty().withMessage('Experience is required')

		req.checkBody('stats.sessions_attended')
			.optional()
			.isInt({ min: 0 })
			.withMessage('Sessions attended must be a non-negative integer')

		req.checkBody('stats.students_mentored')
			.optional()
			.isInt({ min: 0 })
			.withMessage('Students mentored must be a non-negative integer')

		req.checkBody('tags').optional().isArray().withMessage('Tags must be an array')

		req.checkBody('configs.notification')
			.optional()
			.isBoolean()
			.withMessage('Notification config must be a boolean')

		req.checkBody('configs.visibility').optional().notEmpty().withMessage('Visibility config is required')

		req.checkBody('visibility').optional().notEmpty().withMessage('Visibility is required')

		req.checkBody('organisation_ids').optional().isArray().withMessage('Organisation IDs must be an array')

		req.checkBody('external_session_visibility')
			.optional()
			.notEmpty()
			.withMessage('External session visibility is required')

		req.checkBody('external_mentor_visibility')
			.optional()
			.notEmpty()
			.withMessage('External mentor visibility is required')
	},
	getMenteeExtension: (req) => {
		req.checkQuery('id')
			.notEmpty()
			.withMessage('ID query parameter is empty')
			.isInt()
			.withMessage('ID must be an integer')
	},
}
