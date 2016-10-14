var pages = {
	home: {
		title: 'Главная'
	},
	login: {
		title: 'Вход'
	},
	register: {
		title: 'Регистрация'
	},
	profile: {
		title: 'Профиль'
	},
	blog: {
		title: 'Блог'
	},
	admin: {
		title: 'Админ панель'
	},
}

var forms = {
	inputs: {
		email: 'Email',
		password: 'Пароль'
	}
}

var buttons = {
	signIn: 'войти',
	register: 'зарегистрироваться',
	submit: 'отправить'
}

var components = {
	footer: {
		form: {
			label: 'Подписаться на рассылку!',
			button: buttons.submit
		}
	},
	navigation: {
		home: {
			label: 'Домой'
		},
		login: {
			label: 'Вход'
		},
		register: {
			label: 'Регистрация'
		},
		profile: {
			label: 'Профиль'
		},
		blog: {
			label: 'Блог'
		},
		admin: {
			label: 'Админ панель'
		},
		logout: {
			label: 'Выйти'
		}
	},
	navbar: {
		welcome: 'приветствуем',
		langSwitcher: 'Язык'
	}
}

module.exports = {
	pages,
	forms,
	buttons,
	components
}