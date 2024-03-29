const GrainFilter = () => {
    return (
        <svg className="pointer-events-none absolute cursor-none">
            <filter id="grain">
                <feTurbulence type="turbulance" baseFrequency={0.5}></feTurbulence>
                <feColorMatrix type="saturate" values="0"></feColorMatrix>
            </filter>
        </svg>
    )
}

export default GrainFilter