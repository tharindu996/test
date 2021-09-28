const Details = ({book}) => {

    console.log(book);
    return ( 

        <div >
            {
                book.map((b)=>(

                    <p style={{color:'#C70039'}}>
                        
                    </p>
                ))
            }
        </div>
     );
}
 
export default Details;