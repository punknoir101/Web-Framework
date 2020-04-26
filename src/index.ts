import { User } from "./models/User";

const user = User.buildUser({id: 1, name: 'newer name', age: 12});

user.on('change', () => {
    console.log('user')
});

user.fetch();
