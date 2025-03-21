import Image from "next/image";

export default function TestContent () {
    return (
        <div className="min-h-[90vh] hidden 2xl:flex md:flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/Section Presentation.svg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            
        </div>
    );
};