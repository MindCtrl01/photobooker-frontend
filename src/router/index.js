const HomePage = React.lazy(() => import('./../pages/index'));
const routes = [
    {
        path: "/",
        component: HomePage
    },
];
export default routes