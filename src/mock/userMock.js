import mock from "../utils/mock"

mock.onPost('/api/home/login').reply((config) => {
    const { email, password } = JSON.parse(config.data);


    if (email !== 'teste@gmail.com' || password !== 'teste') {
        return [400, { message: 'Seu e-mail ou senha estão incorretos'}]
    }

    const user = {
        id: 1,
        name: 'Vinicius Gabriel',
        username: 'vinihbieel',
        email: 'teste@gmail.com'
    }
    return [200, { user }]
})