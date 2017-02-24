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
	admin: {
		title: 'Админ панель'
	}
}

var forms = {
	inputs: {
		email: 'Email',
		password: 'Пароль'
	},
	textarea: {
		leaveComment: 'Оставить комментарий'
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
		},
		copyright: '© GLS 2016. All rights reserved'
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
	},
	userLanding: {
		tabs: {
			info: 'Инфо',
			data: 'Данные',
		}
	}
}

module.exports = {
	pages,
	forms,
	buttons,
	components
}