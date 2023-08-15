import machineConfigurator from "@/components/MachineConfigurator";
import machineList from "@/components/MachineList";

import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path : '/',
        component : machineConfigurator
    },
    {
        path : '/list',
        component : machineList
    },
]

const router = createRouter({
    routes,
    history : createWebHistory()
})

export default router;

