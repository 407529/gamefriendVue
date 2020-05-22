import Home from "../components/Home";

export default
[
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/profile',
        name: 'PrivateProfile',
        component: () => import("../components/profile/PrivateProfile")
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../components/authentication/Login')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../components/authentication/Register')
    },
    {
        path: '/friends',
        name: 'Friends',
        component:() => import('../components/friend_list/Friends')
    },
    {
        path: '/game-friend',
        name: 'GameFriend',
        component: () => import('../components/suggested_friends/SuggestedFriends')
    },
    {
        path: '/games',
        name: 'Games',
        component: () => import('../components/game/Games')
    },
    {
        path: '/profiles/:id',
        name: 'profile',
        component: () => import('../components/profile/Profile')
    },
    {
        path: '*',
        name: 'NotFound',
        component:() => import('../components/errors/not_found_route')
    }
];

