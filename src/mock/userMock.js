import mock from "../utils/mock"

// mock.onPost('/api/home/login').reply(200, {
//     'id': 1,
//     'username': 'vinihbieel',
//     'email': 'vinihbieel49@gmail.com'
// })

mock.onPost('/api/home/login').reply((config) => {
    const { email, password } = JSON.parse(config.data);


    if (email !== 'vinihbieel49@gmail.com' || password !== 'admin') {
        return [400, { message: 'Seu e-mail ou senha estão incorretos'}]
    }

    const user = {
        id: 1,
        name: 'Vinicius Gabriel',
        username: 'vinihbieel',
        email: 'vinihbieel49@gmail.com'
    }
    return [200, { user }]
})