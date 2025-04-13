import Vapor from 'laravel-vapor';

export default function ApplicationLogo() {
    return (
        <img 
            className="block h-14 pr-5 w-auto"
            alt="Logo"
            src={Vapor.asset('images/logo.avif')}
        />
    );
}
