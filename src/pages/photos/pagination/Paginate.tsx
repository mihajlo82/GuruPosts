import ReactPaginate from "react-paginate";
import './paginate.css';

interface IPaginated {
  totalPagesNo: number,
  onPageChange: (e:any) => Promise<void>
}
const PaginatedItems = ({ totalPagesNo, onPageChange }: IPaginated) => { 

  return (
    <section className="paginate__layout"> 
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={(e)=>onPageChange(e)}
        pageRangeDisplayed={2}
        pageCount={totalPagesNo}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
        containerClassName={'paging'} 
        activeLinkClassName={"active__link"}
      />
    </section>
  );
}
export default PaginatedItems;

PaginatedItems.defaultProps = {
    totalPagesNo: 0, 
    onPageChange:()=> {}
}
