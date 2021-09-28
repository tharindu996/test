
function Pagi({postPerPage, totalPosts,paginate}) {
    
    const pageNumber = [];
    for(let i =1; i<= Math.ceil(totalPosts/postPerPage);i++ ){
        pageNumber.push(i);
    }
    return (
        <div>
        <nav>
            <ul >
                {pageNumber.map(number=>(
                    <span key={number}  >
                    <span  className="page-item"  style={{paddingTop:2,paddingBottom:2,paddingLeft:4,paddingRight:4, margin:8,textAlign:'justify'
                    ,cursor:'pointer' , borderStyle:'solid',borderColor:'purple'}}  onClick={()=>paginate(number)} >
                    {number}  </span>

                    </span>
                ))}
            </ul>
        </nav>
            
        </div>
    )
}
export default Pagi;