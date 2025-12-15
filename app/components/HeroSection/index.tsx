import { forwardRef } from "react"

export const HeroSection = forwardRef<HTMLElement>((_, ref) => { 
    return (
        <section className='h-[calc(100dvh-120px)]' ref={ref}>
            <div className='w-full h-full overflow-hidden relative'>
                <video
                    autoPlay
                    muted
                    playsInline
                    loop
                    preload="auto"
                    className="w-full h-full object-cover"
                >
                    <source src="./video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 z-10 bg-black/40"></div>
            </div>
        </section>
    )
})

HeroSection.displayName = 'HeroSection'