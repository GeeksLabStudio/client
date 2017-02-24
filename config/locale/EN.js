var pages = {
	home: {
		title: 'Home'
	},
	login: {
		title: 'Login'
	},
	register: {
		title: 'Register'
	},
	profile: {
		title: 'Profile'
	},
	admin: {
		title: 'Admin'
	}
}

var forms = {
	inputs: {
		email: 'Email',
		password: 'Password'
	},
	textarea: {
		leaveComment: 'Leave a comment'
	}
}

var buttons = {
	signIn: 'sign in',
	register: 'register',
	submit: 'submit'
}

var components = {
	footer: {
		form: {
			label: 'Subscribe to newsletters!',
			button: buttons.submit
		},
		copyright: '© GLS 2016. All rights reserved'
	},
	navigation: {
		home: {
			label: 'Home'
		},
		login: {
			label: 'Login'
		},
		register: {
			label: 'Register'
		},
		profile: {
			label: 'Profile'
		},
		admin: {
			label: 'Admin'
		},
		logout: {
			label: 'Log out'
		}
	},
	navbar: {
		welcome: 'welcome',
		langSwitcher: 'Locale'
	},
	userLanding: {
		tabs: {
			info: 'Info',
			data: 'Data',
		}
	}
}

module.exports = {
	pages,
	forms,
	buttons,
	components
}