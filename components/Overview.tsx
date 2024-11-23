'use client';
import Image from 'next/image';

const Overview = () => {
    return (
        <section id="about2">
        <div className="p-6 bg-black">
            <h1 className="my-10 text-center font-bold text-4xl">
                What We Are?
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 p-4">
                    <p className="text-lg text-gray-700">
                        WhiteBoxMedia is an event management firm based in Jaipur, Rajasthan, specializing in creating unique and memorable events. We excel in planning weddings, corporate events, social parties, and more across Rajasthan. Since 2012, we've completed over 500 events, ensuring each one is special.
                    </p>
                </div>
                <div className="md:w-1/2 p-4">
                    <Image 
                        src="/herobg.png" 
                        alt="Project Image" 
                        width={500} 
                        height={300} 
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
        </section>
    );
};

export default Overview;