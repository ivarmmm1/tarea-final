import '../Estilo.css'

export function Cartilla(){
    return(
        <div>              
        <div className="grid grid-cols-3 grid-rows-1 gap-4 PrincipalFondo">
            <div >
                <div className="card bg-transparent border-2 w-96 shadow-sm">
                <figure>
                    <img className="picture"
                    src="https://media.glamour.es/photos/616fb6d5bcde302b0cd8479a/master/w_1600%2Cc_limit/554045.jpg"
                    alt="Shoes" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title  place-content-center">Johnny Depp</h2>
                    <div className="card-actions justify-end">
                
                    </div>
                </div>
                </div>
            </div>
            <div >
                <div className="card bg-transparent border-2 w-96 shadow-sm">
                <figure>
                    <img className="picture"
                    src="https://imagenes.elpais.com/resizer/v2/S57YFLXDGRFFPAAWU3FPER6RAI.jpg?auth=a0f6536b6d175398902ac469268f3353ee9c8a9ceb29de24cb80e209e12ea8b1&width=980&height=980&smart=true"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title place-content-center">Leonardo DiCaprio</h2>
                    
                    <div className="card-actions justify-end">
                    
                    </div>
                </div>
                </div>
            </div>
            <div >
                <div className="card bg-transparent border-2 w-96 shadow-sm">
                <figure>
                    <img className="picture"
                    src="https://www.fundacioncadah.org/j289eghfd7511986_uploads/web_1/post_images/image_item_final_211.jpg"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title place-content-center">Will Smith</h2>
                    <div className="card-actions justify-end">
                  
                    </div>
                </div>
                </div>      
            </div>
        </div> 
        </div>
    );
}