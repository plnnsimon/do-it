export default function ({app, route, redirect}) {
    if (route.path === '/profile') {
        console.log(app.$fire.auth.currentUser);
        if (!app.$fire.auth.currentUser) {
            return redirect('/login')
        }
    }
}