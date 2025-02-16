"use client"
import { UserDetailConstext } from '@/app/_context/UserDetailContext';
import { db } from '@/configs/FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';

function LogoList() {
    const { userDetail } = useContext(UserDetailConstext);
    const [logoList, setLogoList] = useState([]);

    useEffect(() => {
        if (userDetail) {
            GetUserLogos();
        }
    }, [userDetail]);

    const GetUserLogos = async () => {
        const querySnapshot = await getDocs(collection(db, "users", userDetail?.email, "logos"));
        const logos = [];
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            logos.push(doc.data());  // Collect all data first
        });
        setLogoList(logos);  // Update state once with all data
    };

    return (
        <div className="mt-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {logoList.length > 0 ? (
                    logoList.map((logo, index) => (
                        <div key={index} className="p-4 bg-white rounded-lg shadow-lg hover:scale-105 transition-all cursor-pointer"
                        >
                            <Image src={logo?.image} width={400} height={200} className="w-full rounded-xl" alt={`Logo ${index}`} />
                            <h2 className='text-center text-lg font-medium mt-2'>{logo?.title}</h2>
                            <p className='text-sm text-gray-500 text-center'>{logo?.desc}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No logos found.</p>
                )}
            </div>
        </div>
    );
}

export default LogoList;
