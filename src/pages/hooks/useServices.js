import { useEffect, useState } from 'react';

const UseServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://dry-thicket-30903.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [services, setServices]
};

export default UseServices;