import ven from '../assets/images/supply1.png'
import leg from '../assets/images/legislative.png'
import almeria from '../assets/images/almeria.png'
import bac from '../assets/images/bac.png'
import mal from '../assets/images/malnutrition.png'
import rja from '../assets/images/rja.png'
import supply from '../assets/images/supply.png'


export const projects = [
    {
        company: 'Supply Office Management System',
        pointer: true,
        project: true,
        description: 'This system is designed for Biliran Province State University, aimed at managing the stock-in and stock-out of supplies. Its main features include handling supply requests and generating documents.',
        year: 'October, 2024 - December, 2024',
        role: '',
        link: 'https://docs.google.com/presentation/d/1Y8tmgIHI73sxk2CQ8DnCOUt5iQtMpiR9WwlZpomJrak/edit?usp=sharing',
        tech: [
           'laravel', 'react.js', 'tailwind', 'laravel web socket', 'Mysql'
        ],
        image: supply
    },
    {
        company: 'Legislative Office File Management System',
        pointer: true,
        project: true,
        description: 'This is an archiving system designed to manage and track documents efficiently.',
        year: 'August, 2024 - December, 2024',
        role: '',
        link: 'https://docs.google.com/presentation/d/1PGco5a2c5VSSdGh5xJrUbVBrc1qghoQDFAyibAMawAo/edit?usp=sharing',
        tech: [
           'laravel', 'Bootstrap 5', 'Mysql'
        ],
        image: leg
    },
    {
        company: 'Almeria Electric Business Licencing System',
        pointer: true,
        project: true,
        description: 'The main features of this web application include managing business registrations, automating document generation, and overseeing registered businesses.',
        year: 'May, 2024 - November, 2024',
        role: '',
        link: 'https://docs.google.com/presentation/d/1iHTanuuifH1YsaQKW6PtnJAJcwblox3MjH9BvwFh6qE/edit?usp=sharing',
        tech: [
            'laravel', 'react.js', 'tailwind', 'laravel web socket', 'Mysql'
        ],
        image: almeria
    },
    {
        company: 'BiPSU BAC Management System',
        pointer: true,
        project: true,
        description: 'This BAC Management System is designed to manage the Annual Procurement Plan (APP) and Project Procurement Management Plan (PPMP) across departments while providing efficient archiving and management capabilities.',
        year: 'May, 2024 - November, 2024',
        role: '',
        link: 'https://docs.google.com/presentation/d/16b6WFk2LLJAjuI3WYJOu6NbRCJGShRgjwmDb8XFMNOs/edit?usp=sharing',
        tech: [
            'laravel', 'react.js', 'tailwind', 'laravel web socket', 'Mysql'
        ],
        image: bac
    },
    {
        company: 'Malnutrition Management System',
        pointer: true,
        project: true,
        description: 'This Malnutrition Management System automates the prediction of a childs malnutrition status and includes basic data analytics for informed decision-making.',
        year: 'September, 2023 - December, 2023',
        role: '',
        link: 'https://docs.google.com/presentation/d/1PUoQTp35uvqVuAKAMtIBkcSExufijVjhqlIJi4uUvJA/edit?usp=sharing',
        tech: [
            'laravel', 'react.js', 'Bootstrap 5', 'Mysql'
        ],
        image: mal
    },
    {
        company: '8 RJA Ticketing System',
        pointer: true,
        project: true,
        description: 'This ticketing system features a QR code reader for processing passenger tickets and automates ticket generation. Its standout feature is integrated data analytics for enhanced operational insights.',
        year: 'June, 2023 - August, 2023',
        role: '',
        link: 'https://docs.google.com/presentation/d/1gaG1R7EqTjq-_Ff4ps7AB71yB7SvRym72msd-RG5Dzo/edit?usp=sharing',
        tech: [
            'laravel', 'react.js', 'tailwind', 'Mysql'
        ],
        image: rja
    },
    {
        company: 'Biliran Province Venues Booking System',
        pointer: true,
        project: true,
        description: 'This system is designed as a booking platform for managing venue reservations within the university.',
        year: 'September, 2023 - December, 2023',
        role: '',
        link: 'https://docs.google.com/presentation/d/1geml-chQ3KOFgUlfHpAi39pa6JdPAP1HCwr_NgscJIs/edit?usp=sharing',
        tech: [
            'laravel', 'react.js', 'tailwind', 'Mysql'
        ],
        image: ven
    },
];
