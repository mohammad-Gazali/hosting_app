import { TbCloudComputing } from 'react-icons/tb';
import { FaServer, FaWordpress } from 'react-icons/fa';

export const services = [
    {
        id: 1,
        icon: <TbCloudComputing />,
        title: "Cloud Hosting",
        content: "Cloud hosting is a scalable, flexible, and reliable hosting solution that uses a network of servers to host websites and applications. Cloud hosting is ideal for businesses that need to handle sudden traffic spikes or have data-intensive applications. It's also more reliable than traditional hosting, as it uses multiple servers to ensure uptime"
    },
    {
        id: 2,
        icon: <FaServer />,
        title: "VPS Server",
        content: "VPS hosting is a virtualized server that gives you dedicated resources and isolation from other accounts on the same physical server. VPS hosting is a good option for businesses that need more control and resources than shared hosting but don't want to invest in a dedicated server. It's also more scalable and flexible than shared hosting"
    },
    {
        id: 3,
        icon: <FaWordpress />,
        title: "Wordpress Hosting",
        content: "WordPress hosting is optimized for running the WordPress content management system (CMS). It provides all the resources and tools you need to run a fast and secure WordPress website. WordPress hosting is ideal for businesses and individuals who want to use WordPress to build their website. It's faster and more secure than generic hosting"
    }
]