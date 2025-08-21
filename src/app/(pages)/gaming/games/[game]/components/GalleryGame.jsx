export const GalleryGame = ({ movies, screenshots }) => {
    return (

        <div className="overflow-hidden rounded-xl relative">
            {/* <div className="absolute text-white bottom-[50%] top-[50%] right-[3%] z-50" onClick={ () => setGallery(1)}>R</div> */}
            {movies ?
                <video controls width="100%" autoPlay muted playsInline loop>
                    <source src={movies[0].webm.max} type="video/webm" />
                </video> :
                <img className="max-h-116 w-full object-cover" src={screenshots[0].path_full} />}

        </div>


    )
}
