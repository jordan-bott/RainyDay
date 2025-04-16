const Squiggles = () => {
  // creates 10 decorative squiggles used in the background
  return (
    <>
      {[...Array(10)].map((_, i) => {
        return <div className="squiggle" key={i}></div>
      })}
    </>
  )
}

export default Squiggles
