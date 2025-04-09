export default  function projectList({params}: {params: {projectsid: string}}) { 
    return(
        <>
        <h1>Product Details Lists </h1>
        <h2>{params.projectsid}</h2>
    
        </>
    )
}