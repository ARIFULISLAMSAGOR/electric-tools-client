import React from 'react';
import power from '../../images/banner/power.jpg'

const ExtraSection = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200 text-center  p-50 m-6">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={power} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Our Electric Tools </h1>
                        <p class="py-6">Electricians regularly install new lighting fixtures or need to disassemble installed hardware to access wiring and other electrical components. A handheld electric drill with various bits helps expedite these tasks—and allows professionals to affix specialty bits (like the reaming bit, see below) for industry-specific purposes.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;