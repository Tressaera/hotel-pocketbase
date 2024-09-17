'use client'

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { SliderImage } from '@/constants'
import Image from 'next/image'
import ImageWaves from '@/components/ImageWaves';
import HeroForm from './HeroForm';

// import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  return (
    <div className="relative h-[32rem]">
        <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
        {SliderImage.map((image, index)=>(
         <CarouselItem key={index}>
            <Image
            src={image.href}
            alt={image.alt}
            width={1920}
            height={1080}
            className='h-[32rem] lg:h-[44rem] w-full object-cover brightness-75'
            />
            <ImageWaves myclassName='absolute lg:-bottom-3'/>


         </CarouselItem>

    ))}
        </CarouselContent>
        <CarouselPrevious className='hidden lg:flex left-0' />
        <CarouselNext className='hidden lg:flex right-0' />
      </Carousel>
      <HeroForm/>
    </div>
  );
};

export default Hero;
