import { User } from "./models/User";

const user = new User({ name: 'username', age: 30});

user.on('change', () => {
    console.log('change 1')
});
user.on('click', () => {
    console.log('click triggered')
});

user.trigger('click');
