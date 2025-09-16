interface BgVideoProps {
    video: string,
}

export const BgVideo = ({ video }: BgVideoProps) => {
    return (
        <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
            <video
                key={video} // 🔹 Esto fuerza a React a crear un nuevo elemento
                className="h-full w-full translate-x-[10%] object-cover"
                autoPlay
                muted
                playsInline
                loop
            >
                {video ? <source src={video} type="video/webm" /> : null}
            </video>
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-black from-20% via-black/60 via-40% to-transparent" />
        </div>

    )
}
