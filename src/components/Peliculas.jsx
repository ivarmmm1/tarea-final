import '../Estilo.css'
export function Peliculas(){
    return( 
        <div>
            <div className="grid grid-cols-5 grid-rows-1 gap-4 w-full h-[280px] PelisFondo items-center justify-center">
                <div >
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>El Padrino (1972)</button>
                        <dialog id="my_modal_1" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <h3 className="font-bold text-lg">El Padrino (1972)</h3>
                            <img className="h-[250px] w-[300px]" src="https://m.media-amazon.com/images/M/MV5BZmNiNzM4MTctODI5YS00MzczLWE2MzktNzY4YmNjYjA5YmY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="" />
                            <p className="py-4">Una película sobre la familia mafiosa Corleone, liderada por Vito Corleone, quien busca proteger a su familia de las amenazas y conflictos de otras bandas. </p>
                            <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                            </div>
                        </div>
                        </dialog>
                </div>
                <div >
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>El Resplandor (1980)</button>
                        <dialog id="my_modal_2" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <h3 className="font-bold text-lg">El Resplandor (1980)</h3>
                            <p className="py-4">Un hombre se muda a un hotel aislado en las montañas para trabajar como cuidador durante la temporada de invierno, pero pronto se encuentra con fuerzas oscuras y psicológicas. </p>
                            <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                            </div>
                        </div>
                        </dialog>
                </div>
                <div >
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>Pulp Fiction (1994)</button>
                        <dialog id="my_modal_3" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <h3 className="font-bold text-lg">Pulp Fiction (1994)</h3>
                            <p className="py-4">Una serie de historias interconectadas que siguen a un par de asesinos profesionales, un boxeador y una serie de personajes que viven en Los Ángeles. </p>
                            <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                            </div>
                        </div>
                        </dialog>
                </div>
                <div >
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}> La Lista de Schindler (1993)</button>
                        <dialog id="my_modal_4" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <h3 className="font-bold text-lg"> La Lista de Schindler (1993)</h3>
                            <p className="py-4">Un empresario alemán, Oskar Schindler, salva la vida de cientos de judíos durante el Holocausto al emplearlos en su fábrica. </p>
                            <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                            </div>
                        </div>
                        </dialog>
                </div>
                <div >
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}> El Señor de los Anillos: La Comunidad del Anillo (2001)</button>
                        <dialog id="my_modal_5" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <h3 className="font-bold text-lg"> El Señor de los Anillos: La Comunidad del Anillo (2001)</h3>
                            <p className="py-4">Una aventura épica que sigue a Frodo Bolsón, quien debe viajar a la Montaña del Destino para destruir un poderoso anillo mágico que ha puesto en peligro a la Tierra Media. </p>
                            <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                            </div>
                        </div>
                        </dialog>
                </div>
            </div>
        </div>
    );
}