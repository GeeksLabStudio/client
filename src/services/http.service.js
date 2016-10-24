import superagent from 'superagent';
import AppAction from '../actions/app.action';

class HttpService {
	state = {
		openRequests: 0
	}

	// get request instance
	_request(method, url, data, query, headers, token){
		return new superagent
			.Request(method, url)
			.send(data)
    	.query(query)
    	.set('Authorization', token)
    	.set(headers)
	}

	// Loading indicator
	_loader(option){
		// turn on the Loader
	 	if (option) {
	 		this.state.openRequests += 1;
			AppAction.toggleLoader(true);
	 	}
	 	// turn off
	 	else {
	 		this.state.openRequests -= 1;
	 		// if all requests are resolved - turn off the loader
	 		if (this.state.openRequests == 0)
				AppAction.toggleLoader(false);
		}
	}

	// main method to send requests
	send(
		path,
		method = 'GET',
		data = {},
		query = {},
		headers = {}
	){
		// get full URL
		let url = app.config.api.server + path;
		// get token
		let token = localStorage.getItem('_t') ? localStorage.getItem('_t') : null;
		// get request instance
		let request = this._request(method, url, data, query, headers, token);
		// turn on the loader
		this._loader(true);

	  return new Promise((resolve,reject) => {
	    request
		    .end((err,res) => {
		    	// turn off the loader
					this._loader(false);

		      if (err || !res.ok)
		        reject(res ? res.body.error : err)
		      else
		        resolve(res.body.data)
		    })
    })
	}
}

const $http = new HttpService();

export default $http;