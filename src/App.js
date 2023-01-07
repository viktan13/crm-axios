import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import OrdersList from "./Orders/OrdersList";
import ClientsList from "./Clients/ClientsList";
import ServicesList from "./Services/ServicesList";
import ResultsList from "./Results/ResultsList";
import {useEffect, useState} from "react";
import axios from "axios";

// const initialClients = [
//     {
//         id: uuidv4(),
//         name: 'Bill Brown',
//         address: 'Chicago',
//         phoneNumber: '773-255-6843',
//         createAt: '12/28/2022',
//     },
//     {
//         id: uuidv4(),
//         name: 'Bobby Morris',
//         address: 'Los Angeles',
//         phoneNumber: '981-358-6585',
//         createAt: '12/29/2022',
//     },
//     {
//         id: uuidv4(),
//         name: 'Kim Hallock',
//         address: 'Omaha',
//         phoneNumber: '402-658-5588',
//         createAt: '12/30/2022',
//     },
//
// ]

// const initialJobs = [
//     {
//         id: uuidv4(),
//         job: 'Translation',
//         price: 100,
//         employee: 'Greg',
//         primeCost: 20,
//     },
//     {
//         id: uuidv4(),
//         job: 'Consultation',
//         price: 200,
//         employee: 'Bob',
//         primeCost: 50,
//     },
//     {
//         id: uuidv4(),
//         job: 'Printout of documents',
//         price: 50,
//         employee: 'Rachel',
//         primeCost: 5,
//     },
// ]

// const initialOrders = [
//     {
//         id: uuidv4(),
//         ...initialClients[0],
//         ...initialJobs[0],
//         payments: 40,
//         debt: 0,
//         statuses: [
//             {
//                 title: 'In progress: ',
//                 done: true,
//                 date: '01/02/2023',
//             },
//             {
//                 title: 'Job completed: ',
//                 done: false,
//                 date: '',
//             },
//             {
//                 title: 'Say to client: ',
//                 done: false,
//                 date: '',
//             },
//             {
//                 title: 'Client received: ',
//                 done: false,
//                 date: '',
//             },
//             {
//                 title: 'Paid: ',
//                 done: false,
//                 date: '',
//             },
//         ]
//     },
//     {
//         id: uuidv4(),
//         ...initialClients[1],
//         ...initialJobs[1],
//         payments: 0,
//         debt: 0,
//         statuses: [
//             {
//                 title: 'In progress: ',
//                 done: false,
//                 date: '',
//             },
//             {
//                 title: 'Job completed: ',
//                 done: false,
//                 date: '',
//             },
//             {
//                 title: 'Say to client: ',
//                 done: false,
//                 date: '',
//             },
//             {
//                 title: 'Client received: ',
//                 done: false,
//                 date: '',
//             },
//             {
//                 title: 'Paid: ',
//                 done: false,
//                 date: '',
//             },
//         ]
//     },
//     {
//         id: uuidv4(),
//         ...initialClients[2],
//         ...initialJobs[2],
//         payments: 0,
//         debt: 0,
//         statuses: [
//             {
//                 title: 'In progress: ',
//                 done: false,
//                 date: '',
//             },
//             {
//                 title: 'Job completed: ',
//                 done: false,
//                 date: '',
//             },
//             {
//                 title: 'Say to client: ',
//                 done: false,
//                 date: '',
//             },
//             {
//                 title: 'Client received: ',
//                 done: false,
//                 date: '',
//             },
//             {
//                 title: 'Paid: ',
//                 done: false,
//                 date: '',
//             },
//         ]
//     }
// ]

function App() {

    const [clients, setClients] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [orders, setOrders] = useState([])

    const getJobs = () => {
        axios.get('https://expressjs-server.up.railway.app/services')
            .then(res => {
                setJobs(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const getClients = () => {
        axios.get(`https://expressjs-server.up.railway.app/clients`)
            .then(res => {
                setClients(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const getOrders = () => {
        axios.get(`https://expressjs-server.up.railway.app/orders`)
            .then(res => {
                setOrders(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getJobs();
        getClients();
        getOrders();
    }, [])

    const addClient = (newClient) => {
        axios.post(`https://expressjs-server.up.railway.app/clients`, newClient)
            .then(() => {
                getClients();
            })
            .catch(err => {
                console.log(err);
            })
    }

    const addJob = (newJob) => {
        axios.post('https://expressjs-server.up.railway.app/services', newJob)
            .then(res => {
                getJobs();
            })
            .catch(err => {
                console.log(err);
            })
    }

    const addOrder = (newOrder) => {
        axios.post('https://expressjs-server.up.railway.app/orders', newOrder)
            .then((res) => {
                getOrders();
            })
            .catch(err => {
                console.log(err);
            })
    }

    const deleteClient = (id) => {
        axios.delete(`https://expressjs-server.up.railway.app/clients/${id}`)
            .then(() => {
                getClients();
            })
            .catch(err => {
                console.log(err);
            })
    }

    const deleteJob = (id) => {
        axios.delete(`https://expressjs-server.up.railway.app/services/${id}`)
            .then(() => {
                getJobs();
            })
            .catch(err => {
                console.log(err);
            })
    }

    const deleteOrder = (id) => {
        axios.delete(`https://expressjs-server.up.railway.app/orders/${id}`)
            .then(() => {
                getOrders();
            })
            .catch(err => {
                console.log(err);
            })
    }

    const updateClient = (id, updClient) => {
        axios.patch(`https://expressjs-server.up.railway.app/clients/${id}`, updClient)
            .then(() => {
                getClients();
            })
            .catch(err => {
                console.log(err);
            })
    }

    const updateJob = (id, updJob) => {
        axios.patch(`https://expressjs-server.up.railway.app/services/${id}`, updJob)
            .then(() => {
                getJobs();
            })
            .catch(err => {
                console.log(err);
            })
    }

    const updateOrder = (id, updOrder) => {
        axios.patch(`https://expressjs-server.up.railway.app/orders/${id}`, updOrder)
            .then(() => {
                getOrders();
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="orders" element={<OrdersList
                        orders={orders}
                        clients={clients}
                        jobs={jobs}
                        addOrder={addOrder}
                        deleteOrder={deleteOrder}
                        updateOrder={updateOrder}
                    />}/>
                    <Route path="clients" element={<ClientsList
                        clients={clients}
                        addClient={addClient}
                        deleteClient={deleteClient}
                        updateClient={updateClient}
                    />}/>
                    <Route path="services" element={<ServicesList
                        jobs={jobs}
                        addJob={addJob}
                        deleteJob={deleteJob}
                        updateJob={updateJob}
                    />}/>
                    <Route path="results" element={<ResultsList
                        orders={orders}
                    />}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
